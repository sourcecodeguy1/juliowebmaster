const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateContact, mailConfig, contactHandler, contactLimiter } = require('../dist/contact');
const valid = { firstName: '李 O’Neil-123', email: "odd+tag.o'neil@example.com", message: '我想建立一个网站。', website: '' };
function response() {
  return { statusCode: 200, headers: {}, status(n) { this.statusCode=n; return this; }, json(body) { this.body=body; }, setHeader(k,v) { this.headers[k]=v; } };
}
test('validation accepts unusual names/emails and international project descriptions', () => {
  assert.equal(validateContact(valid), undefined);
  assert.equal(validateContact({...valid, firstName:'1234'}), undefined);
});
test('rejects malformed types, injection, over-limit data, honeypots and non-word messages', () => {
  for (const body of [null, [], {...valid,firstName:{}}, {...valid,email:[]}, {...valid,message:17}, {...valid, firstName:'a\r\nBcc: evil'}, {...valid,email:'x@example.com\r\nBcc:x'}, {...valid,email:'x@@example.com'}, {...valid,firstName:'a'.repeat(101)}, {...valid,email:'a'.repeat(255)+'@x.com'}, {...valid,message:'a'.repeat(5001)}, {...valid,website:'https://bot.example'}, {...valid,website:123}]) assert.ok(validateContact(body));
  for (const message of ['123456', '  ', '!?...---', '１２３ + 456', '123 !? \n']) assert.match(validateContact({...valid,message}), /project|description/);
});
test('production requires explicitly configured provider, verified domain and credentials', () => {
  const env={NODE_ENV:'production',MAIL_PROVIDER:'resend',MAIL_DOMAIN_VERIFIED:'true',MAIL_USER:'resend',MAIL_PASS:'test-placeholder'};
  const config=mailConfig(env);
  assert.equal(config.host,'smtp.resend.com'); assert.equal(config.secure,true); assert.equal(config.port,465);
  for (const update of [{MAIL_PROVIDER:'mailtrap'},{MAIL_DOMAIN_VERIFIED:'false'},{MAIL_PASS:''},{MAIL_USER:'visitor@example.com'}]) assert.throws(()=>mailConfig({...env,...update}));
  assert.equal(mailConfig({MAIL_PROVIDER:'mailtrap',MAIL_USER:'test',MAIL_PASS:'test'}).host,'sandbox.smtp.mailtrap.io');
});
test('sender is owned domain, Reply-To is visitor, plain text and acceptance is required', async () => {
  let mail;
  const res=response();
  await contactHandler(async m=>{mail=m;return {accepted:['juliowebmaster1@gmail.com'],rejected:[]};})({body:valid},res);
  assert.equal(res.body.success,'OK'); assert.equal(mail.from.address,'website@juliowebmaster.com');
  assert.equal(mail.to,'juliowebmaster1@gmail.com'); assert.equal(mail.replyTo,valid.email); assert.equal(mail.html,undefined); assert.ok(mail.text.includes(valid.message));
});
test('invalid requests never send; rejection and SMTP failure never report success or leak details', async () => {
  let called=false;
  const bad=response();
  await contactHandler(async()=>{called=true;})({body:{...valid,website:'bot'}},bad);
  assert.equal(called,false); assert.equal(bad.statusCode,400);
  const original=console.error; const logs=[]; console.error=(...args)=>logs.push(args);
  try {
    for (const send of [async()=>({accepted:[],rejected:['juliowebmaster1@gmail.com']}),async()=>({}),async()=>{throw new Error('SECRET PASSWORD message contents');}]) {
      const res=response(); await contactHandler(send)({body:valid},res);
      assert.equal(res.statusCode,503); assert.equal(res.body.success,undefined); assert.match(res.body.error,/text is still here/);
    }
    assert.ok(!JSON.stringify(logs).includes('SECRET'));
    assert.ok(!JSON.stringify(logs).includes(valid.message));
  } finally { console.error=original; }
});
test('rate limit applies per IP, ignores spoofed headers, expires and caps total attempts', () => {
  let time=0; const limiter=contactLimiter(()=>time);
  const request=(ip)=>{const res=response();let passed=false;limiter({ip,socket:{},headers:{'x-forwarded-for':Math.random().toString()}},res,()=>{passed=true;});return {res,passed};};
  for(let i=0;i<5;i++) assert.equal(request('same-ip').passed,true);
  const blocked=request('same-ip');assert.equal(blocked.res.statusCode,429);assert.ok(blocked.res.headers['Retry-After']);
  assert.equal(request('other-ip').passed,true);
  time=900001;assert.equal(request('same-ip').passed,true);
  for(let i=0;i<73;i++) request('ip'+i);
  assert.equal(request('another').res.statusCode,429);
  time=86400001;assert.equal(request('same-ip').passed,true);
});

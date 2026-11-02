# Contact email: setup and verification

Status: Resend domain verified. Four approved DNS records are published in Contabo. The domain-restricted sending key is stored in a root-only server env file, and SMTP TLS/authentication was verified from Contabo without sending email. Compose is backed up and prepared; deployment and Gmail receipt verification remain pending. No paid plan was purchased. No temporary full-access API key was created or needed.

## Current infrastructure

Read `/home/julio/personal_projects/CONTABO_MIGRATION.md` and `INFRASTRUCTURE.md`; the migration supersedes old Vultr host details. The live server is Contabo `66.94.123.85`. DNS is now hosted on Contabo: authoritative nameservers are ns1.contabo.net, ns2.contabo.net, and ns3.contabo.net (verified via live DNS lookup). The migration notes' statement that DNS stayed on Vultr is stale. Portfolio Compose files are `/root/apps/portfolio/docker-compose.yml` and `/root/apps/portfolio-server/docker-compose.yml`. The API runs in `portfolio-server`, behind Traefik on `traefik_network`, with no public API port.

Read-only inspection found SMTP sandbox host `smtp.mailtrap.io`, port 2525, old `MAIL_TO` pointing at Yahoo, no production provider variables, and no mounted env file. Existing credentials are container environment settings. Do not print Compose output, `docker inspect` environment values, or secrets into chat/logs. The new handler fixes the destination to `juliowebmaster1@gmail.com`; legacy MAIL_TO/HOST/PORT settings no longer control it.

GitHub Actions builds images and recreates containers after pushes to master. Confirm the repository's HOST secret is `66.94.123.85` (the checked-in workflow cannot reveal its current value). The workflow label and README previously still said Vultr. The HOST secret has now been explicitly updated to 66.94.123.85 through the authenticated GitHub settings page. Configure the production environment BEFORE deploying this change; incomplete configuration returns a helpful failure rather than silently using the sandbox.

## Provider and account setup

Use Resend transactional email with existing Nodemailer, SMTP over TLS on `smtp.resend.com:465`. A low-volume form fits its free transactional offering; check current limits at https://resend.com/pricing before choosing a plan. Do not purchase a plan.

1. Create/sign into a Resend account and add the **root domain `juliowebmaster.com`** under Domains. Select a US region. Keep open/click tracking off for personal inquiries. Adding only `send.juliowebmaster.com` as the verified domain would not verify the chosen root-domain From address.
2. The provider explicitly supports any sender at a verified domain, so `website@juliowebmaster.com` is supported after verification. No mailbox needs to be provisioned for that address. Incoming replies use the validated visitor email in Reply-To, while From stays `Julio Webmaster Portfolio <website@juliowebmaster.com>`.
3. Copy the exact generated **sending** DNS rows from the domain's Records tab for review. Obtain approval before modifying DNS. DNS is hosted on Contabo, confirmed by live nameserver lookup. Do not change nameservers or root-domain inbound MX records.

Expected records with the default `send` return path (the dashboard is authoritative):

| Type | Name | Required value |
| --- | --- | --- |
| TXT | `resend._domainkey.juliowebmaster.com` | The complete account-generated DKIM public key from Resend. Cannot be supplied before adding the domain. |
| TXT | `send.juliowebmaster.com` | Generated SPF value, commonly `v=spf1 include:amazonses.com ~all`; use the exact dashboard value. |
| MX | `send.juliowebmaster.com` | Generated region-specific feedback SMTP host and priority, commonly priority 10; copy exactly from Resend. |
| TXT | `_dmarc.juliowebmaster.com` | If absent, propose `v=DMARC1; p=none;` for approval. Preserve an existing DMARC policy; do not create a second record. |

Some domain configurations instead generate CNAME rows. Copy those exact types, names, targets, priorities and TTLs; never fabricate the DKIM key or region target. Ensure any CNAME is DNS-only. Do not enable inbound receiving. Do not publish duplicate SPF records at the same hostname. Have the generated rows reviewed before applying them, then wait until Resend reports **Verified**.

4. Create an API key with **Sending access**, restricted to `juliowebmaster.com`. SMTP username is the literal `resend`; SMTP password is this API key. Do not paste it into chat or commit it.

Official references:
- https://resend.com/docs/send-with-smtp
- https://resend.com/docs/dashboard/domains/introduction
- https://resend.com/docs/add-a-domain

## Configure secrets securely on Contabo

Use an SSH session and an editor on the server, without putting secret values in shell arguments/history. As root, create `/root/apps/portfolio-server/contact.env` with permissions 600 (use `umask 077` before creating it). Copy the variable names from `server/.env.production.example`, then fill in MAIL_PASS directly in the server editor. Keep the existing GROQ_API_KEY secure; don't replace it with an empty example value.

Set:
- `NODE_ENV=production`
- `MAIL_PROVIDER=resend`
- `MAIL_DOMAIN_VERIFIED=true` only after the provider's domain status is Verified
- `MAIL_USER=resend`
- `MAIL_PASS=<domain-restricted sending API key>` entered only in the server editor
- `ALLOWED_ORIGIN=https://juliowebmaster.com`, existing PORT and GROQ_API_KEY
- `TRUSTED_PROXIES=<stable exact Traefik IP>` after verifying the proxy topology below

Edit only the `portfolio-server` service's Compose mail settings. Prefer mounting this file read-only at `/app/.env:ro` (dotenv already reads it) rather than embedding secrets in Compose. Remove old MAIL_* inline values from `environment`, as container environment overrides dotenv. Keep other service labels, network, restart policies and port routing. Do not build the env file into images. Add `NODE_ENV: production` explicitly to the service environment as well. Avoid dumping a resolved Compose configuration to a terminal/log.

Example addition to the **existing** service, not a replacement Compose file:

```yaml
services:
  portfolio-server:
    environment:
      NODE_ENV: production
      # Preserve existing non-mail settings. Remove obsolete inline MAIL_* settings.
    volumes:
      - /root/apps/portfolio-server/contact.env:/app/.env:ro
```

Traefik was `172.18.0.8` at inspection time; this is dynamic and must not be blindly hardcoded. Configure a stable proxy address or update TRUSTED_PROXIES when it changes. Trust only that proxy, not all shared Docker peers, `true`, or an arbitrary hop count. Keep API ports unpublished and ensure Traefik does not trust arbitrary incoming forwarded headers. Verify two distinct external clients get distinct request IPs, and spoofing X-Forwarded-For does not reset limits. Without proxy trust, requests share the proxy's bucket (safe but restrictive).

## Local Mailtrap sandbox

Copy `server/.env.example` to `server/.env`, enter **Email Testing / Sandbox** credentials in an editor, and start the server. Non-production mode requires `MAIL_PROVIDER=mailtrap` and uses `sandbox.smtp.mailtrap.io:2525` with STARTTLS. Production requires Resend and verification confirmation, with no sandbox fallback. Both use the fixed Gmail envelope recipient; sandbox messages are captured only, not delivered to Gmail. Local frontend requests to `/api` must be routed to port 3002 by your development reverse proxy.

## Protections and operational limits

- Name: nonempty, max 100 characters, no header/control characters; no name reputation or unusual-name filter.
- Email: server-side syntax/length/header-injection validation, max 254 characters; no domain allowlist or unusual-address filter.
- Message: max 5,000 characters, at least one Unicode letter. Digits/whitespace/punctuation alone fail with a request to describe the project. This is a content check, not a language allowlist.
- JSON body capped at 32 KiB; hidden honeypot checked server-side, never used to falsely report sending success.
- 5 attempts per IP per 15 minutes and 80 attempts globally per 24 hours, including invalid submissions. Retry-After is returned on throttling. Bounded in-memory storage; restarting resets counters. This fits the current single always-on API container. Multiple replicas need shared storage and limits; sustained distributed spam may exhaust the global allowance.
- Provider failures log only a fixed event and provider label. No SMTP error objects, credentials, visitor addresses or message bodies are logged by the handler.
- Success requires SMTP acceptance for the configured recipient. It does not guarantee inbox placement. Failure retains the form text and offers a direct-email alternative.

If automated submissions persist after these protections, add Cloudflare Turnstile (no DNS migration required): create a site widget for juliowebmaster.com, put only its public site key in the frontend, keep TURNSTILE_SECRET_KEY server-side, and verify each token through Cloudflare Siteverify on the backend **before sending mail**, including hostname, action, expiry and replay checks. Use an accessible widget and handle challenge expiration/failure with retry while retaining all text. Do not add a frontend-only challenge. Turnstile has not been enabled because persistent automated spam has not yet been established.

## Deployment and live test gate

1. Run `npm test --prefix server`, focused frontend tests, and both builds. Review the production env file and Compose changes without revealing secrets.
2. Deploy the reviewed code and recreate only the portfolio services using the existing workflow. Verify the live contact page loads and same-origin `/api/send-email` reaches the new backend.
3. With provider verification and secure credentials ready, send **one** form inquiry named `Portfolio delivery verification`, with subject produced by the form (`Portfolio inquiry from Portfolio delivery verification`) and message: `[TEST — portfolio contact delivery verification] Please confirm receipt of this one-time test. No action needed beyond confirming receipt.` Use a real, consenting visitor Reply-To address (the owner’s Gmail is suitable for this test).
4. Check provider acceptance/status without exporting message content or credentials, then ask Julio to check `juliowebmaster1@gmail.com`, including Spam, confirm receipt, and inspect Reply-To. Do not repeat-send blindly after a timeout: the SMTP server might already have accepted it.
5. Mark live delivery verified only after Julio confirms receipt. Current state: **not sent, not verified**, awaiting deployment and the one-time test. Never interpret a mock test or sandbox acceptance as Gmail delivery.

## Actual approved and published Resend records

Domain ID: `6287147b-8f5b-4fca-897b-6085451748c2`. These are the actual generated records from the authenticated dashboard, superseding the example MX/SPF rows above. Sending is enabled; receiving is disabled. Public DNS lookups returned no records at these four names when checked.

| Type | Name (relative to juliowebmaster.com) | Content | TTL |
| --- | --- | --- | --- |
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjNDxAe7iqkgC0hwaGUSE9zxQsy4w1B4md/6LY+7kkbKJoa5IiA0ndvfms0ufxIW0CC/RASgOw4UYvbVjRfybNlsZKNJ4OZqsKwMTjMVOrx7wceuFmONpywfProFVZkgfWkfajAERIRVvlrkywaeECRS3/172zHqsCpsCfpQyobwIDAQAB` | 3600 seconds (Contabo minimum) |
| CNAME | `rsend` | `rsend.forge.rmta.net` | 3600 seconds (Contabo minimum) |
| CNAME | `send` | `send.forge.rmta.net` | 3600 seconds (Contabo minimum) |
| TXT (optional DMARC) | `_dmarc` | `v=DMARC1; p=none;` | 3600 seconds (Contabo minimum) |

The user approved these four additions, all four are published and confirmed against ns1.contabo.net, and Resend reports the domain Verified. Existing root MX, nameservers, and web routing were preserved. A sending-only key restricted to juliowebmaster.com has been created and transferred securely to /root/apps/portfolio-server/contact.env (mode 600); SMTP TLS/authentication passed. No credentials were included in tool output or committed. No email has been sent yet.

DNS publication check: the DKIM TXT value exactly matches the Resend dashboard; both CNAME targets resolve as configured and the DMARC TXT is published. Existing root MX and web routing were left unchanged. No test email has been sent.

Runtime preparation: original Compose backed up on Contabo with mode 600; the service now mounts contact.env read-only at /app/.env and sets NODE_ENV=production. Existing non-mail settings, including the chat credential, are retained in that env file. TRUSTED_PROXIES is the currently verified exact Traefik IP (172.18.0.8); refresh it if the proxy address changes. The running container has not yet been recreated.

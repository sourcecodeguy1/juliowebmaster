import React, {useState} from 'react';
import {ContactContainer} from './SemanticContact.styled'
import {Button, Form, Input, TextArea, Message} from 'semantic-ui-react'
import validator from 'validator';
import axios from "axios";

const SemanticContact = (props) => {

    const [input, setInput] = useState({
        firstname: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState({
        firstname: "",
        email: "",
        message: "",
    });

    const [form, setForm] = useState({
        success: false,
        error: false,
        submitted: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        handleValidateInput(e);
    };

    const handleValidateInput = (e) => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};

            switch (name) {
                case "firstname":
                    if (!value) {
                        stateObj[name] = "Please enter your first name.";
                    }
                    break;

                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter your email.";
                    }else if(!validator.isEmail(value)){
                        stateObj[name] = "Please enter a valid email.";
                    }
                    break;

                case "message":
                    if (!value) {
                        stateObj[name] = "Please enter your message.";
                    }
                    break;

                default:
                    break;
            }
            return stateObj;
        });
    };

    const handleClick = (e) => {
        e.preventDefault();

        setForm({submitted: true});

        axios.post('/api/send-email', {
           firstName: input.firstname,
           email: input.email,
           message: input.message,
        }

        ).then((result) => {
            let response = result.statusText;
            console.log(response);
            if(response === "OK"){
                setForm({submitted: false, success: true});
                setInput({firstname: "", email: "", message: ""});
            } else {
                setForm({submitted: false, error: true});
            }
        });

    };

    return(
        <ContactContainer>
            <h1>Contact Me!</h1>
            <p>If you need help on creating your website, I may be able to help you out.</p>
            <Form error success className={form.submitted === true ? `loading` : ``}>
                <Form.Field
                    id='first-name'
                    name={`firstname`}
                    control={Input}
                    label='First name'
                    placeholder='First name'
                    value={input.firstname}
                    onChange={handleInputChange}
                    error={error.firstname !== "" ? error.firstname : null}
                />
                <Form.Field
                    id='email'
                    name={`email`}
                    control={Input}
                    label={`Email`}
                    placeholder={`john@smith.com`}
                    value={input.email}
                    onChange={handleInputChange}
                    error={error.email !== "" ? error.email : null}
                />
                <Form.Field
                    id='message'
                    name={`message`}
                    control={TextArea}
                    label={`Message`}
                    placeholder='Add your message'
                    value={input.message}
                    onChange={handleInputChange}
                    error={error.message !== "" ? error.message : null}
                />
                <Button
                    className={input.firstname === "" || input.email === "" || !validator.isEmail(input.email) || input.message === "" ? "disabled" : ""}
                    onClick={handleClick}>Submit</Button>
                {
                    form.success === true
                    ? <Message
                            success
                            header='Form Completed'
                            content="Your message was sent!"
                        />
                    :
                    form.error === true
                    ? <Message
                            error
                            header='System Error'
                            content='Something went wrong, please try again later.'
                        />
                        :
                        ""
                }
            </Form>
        </ContactContainer>
    );
}

export default SemanticContact;
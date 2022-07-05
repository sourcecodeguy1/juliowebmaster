import React, {useState} from 'react';
import {ContactContainer} from './SemanticContact.styled'
import {Button, Form, Input, TextArea} from 'semantic-ui-react'

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
    })

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

        // call axios to save data to database

    };

    return(
        <ContactContainer>
            <h1>Contact Me!</h1>
            <h1>First Name value is: {input.firstname}</h1>
            <Form>
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
                    className={input.firstname === "" || input.email === "" || input.message === "" ? "disabled" : ""}
                    onClick={handleClick}>Submit</Button>
            </Form>
        </ContactContainer>
    );
}

export default SemanticContact;
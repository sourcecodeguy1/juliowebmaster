import React, {useEffect, useState} from 'react';
import '../../App.css';

import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTextArea,
    MDBSpinner
} from 'mdb-react-ui-kit';
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

    useEffect(() => {
        console.log(error.firstname);
    },[error.firstname]);

    const handleInputChange = (e: any) => {

        setInput({ ...input, [e.target.name]: e.target.value });

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

        setTimeout(function (){
            setForm({submitted: false, error: true});
            setInput({firstname: "", email: "", message: ""});
        }, 3000);

        /*axios.post('/api/send-email', {
           firstName: input.firstname,
           email: input.email,
           message: input.message,
        }

        ).then((result) => {
            if(result.data.success === "OK"){
                setForm({submitted: false, success: true});
                setInput({firstname: "", email: "", message: ""});
            } else {
                setForm({submitted: false, error: true});
            }
        });*/

    };

    return(
        <MDBContainer>
            <MDBRow className={`mt-5`}>

                <MDBCol lg={`3`}></MDBCol>
                <MDBCol sm={`12`} lg={`6`}>
                    <MDBInput className={error.firstname !== "" ? "is-invalid" : ""} label='First name' id={`first-name`} name={`firstname`} type='text' value={input.firstname} onChange={handleInputChange} required />
                    <div className={`error`} style={error.firstname !== "" ? {color: `#f93151`, position: `absolute`, marginTop: `-0.75rem`} : {display: `none`}}>{error.firstname}</div>
                </MDBCol>
            </MDBRow>
            <MDBRow className={`mt-5`}>
                <MDBCol lg={`3`}></MDBCol>
                <MDBCol sm={`12`} lg={`6`}>
                    <MDBInput className={error.email !== "" ? "is-invalid" : ""} label='Email' id='email' name={`email`} type='text' value={input.email} onChange={handleInputChange} />
                    <div className={`error`} style={error.email !== "" ? {color: `#f93151`, position: `absolute`, marginTop: `-0.75rem`} : {display: `none`}}>{error.email}</div>
                </MDBCol>
            </MDBRow>
            <MDBRow className={`mt-5`}>
                <MDBCol lg={`3`}></MDBCol>
                <MDBCol sm={`12`} lg={`6`}>
                    <MDBTextArea className={error.message !== "" ? "is-invalid" : ""} label='Message' id='message' name={`message`} value={input.message} onChange={handleInputChange} rows={4} />
                    <div className={`error`} style={error.message !== "" ? {color: `#f93151`, position: `absolute`, marginTop: `-0.75rem`} : {display: `none`}}>{error.message}</div>
                </MDBCol>
            </MDBRow>
            <MDBRow className={`mt-3`}>
                <MDBCol lg={`3`}></MDBCol>
                <MDBCol sm={`12`} lg={`6`}>
                    <MDBBtn className={input.firstname === "" || input.email === "" || !validator.isEmail(input.email) || input.message === "" ? "disabled" : form.submitted === true ? "disabled" : ""}
                    onClick={handleClick}
                    >
                        {form.submitted === true ? <MDBSpinner size='sm' role='status' tag='span' /> : "Submit"}

                    </MDBBtn>
                </MDBCol>

            </MDBRow>
            {
                form.success === true
                    ?<MDBRow className={`mt-3`}>
                        <MDBCol lg={`3`}></MDBCol>
                        <MDBCol lg={`6`}><div className={`message-success`}>Message Sent!</div></MDBCol>
                    </MDBRow>
                    :
                    form.error === true
                    ?<MDBRow className={`mt-3`}>
                            <MDBCol lg={`3`}></MDBCol>
                            <MDBCol lg={`6`}><div className={`message-error`}>Error! Something went wrong. Please try again later.</div></MDBCol>
                        </MDBRow>
                    : ""
            }
        </MDBContainer>
    );
}

export default SemanticContact;
import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";

import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit';

const SemanticNavbar = (props) => {

    const [activeItem, setActiveItem] = useState('home');

    const [showNavCentred, setShowNavCentred] = useState(false);

    const handleToggleActive = (value) => {
        setActiveItem(value);
    }

    useEffect(() => {

    }, [activeItem]);

    return(
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarCenteredExample'
                        aria-controls='navbarCenteredExample'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavCentred(!showNavCentred)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample' className={`justify-content-center`}>
                        <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link to={`/`}>
                                    <MDBNavbarLink className={activeItem === 'home' ? "active" : ""} onClick={() => handleToggleActive('home')} aria-current='page'>
                                        Home
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to={`/resume`}>
                                    <MDBNavbarLink className={activeItem === 'resume' ? "active" : ""} onClick={() => handleToggleActive('resume')}>
                                        Resume
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to={`/contact`}>
                                    <MDBNavbarLink className={activeItem === 'contact' ? "active" : ""} onClick={() => handleToggleActive('contact')} tabIndex={-1} aria-disabled='true'>
                                        Contact
                                    </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
};

export default SemanticNavbar;
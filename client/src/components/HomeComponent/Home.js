import axios from "axios";
import React, {useState, useEffect} from 'react';
//import SemanticCard from "../CardComponent/SemanticCard";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol, MDBContainer, MDBCardFooter,
} from 'mdb-react-ui-kit';
//import {StyledDiv} from "../CardComponent/SemanticCard.styled"

const Home = (props) => {

    return(
        <div>
            <div style={{textAlign: `center`}}>
                <br />
                <h1>Projects</h1>
            </div>
            <br />
            <MDBContainer>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol lg={`6`}>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='/project-images/Github-User_Search.png'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle><strong>GitHub User Search</strong></MDBCardTitle>
                                <MDBCardText>
                                    This application connects to the Github API. A user is presented with a
                                    search box to search a username that exists in Github.
                                </MDBCardText>
                                <MDBCardText>
                                    This is a challenge from <a target={`_blank`} href={`https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6`}>frontendmentor.io</a>.
                                </MDBCardText>
                                <MDBCardText>
                                    <MDBCardTitle><strong>Tech Stack</strong></MDBCardTitle>
                                </MDBCardText>
                                <MDBCardText>
                                    <ul>
                                        <li>Created using the react framework</li>
                                        <li>Used MDBootstrap 5 and style components to style the webpage</li>
                                        <li>Utilized Docker to containerize the application</li>
                                        <li>Setup CI/CD pipeline using Github Actions</li>
                                    </ul>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className={`d-flex justify-content-between`}>
                                <a href={`https://github-user-search.juliowebmaster.com/`} target={`_blank`} className={`btn btn-primary`}>Visit Site</a>
                                <a href={`https://github.com/sourcecodeguy1/user-search-github`} target={`_blank`} className={`btn btn-dark`}>GitHub</a>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={`6`}>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src='/project-images/Job-Listings.png'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle><strong>Job Listings</strong></MDBCardTitle>
                                <MDBCardText>
                                    This web application is a simple list of jobs where a user can filter by clicking specific
                                    categories on the job list.
                                </MDBCardText>
                                <MDBCardText>
                                    This is a challenge from <a target={`_blank`} href={`https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt`}>frontendmentor.io</a>.
                                </MDBCardText>
                                <MDBCardText>
                                    <MDBCardTitle><strong>Tech Stack</strong></MDBCardTitle>
                                </MDBCardText>
                                <MDBCardText>
                                    <ul>
                                        <li>A React Js modern front-end framework web application</li>
                                        <li>Utilized styled components to style the webpage</li>
                                        <li>Created Docker to containerize the application</li>
                                        <li>Setup CI/CD pipeline using Github Actions</li>
                                    </ul>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className={`d-flex justify-content-between`}>
                                <a href={`https://jobs.juliowebmaster.com/`} target={`_blank`} className={`btn btn-primary`}>Visit Site</a>
                                <a href={`https://github.com/sourcecodeguy1/jobs-listing`} target={`_blank`} className={`btn btn-dark`}>GitHub</a>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
};

export default Home;
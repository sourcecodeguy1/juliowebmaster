import axios from "axios";
import React, {useState, useEffect} from 'react';
import SemanticCard from "../CardComponent/SemanticCard";

import {StyledDiv} from "../CardComponent/SemanticCard.styled"

const Home = (props) => {

    return(
        <div>
            <div style={{textAlign: `center`}}>
                <h1>Projects</h1>
            </div>
            <br />
            <StyledDiv as={`div`}>
                <SemanticCard
                    title={`Crud App`}
                    description={[
                        `Utilized react for modern approach`,
                        `Used Bootstrap to style the webpage`,
                        `Added MySQL database for back-end storage`,
                        `Node Js was setup to make back-end possible`
                    ]}
                    app_description={
                    `A simple crud application where a user can insert, update, edit, or delete data.`
                    }
                />
                <SemanticCard
                    title={`Jobs Listing`}
                    description={[
                        `A React Js modern front-end framework web application`,
                        `Utilized styled components to style the webpage`,
                        `Connected MySQL database for data storage`,
                        'Implemented Node Js for back-end server side routing'
                    ]}
                    app_description={
                        `This web application is a simple list of jobs where a user can filter by clicking specific
                         categories on the job list. This is a challenge from Frontend mentor.
                         <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt">Job Listings</a>
                        `
                    }
                />
                <SemanticCard
                    title={`DDR GUY 2`}
                    description={[
                        `Used ejs template to display view to user`,
                        `Utilized Bootstrap to style the webpage`,
                        `Created MySQL database to store users and user's information.`
                    ]}
                    app_description={
                        `Creating a mini social network for DDR player. They can post pictures,
                        videos and more.`
                    }
                />
            </StyledDiv>
        </div>
    )
};

export default Home;
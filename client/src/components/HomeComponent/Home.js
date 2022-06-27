import axios from "axios";
import React, {useState, useEffect} from 'react';
import SemanticCard from "../CardComponent/SemanticCard";

import {StyledDiv} from "../CardComponent/SemanticCard.styled"

const Home = (props) => {

    const [post, setPost] = useState([]);
    // make axios call to api
    // for dummy data
    useEffect(() => {
        async function fetchPost() {
            const URL = '/api/test';
            try {
                const res = await axios.get(URL);
                console.log(res);
                setPost(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, []);

    return(
        <div>

            <br />
            <div>
                {post}
            </div>
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
                    title={`Uppy App`}
                    description={[
                        `Used ejs template to display view to user`,
                        `Utilized Bootstrap to style the webpage`,
                        `MySQL database is being used for data storage`,
                        'Integrated uppy third-party for drag and drop functionality',
                        'Utilized Node Js for back-end connectivity'
                    ]}
                    app_description={
                        `An application for drag and drop using uppy. Users can drag and drop files and they
                        get stored in the database.`
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
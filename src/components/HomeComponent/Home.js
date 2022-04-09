import React from 'react';
import SemanticHeader from "../HeaderComponent/SemanticHeader";
import SemanticCard from "../CardComponent/SemanticCard";
import SemanticNavbar from "../NavbarComponent/SemanticNavbar";

const Home = (props) => {
    return(
        <div>
            <SemanticHeader />
            <SemanticNavbar />
            <SemanticCard />
        </div>
    )
};

export default Home;
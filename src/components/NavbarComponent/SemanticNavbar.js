import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';

import {StyledMenu} from "./SemanticNavbar.styled";

import {Link} from "react-router-dom";

const SemanticNavbar = (props) => {

    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
        console.log(name);
    }

    return(
        <div>
            <StyledMenu>
                <Menu.Item
                    as={Link}
                    name='home'
                    onClick={handleItemClick}
                    to={`/`}
                />
                <Menu.Item
                    as={Link}
                    name='Resume'
                    onClick={handleItemClick}
                    to={`/resume`}
                />
            </StyledMenu>
        </div>
    )
};

export default SemanticNavbar;
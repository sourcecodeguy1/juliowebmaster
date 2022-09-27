import React from 'react';
import {Card, List, Button} from "semantic-ui-react";

import {StyledCard, StyledList} from './SemanticCard.styled';

const SemanticCard = ({id, title, description, app_description}) => {

    const handleClick = () => {

        switch (id){
            case 'job-listings':
                window.open("https://jobs.juliowebmaster.com/", "_blank");
                break;
            default:
        }

    }

    const handleClickGitHub = () => {
        switch (id){
            case 'job-listings':
                window.open("https://github.com/sourcecodeguy1/jobs-listing", "_blank")
                break;
            default:
        }
    }

    return (
          <div>
            <Card.Group>
                <StyledCard>
                    <Card.Description>
                        <Card.Header style={{fontSize: `20px`, paddingBottom: `25px`, paddingTop: `10px`}}>{title}</Card.Header>
                    </Card.Description>
                    <Card.Content>
                        <h3>Programming Stack</h3>
                        <StyledList bulleted>
                            {description.map((name, index) => (
                                 <List.Item key={index}>{name}</List.Item>
                                ))
                            }
                        </StyledList>
                    </Card.Content>
                    <Card.Content>
                        <h3>Project Description</h3>
                        <Card.Description style={{color: `black`}}>
                            {app_description}
                            {id === "job-listings"
                                ?
                                <a target={`_blank`} href={`https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt`}>Job Listings</a>
                                : ""
                            }
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                            <Button onClick={handleClick} content='Visit Site' primary />
                            <Button onClick={handleClickGitHub} content='GitHub' secondary />
                        </div>
                    </Card.Content>
                </StyledCard>
            </Card.Group>
        </div>
    )
};

export default SemanticCard;
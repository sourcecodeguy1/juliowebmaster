import React from 'react';
import {Card, List, Button} from "semantic-ui-react";

import {StyledCard, StyledList} from './SemanticCard.styled';

const SemanticCard = ({title, description, app_description}) => {
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
                            {description.map((name, index) =>{
                                console.log(title);
                                return <List.Item key={index}>{name}</List.Item>;
                                })
                            }
                        </StyledList>
                    </Card.Content>
                    <Card.Content>
                        <h3>Project Description</h3>
                        <Card.Description style={{color: `black`}}>
                            {app_description}
                            {title === "Jobs Listing"
                                ?
                                <a target={`_blank`} href={`https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt`}>jobs listing</a>
                                : ""
                            }
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button content='Visit Site' primary />
                        <Button content='GitHub' secondary />
                    </Card.Content>
                </StyledCard>
            </Card.Group>
        </div>
    )
};

export default SemanticCard;
import React from 'react';
import {Card} from "semantic-ui-react";

import {StyledCard} from './SemanticCard.styled';

const SemanticCard = (props) => {
    return (
        <div>
            <Card.Group>
                <StyledCard>
                    <Card.Content>
                        <Card.Header>Profile Details</Card.Header>
                        <Card.Meta>Co-Worker</Card.Meta>
                        <Card.Description>
                            Matthew is a pianist living in Nashville.
                        </Card.Description>
                    </Card.Content>
                </StyledCard>
            </Card.Group>
        </div>
    )
};

export default SemanticCard;
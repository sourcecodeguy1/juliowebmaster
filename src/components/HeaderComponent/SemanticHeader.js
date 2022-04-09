import React from 'react';
import {StyledSegment, StyledContainer} from './SemanticHeader.styled';

const SemanticHeader = (props) => {
    return (
        <div>
            <StyledSegment>
                HELLO! I'M JULIO.
                <StyledContainer>Full-stack Developer</StyledContainer>
            </StyledSegment>
        </div>
    )
};

export default SemanticHeader;
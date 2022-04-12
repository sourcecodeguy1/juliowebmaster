import styled from "styled-components";
import { Segment, Container } from 'semantic-ui-react';

export const StyledSegment = styled(Segment)`
    background-color: #000080 !important;
    color: white;
    text-align: center;
    font-size: 40px !important;
    border-radius: unset !important;
    
    @media screen and (max-width: 500px){
        font-size: 30px !important;
    }
`;

export const StyledContainer= styled(Container)({
    color: 'white',
    textAlign: 'center',
    fontSize: '20px !important',
    paddingTop: '25px;'
});
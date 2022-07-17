import styled from "styled-components";
import { Card, List, Container } from 'semantic-ui-react';

export const StyledCard = styled(Card)`
    height: 447px;
    width: 300px !important;
    text-align: center;
    border: 1px solid black !important;

    @media screen and (min-width: 1500px) {
    width: 450px !important;
    }

    @media screen and (max-width: 900px) {
    width: 100% !important;
    height: unset;
    text-align: center;
    }
    
    &:hover{
    border-color: red !important;
    }
`;

export const StyledDiv = styled(Container)`
    display: flex;
    justify-content: space-evenly;
    
    @media screen and (max-width: 900px) {
    flex-direction: column;
    }
`;

export const StyledList = styled(List)`
    max-height: 50px;
    
    @media screen and (min-width: 901px) and (max-width: 1500px) {
    max-height: unset;
    }
    
    @media screen and (max-width: 900px) {
    max-height: unset;
    }
`;

export const StyledCardResume = styled(Card)`
    border-radius: ${props => props.pagination ? "unset" : "20px !important"};
    height: ${props => props.left_card ? "unset" : props.pagination ? "unset" : ""};
    width: ${props => props.right_card ? "67% !important" :  props.pagination ? "22% !important" : "20% !important"};
    margin-left: ${props => props.pagination ? "unset" : "5% !important"};
    font-size: 16px !important;
    font-family: Arial;
    box-shadow: 0 1px 15px 0 #d4d4d5, 0 0 0 1px #d4d4d5 !important;
    margin-top: ${props => props.pagination ? "unset" : "70px !important"};
    margin: ${props => props.pagination ? "20px auto !important" : ""};
    text-align: ${props => props.pagination ? "center" : ""};

    @media screen and (max-width: 900px) {
    width: 90% !important;
    height: unset;
    text-align: center;
    }
`;
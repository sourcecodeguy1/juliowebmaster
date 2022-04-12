import styled from "styled-components";
import { Card } from 'semantic-ui-react';

export const StyledCard = styled(Card)`
    border-radius: unset !important;
    height: 747px;
    width: 25% !important;
    text-align: center;

    @media screen and (max-width: 900px) {
    width: 100% !important;
    height: unset;
    text-align: center;
    }
`;

export const StyledCardResume = styled(Card)`
    border-radius: ${props => props.pagination ? "unset" : "20px !important"};
    height: ${props => props.left_card ? "unset" : props.pagination ? "unset" : "787px"};
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
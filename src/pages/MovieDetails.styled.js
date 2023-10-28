import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MovieDetContainer = styled.div`
    display: flex;     
    gap: 25px;
    padding: 0 25px 0 25px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const DescContainer = styled.div`
display: flex;
flex-direction: column;
`

export const LinkBack = styled(Link)`
margin: 0 20px 0 20px;
text-decoration: none;
font-weight: 600;
font-size: 20px;
padding-top: 15px;

`
import styled from "styled-components";

//Button
import { Button } from "../Buttons"


export const ContactContainer = styled.section`
    width: 100%;
    min-height: 50vh;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 2em;
        margin-bottom: 20px;
    }
`
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
    width: 350px;

    @media screen and (max-width: 350px) {
        width: 100%;
    }

    input,
    textarea{
        font-family: 'Orbitron', sans-serif;
        padding: 10px;
        border-radius: 15px;
        outline: 0;
        border: none;
        background-color: ${(props) => props.theme.color_dark_one};
        color: ${(props) => props.theme.color_green};
    }

    small{
        color: #dc1313;
        font-size: 12px;
        margin-top: -15px;
    }
`

export const SubmitButton = styled(Button)`
    
`
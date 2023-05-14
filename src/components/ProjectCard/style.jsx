import styled from "styled-components";

//Button
import {LinkButton} from "../Buttons"

export const ProjectCardContainer = styled.div`
    max-width: 360px;
    border: 2px solid ;
    border-radius: 10px;
    box-shadow: -1px -4px 70px -24px rgba(0,255,0,1);
    padding: 10px;
    transition: 0.3s;

    &:hover{
        box-shadow: -1px -4px 90px -24px #48ff00;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;

    img{
        width: 100%;
        width: 100%;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    
    .technologies-used{
        margin: 10px 0 15px 0;
        display: flex;
        gap: 10px;

        svg{
            font-size: 35px;
        }
    }

    p{
        overflow-wrap: break-word;
        text-align: justify;
    }

    h3{
        margin-top: 5px;
        font-size: 15px;
    }
`
export const ProjectButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const ProjectButton = styled(LinkButton)`
    margin-top: 10px;

    svg{
        margin-right: 10px;
        font-size: 20px;
    }
`
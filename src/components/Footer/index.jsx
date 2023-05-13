import styled, {css} from "styled-components";

//Icons
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const FooterContainer = styled.footer`
    color: ${(props) => props.theme.color_green};
    background-color: ${(props) => props.theme.color_dark_one};
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icons-container{
        margin-bottom: 20px;
        display: flex;
        gap: 20px;
    }
`

const iconsConfig = css`
    color: ${(props) => props.theme.color_green};
    font-size: 25px;
    transition: 0.4s;
    text-decoration: none;

    &:hover{
        transform: scale(1.1);
    }
`

export const GitHubIcon = styled(BsGithub)`
    ${iconsConfig}
`

export const LinkedinIcon = styled(BsLinkedin)`
    ${iconsConfig}

`

export const InstagramIcon = styled(BsInstagram)`
    ${iconsConfig}
`
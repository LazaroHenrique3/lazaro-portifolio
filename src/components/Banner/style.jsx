import styled, { keyframes } from "styled-components";

//Background
import bgMatrix from '../../img/bgMatrix.gif'
import bgMatrixImg from '../../img/bgMatrixImg.jpg'

//icons
import { BsChevronDown } from "react-icons/bs";

//Button
import LinkButton from "../LinkButton";

//Keyframe
const animacao = keyframes`
 0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BannerContainer = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${bgMatrix});
  background-size: cover;
  position: relative;

  @media screen and (max-width: 768px) {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${bgMatrixImg});
  }


`

export const MainInformations = styled.div`
    padding: 20px;
    margin: 10px;

    h1{
        font-size: 3em;

        @media screen and (max-width: 400px) {
          font-size: 2.5em;
        }
    } 

    .container-buttons{
        margin-top: 20px;
        display: flex;
        
        svg{
            font-size: 25px;
        }

        :first-child{
            margin-right: 15px;
        }
    }
`

export const SocialButton = styled(LinkButton)`
    
`

export const DownContainer = styled.div`
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;

    a{
        text-decoration: none;
        color: ${(props) => props.theme.color_green};
    }
`

export const ArrowDownIcon = styled(BsChevronDown)`
    font-size: 4em;
    animation: ${animacao} 2s linear infinite;

`


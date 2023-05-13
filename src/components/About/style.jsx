import styled from 'styled-components';

//Button
import LinkButton from "../LinkButton"

export const AboutContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 5px;
`

export const ImageContainer = styled.div`
    width: 300px;
    padding: 10px;

    img{
        border: 2px solid ;
        border-radius: 10px;
        box-shadow: -1px -4px 70px -24px rgba(0,255,0,1);
        width: 100%;
        margin-bottom: 20px;
        transition: 0.3s;

        &:hover{
            transform: scale(1.01);
            box-shadow: -1px -4px 90px -24px #48ff00;
        }
    }
`

export const CurricullumButton = styled(LinkButton)`
    svg{
        font-size: 20px;
        margin-right: 10px;
    }
`
export const DescriptionContainer = styled.div`
    max-width: 500px;
    padding: 10px;

    @media screen and (max-width: 400px) {
        max-width: 300px;
    }

    .typing-box{
        width: auto;
        height: auto;
        font-size: 20px;
        text-align: justify;
        padding-bottom: 10px;

        @media screen and (max-width: 500px) {
          font-size: 18px;
        }
    }

    .separator{
        border-bottom: 2px solid;
    }

    span{
        display: block;
        margin-top: 5px;
    }

    .my-techs{
        margin-top: 5px;
        font-size: 40px;

        svg{
            margin: 5px;
            transition: 0.4s;

            &:hover{
                transform: scale(1.1);
            }
        }

        img{
            transition: 0.4s;

            &:hover{
                transform: scale(1.1);
            }
        }
    }
`


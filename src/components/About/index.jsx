import { useEffect, useState } from "react";

//Styles
import {
    AboutContainer,
    ImageContainer,
    CurricullumButton,
    DescriptionContainer
} from "./style"

//Typing
import Typing from 'react-typing-effect';

//Image
import myImage from '../../img/myImage.png'
import ts from '../../img/ts.png'

//Currículo
import myCurriculo from '../../downloads/Currículo_Lázaro_Henrique.pdf'

//icons
import { BsDownload } from "react-icons/bs";
import { DiMysql, DiMongodb } from "react-icons/di";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaPhp,
} from "react-icons/fa";

const About = () => {
    const aboutText = `Olá, sou Lázaro Henrique, desenvolvedor Web Full Stack em constante evolução. 
    Embora sem experiência profissional, já concluí vários projetos que estão em meu GitHub 
    e estou focado na stack de JavaScript, especialmente em React e Node. Procuro uma
    oportunidade para aplicar meus conhecimentos e aprender com profissionais experientes.`

    const [text, setText] = useState('')

    //Monitorando o scroll da página
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 450) {
                setText(aboutText)
            }
        }

        //Sempre que houver algum evento de scroll ele executa
        window.addEventListener('scroll', scrollListener)

        //Remove o evento quando sai da página
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <AboutContainer id="about">
            <ImageContainer data-aos="fade-right">
                <img src={myImage} alt="Minha foto" />
                <CurricullumButton href={myCurriculo} download>
                    <BsDownload /> Baixar CV
                </CurricullumButton>
            </ImageContainer>

            <DescriptionContainer data-aos="fade-left">

                <Typing key={text} typingDelay={1000} className="typing-box" text={text} speed={50} eraseDelay={50000000} />

                <div className="separator"></div>

                <span>Tenho conhecimentos em:</span>

                <div className="my-techs">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaBootstrap />
                    <FaJsSquare />
                    <FaReact />
                    <FaNodeJs />
                    <FaPhp />
                    <DiMysql />
                </div>

                <span>Estou estudando:</span>

                <div className="my-techs">
                    <DiMongodb />
                    <img src={ts} alt="ts" />
                </div>

            </DescriptionContainer>
        </AboutContainer>
    )
}

export default About
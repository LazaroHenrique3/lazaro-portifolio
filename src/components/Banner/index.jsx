//Typing
import Typing from 'react-typing-effect';

//Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

//Styles
import {
    BannerContainer,
    MainInformations,
    SocialButton,
    DownContainer,
    ArrowDownIcon
} from "./style"

const Banner = () => {
    return (
        <BannerContainer>

            <MainInformations>
                <h2>Olá,</h2>
                <h1>sou Lázaro Henrique, <br /> Desenvolvedor Full Stack</h1>
                <h2>Seja bem vindo(a).</h2>

                <div className="container-buttons">
                    <SocialButton href="https://github.com/LazaroHenrique3" target="blank">
                        <BsGithub /> GitHub
                    </SocialButton>

                    <SocialButton href="https://www.linkedin.com/in/lazaro-henrique/" target="blank">
                        <BsLinkedin /> Linkedin
                    </SocialButton>
                </div>
            </MainInformations>

            <DownContainer>
                <span>
                    Follow the white rabbit
                    {/* <Typing text={'Follow the white rabbit.'} typingDelay={10} speed={100} eraseSpeed={50}/> */}
                </span>
                <a href="#about">
                    <ArrowDownIcon />
                </a>
            </DownContainer>
        </BannerContainer>
    )
}

export default Banner
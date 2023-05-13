import { 
    FooterContainer, 
    GitHubIcon, 
    LinkedinIcon, 
    InstagramIcon } from "."

const Footer = () => {
  return (
    <FooterContainer>
        <div className="icons-container">
            <a href="https://github.com/LazaroHenrique3" target="blank">
                <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/lazaro-henrique/" target="blank">
                <LinkedinIcon/>
            </a>
            <a href="https://www.instagram.com/lazaro_fernandes_art/" target="blank">
                <InstagramIcon/>
            </a>
        </div>
        <p>&copy; Lázaro Henrique</p>
    </FooterContainer>
  )
}

export default Footer
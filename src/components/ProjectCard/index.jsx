//Styles
import { 
    ProjectCardContainer,
    ImageContainer,
    DescriptionContainer,
    ProjectButtonContainer,
    ProjectButton
 } from "./style"

//Image
import myProject from '../../img/projects/myProjects.PNG'

//icons
import { BsFillCloudArrowUpFill, BsGithub } from "react-icons/bs";

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
        <ImageContainer>
            <img src={myProject} alt="foto" />
        </ImageContainer>
        
        <DescriptionContainer>
            <h2>MyProjects</h2>

            <div className="technologies-used">
                <BsGithub/>
                <BsGithub/>
            </div>

            <p>Gerenciador de projetos estilo TODO list, faz o 
            gerenciamento automático de status do projeto de 
            acordo com as tarefas para facilitar o acompanhamento 
            do progresso.</p>
        </DescriptionContainer>

        <ProjectButtonContainer>
            <ProjectButton>
                <BsFillCloudArrowUpFill/> Ver Deploy
            </ProjectButton>

            <ProjectButton>
                <BsGithub/> GitHub
            </ProjectButton>
        </ProjectButtonContainer>

    </ProjectCardContainer>
  )
}

export default ProjectCard
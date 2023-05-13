//Styles
import {
    ProjectCardContainer,
    ImageContainer,
    DescriptionContainer,
    ProjectButtonContainer,
    ProjectButton
} from "./style"

//icons
import { BsFillCloudArrowUpFill, BsGithub } from "react-icons/bs";

const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <ProjectCardContainer>
            <ImageContainer>
                <img src={project.imgSrc} alt={project.title} />
            </ImageContainer>

            <DescriptionContainer>
                <h2>{project.title}</h2>

                <div className="technologies-used">
                    {project.techsUsed.map((tech) => (
                        tech
                    ))}
                </div>

                <p>{project.description}</p>

                <h3>Inspiração: {project.inspiration}</h3>
            </DescriptionContainer>

            <ProjectButtonContainer>
                {project.isDeploy &&
                    <ProjectButton href={project.deployLink} target="blank">
                        <BsFillCloudArrowUpFill /> Ver Deploy
                    </ProjectButton>
                }

                <ProjectButton href={project.gitHubLink} target="blank">
                    <BsGithub /> GitHub
                </ProjectButton>
            </ProjectButtonContainer>

        </ProjectCardContainer>
    )
}

export default ProjectCard
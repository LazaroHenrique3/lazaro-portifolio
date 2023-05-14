import { useState } from "react"

//Style
import {
  ProjectsContainer,
  SelectProject,
  ListProjectsContainer
} from "./style"

//Components
import ProjectCard from "../ProjectCard"

//Projects
import { projectsReactNode, projectsReact, projectsPHP } from "./projectsData"

const Projects = () => {

  const [typeProjects, setTypeProjects] = useState('1')
  const [projects, setProjects] = useState(projectsReactNode)

  const handleProjects = (valueProject) => {
    setTypeProjects(valueProject)

    if(valueProject == '1'){
      setProjects(projectsReactNode)
    } else if(valueProject == '2'){
      setProjects(projectsReact)
    }else{
      setProjects(projectsPHP)
    }
  }

  return (
    <ProjectsContainer id="projects">

      <h1>Projetos</h1>

      <div className="select-container">
        <SelectProject defaultValue={'1'} onChange={(e) => handleProjects(e.target.value)}>
          <option value='1'>React + Node</option>
          <option value="2">React</option>
          <option value="3">PHP</option>
        </SelectProject>
      </div>

      <ListProjectsContainer>
        {projects.map((project) => (
            <ProjectCard project={project} />
        ))}
      </ListProjectsContainer>

    </ProjectsContainer>
  )
}

export default Projects
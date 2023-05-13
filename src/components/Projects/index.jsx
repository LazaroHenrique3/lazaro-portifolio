import { useState } from "react"

//Style
import {
  ProjectsContainer,
  SelectProject,
  ListProjectsContainer
} from "./style"

//Components
import ProjectCard from "../ProjectCard"

const Projects = () => {

  const [typeProjects, setTypeProjects] = useState('1')

  return (
    <ProjectsContainer id="projects">
      <h1>Projetos</h1>

      <div className="select-container">
        <SelectProject defaultValue={'1'} onChange={(e) => setTypeProjects(e.target.value)}>
          <option value='1'>React + Node</option>
          <option value="2">React</option>
          <option value="3">PHP</option>
        </SelectProject>
      </div>

      <ListProjectsContainer>
        <ProjectCard />
      </ListProjectsContainer>
    </ProjectsContainer>
  )
}

export default Projects
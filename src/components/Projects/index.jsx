import { useState, useEffect } from "react"

//Style
import {
  ProjectsContainer,
  SelectProject,
  ListProjectsContainer
} from "./style"

//Typing
import Typing from 'react-typing-effect';

//Components
import ProjectCard from "../ProjectCard"

//Projects
import { projectsReactNode, projectsReact, projectsPHP } from "./projectsData"

const Projects = () => {

  const [typeProjects, setTypeProjects] = useState('1')
  const [projects, setProjects] = useState(projectsReactNode)

  const handleProjects = (valueProject) => {
    setTypeProjects(valueProject)

    if (valueProject === '1') {
      setProjects(projectsReactNode)
    } else if (valueProject === '2') {
      setProjects(projectsReact)
    } else {
      setProjects(projectsPHP)
    }
  }

  const textProjcts = `Estes são alguns dos principais projetos que desenvolvi ao longo
  de toda a minha jornada de estudos até o momento (React, Node, PHP), alguns deles autorais e outros baseados 
  em cursos e minicursos. Sempre tentei adicionar algo a mais nos projetos e colocar em 
  prática o que aprendi. (Pra ver todos os projetos acesse o GitHub)`

  const [text, setText] = useState('')

  //Monitorando o scroll da página
  useEffect(() => {
    const scrollListener = () => {

      if (window.scrollY > 800) {
        setText(textProjcts)
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
    <ProjectsContainer id="projects" data-aos="fade-right">

      <h1>Projetos</h1>

      <Typing key={text} typingDelay={1000} className="typing-box" text={text} speed={40} eraseDelay={50000000} />

      <div className="select-container">
        <SelectProject defaultValue={'1'} onChange={(e) => handleProjects(e.target.value)}>
          <option value='1'>React + Node</option>
          <option value="2">React</option>
          <option value="3">PHP</option>
        </SelectProject>
      </div>

      <ListProjectsContainer>
        {projects.map((project, key) => (
          <ProjectCard key={key} project={project} />
        ))}
      </ListProjectsContainer>

    </ProjectsContainer>
  )
}

export default Projects
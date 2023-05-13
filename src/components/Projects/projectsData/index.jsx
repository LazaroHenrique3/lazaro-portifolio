//images Project
import myProjects from '../../../img/projects/myProjects.PNG'
import Costs from '../../../img/projects/Costs.PNG'
import GitHub from '../../../img/projects/GitHub.PNG'
import Cruder from '../../../img/projects/Cruder.PNG'

//Icons
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

export const projectsReactNode = [
    {title: 'MyProjects', imgSrc: myProjects, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMysql/>], description: 'Gerenciador de projetos estilo TODO list, faz o gerenciamento automático de status do projeto de acordo com as tarefas para facilitar o acompanhamento do progresso.', isDeploy: true, deployLink: 'https://myprojects-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/myprojects-frontend-react', inspiration: 'Autoral'},
    {title: 'Costs', imgSrc: Costs, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Gerenciador financeiro de projetos, faz o gerenciamento automático dos custos, evitando ultrapassar o orçamento máximo estipulado para o projeto.', isDeploy: true, deployLink: 'https://costs-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/costs-frontend-react', inspiration: 'Hora de Codar/Autoral'},
    {title: 'SysRepo', imgSrc: GitHub, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Gerenciador de repositórios do GitHub, permite que você salve repositórios de seu interesse por meio da URL.', isDeploy: true, deployLink: 'https://gerenciador-github-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/gerenciador-github-frontend-react', inspiration: 'Dev Samurai'},
    {title: 'CRUder', imgSrc: Cruder, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Reúne as operações básicas de um CRUD, sendo assim permite o usuário [Criar, Ler, Deletar e Atualizar] posts. Se assemelha a um mini blog bem primitivo.', isDeploy: true, deployLink: 'https://app-posts-react-theta.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/cruder-frontend-react', inspiration: 'Além do Código'}
]
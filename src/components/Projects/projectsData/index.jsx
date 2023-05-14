//images Project NODE+REACT
import myProjects from '../../../img/projects/projects-node-react/myProjects.PNG'
import Costs from '../../../img/projects/projects-node-react/Costs.PNG'
import GitHub from '../../../img/projects/projects-node-react/GitHub.PNG'
import Cruder from '../../../img/projects/projects-node-react/Cruder.PNG'

//images Project REACT
import NetflixClone from '../../../img/projects/projects-react/NetflixClone.PNG'
import ConFinanceiro from '../../../img/projects/projects-react/ConFinanceiro.PNG'
import Pokedex from '../../../img/projects/projects-react/Pokedex.PNG'
import BuscadorCep from '../../../img/projects/projects-react/BuscadorCep.PNG'

//Imagens Projects PHP
import BarbeariaZe from '../../../img/projects/projects-php/BarbeariaZe.png'
import ControleVenda from '../../../img/projects/projects-php/ControleVenda.png'
import CloneTwitter from '../../../img/projects/projects-php/CloneTwitter.png'
import ListaTarefas from '../../../img/projects/projects-php/ListaTarefas.png'


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
    {title: 'MyProjects', imgSrc: myProjects, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMysql/>], description: 'Gerenciador de projetos estilo TODO list, faz o gerenciamento automático de status do projeto de acordo com as tarefas para facilitar o acompanhamento do progresso.', isDeploy: true, deployLink: 'https://myprojects-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/myprojects-frontend-react', inspiration: 'Autoral.'},
    {title: 'Costs', imgSrc: Costs, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Gerenciador financeiro de projetos, faz o gerenciamento automático dos custos, evitando ultrapassar o orçamento máximo estipulado para o projeto.', isDeploy: true, deployLink: 'https://costs-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/costs-frontend-react', inspiration: 'Hora de Codar/Autoral.'},
    {title: 'SysRepo', imgSrc: GitHub, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Gerenciador de repositórios do GitHub com validação de login, essa aplicação permite que você salve repositórios de seu interesse por meio da URL.', isDeploy: true, deployLink: 'https://gerenciador-github-frontend-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/gerenciador-github-frontend-react', inspiration: 'Dev Samurai.'},
    {title: 'CRUder', imgSrc: Cruder, techsUsed: [<FaReact/>, <FaNodeJs/>, <DiMongodb/>], description: 'Reúne as operações básicas de um CRUD, sendo assim permite o usuário [Criar, Ler, Deletar e Atualizar] posts. Se assemelha a um mini blog bem primitivo.', isDeploy: true, deployLink: 'https://app-posts-react-theta.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/cruder-frontend-react', inspiration: 'Além do Código.'}
]

export const projectsReact = [
    {title: 'Pokedex', imgSrc: Pokedex, techsUsed: [<FaReact/>], description: 'Aplicação de uma pokedex consumindo a API PokeAPI.', isDeploy: true, deployLink: 'https://pokedex-react-peach.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/pokedex-react', inspiration: 'Autoral.'},
    {title: 'NetFlix Clone', imgSrc: NetflixClone, techsUsed: [<FaReact/>], description: 'Clone UI da netflix consumindo a API do TMDB.', isDeploy: true, deployLink: 'https://cloneflix-react.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/cloneflix-react', inspiration: 'Bonieky Lacerda.'},
    {title: 'Controle Financeiro', imgSrc: ConFinanceiro, techsUsed: [<FaReact/>], description: 'Gerenciador de finanças que recebe as entradas e saídas de dinheiro.', isDeploy: true, deployLink: 'https://controle-financeiro-react-murex.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/controle-financeiro-react', inspiration: 'Will Dev.'},
    {title: 'Buscador CEP', imgSrc: BuscadorCep, techsUsed: [<FaReact/>], description: 'Aplicação de busca de  CEP consumindo a API do viaCEP.', isDeploy: true, deployLink: 'https://buscador-cep-react-five.vercel.app', gitHubLink: 'https://github.com/LazaroHenrique3/buscador-cep-react', inspiration: 'Sujeito Programador.'},
]

export const projectsPHP = [
    {title: 'Barbearia do Zé', imgSrc: BarbeariaZe, techsUsed: [<FaHtml5/>, <FaCss3Alt/>, <FaBootstrap/>, <FaJsSquare/>, <FaPhp/>, <DiMysql/>], description: 'projeto de um sistema de agendamento para uma barbearia fictícia que permite o cadastro de serviços, usuários, clientes e por fim os agendamentos.', isDeploy: false, deployLink: '', gitHubLink: 'https://github.com/LazaroHenrique3/sistema-agendamento-barbearia', inspiration: 'Autoral.'},
    {title: 'Controle de Venda', imgSrc: ControleVenda, techsUsed: [<FaHtml5/>, <FaCss3Alt/>, <FaBootstrap/>, <FaJsSquare/>, <FaPhp/>, <DiMysql/>], description: 'Projeto feito utilizando PHP estruturado e conceitos de Javascript. É um projeto de sistema simples para controle de vendas de uma pequena loja de eletrônicos.', isDeploy: false, deployLink: '', gitHubLink: 'https://github.com/LazaroHenrique3/sistema-financeiro', inspiration: 'Autoral.'},
    {title: 'Twitter Clone', imgSrc: CloneTwitter, techsUsed: [<FaHtml5/>, <FaCss3Alt/>, <FaBootstrap/>, <FaJsSquare/>, <FaPhp/>, <DiMysql/>], description: 'Projeto feito com o miniframework MVC construído no curso da Udemy, este projeto simula algumas das funções do Twitter como seguir usuários, fazer tweets dentre outros.', isDeploy: false, deployLink: '', gitHubLink: 'https://github.com/LazaroHenrique3/projeto-twitter-clone', inspiration: 'Curso Udemy.'},
    {title: 'Lista Tarefas', imgSrc: ListaTarefas, techsUsed: [<FaHtml5/>, <FaCss3Alt/>, <FaBootstrap/>, <FaJsSquare/>, <FaPhp/>, <DiMysql/>], description: 'Projeto desenvolvido com a finalidade de praticar o uso do PDO para criar um CRUD, sendo assim foi criado um sistema simples de gerenciamento de tarefas do dia-dia.', isDeploy: false, deployLink: '', gitHubLink: 'https://github.com/LazaroHenrique3/app-lista-tarefas', inspiration: 'Curso Udemy.'}
]
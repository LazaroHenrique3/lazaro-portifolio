import styled from "styled-components";

//Select
import Select from "../Select";

export const ProjectsContainer = styled.section`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-size: 2em;
        margin-bottom: 20px;
    }
`

export const SelectProject = styled(Select)`
    margin-bottom: 20px;
`

export const ListProjectsContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`

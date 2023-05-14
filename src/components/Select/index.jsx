import styled from 'styled-components';

export default styled.select`
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    border-radius: 15px;
    padding: 10px;
    outline: none;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.color_green};
    color:  ${(props) => props.theme.color_green};
    cursor: pointer;
    transition: 0.4s;

    &:hover{
        background: ${(props) => props.theme.color_green_dark};
    }

`

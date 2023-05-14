import styled, {css} from 'styled-components';

const buttonCSS = css`
  background: transparent;
  color: ${(props) => props.theme.color_green};
  border: 2px solid ${(props) => props.theme.color_green};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-family: 'Orbitron', sans-serif;
  padding: 10px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme.color_green_dark};
  }
`

export const LinkButton = styled.a`
  ${buttonCSS}
`;

export const Button = styled.button`
  ${buttonCSS}
`
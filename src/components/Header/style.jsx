import styled from "styled-components";

export const NavbarContainer = styled.nav`

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  .navbar {
      color: ${(props) => props.theme.color_green};
      background-color: ${(props) => props.theme.color_dark_one};
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
    
    .nav-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      max-width: 1500px;
    }
    
    .main-container{
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background-color:rgba(0,0,0,0.3);
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.color_green};
      text-shadow: -1px 4px 6px ${(props) => props.theme.color_green};
      align-items: center;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      font-size: 3rem;
      flex-grow: 1;
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
      text-align: center;
      margin-right: 2rem;
    }
    
    .nav-links {
      color: ${(props) => props.theme.color_green};
      text-shadow: -1px 4px 6px ${(props) => props.theme.color_green};
      display: flex;
      gap: 5px;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      height: 100%;
      border-bottom: 3px solid transparent;
    }

    .header-icon {
      margin-left: 1rem;
    }
    
    .nav-item {
      line-height: 10px;
      margin-right: 1rem;
    }
    
    .nav-item:after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background-color:  ${(props) => props.theme.color_green};
      transition: width 0.7s ease, background-color 0.5s ease;
    }
    
    .nav-item:hover:after {
      width: 100%;
      background-color:  ${(props) => props.theme.color_green};
    }
    
    .nav-icon {
      display: none;
    }
    
    @media screen and (max-width: 640px) {
      
      .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-top: 1px solid ${(props) => props.theme.color_green};
        position: absolute;
        top: 65px;
        left: -110%;
        opacity: 1;
        transition: all 0.5s ease;
      }
    
      .nav-menu.active {
        background-color: ${(props) => props.theme.color_dark_one};
        left: 0px;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      }

      .nav-links {
        padding: 1.5rem;
        width: 100%;
        display: table;
      }
    
      .nav-icon {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${(props) => props.theme.color_green};
      }
    }
`






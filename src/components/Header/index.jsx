import { useState } from 'react';

//Icons
import {
    BsXLg,
    BsList
} from "react-icons/bs";

//Styles
import { NavbarContainer } from './style';

const Header = () => {

    //Relacionado ao Navbar
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <NavbarContainer >
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <a href="/" className="nav-logo">
                        &lt;/LH&gt;
                    </a>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item" onClick={() => Close()}>
                            <a href="/" className="nav-links">
                                Home
                            </a>
                        </li>

                        <li className="nav-item" onClick={() => Close()}>
                            <a href="#about" className="nav-links">
                                Sobre
                            </a>
                        </li>

                        <li className="nav-item" onClick={() => Close()}>
                            <a href="#projects" className="nav-links">
                                Projetos
                            </a>
                        </li>

                        <li className="nav-item" onClick={() => Close()}>
                            <a href="#contact" className="nav-links">
                                Contato
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <BsXLg /> : <BsList />}
                    </div>
                </div>
            </nav>
        </NavbarContainer>
    )
}

export default Header
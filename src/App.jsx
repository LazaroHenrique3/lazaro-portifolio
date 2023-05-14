import { useEffect } from 'react';

import GlobalStyle from './styles/global'
import { ThemeProvider } from "styled-components";

//Lib de animação
import Aos from 'aos';
import 'aos/dist/aos.css'

//Importando temas
import { themeDark } from './styles/theme';

//Components
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

//Importando o Toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])


  return (
    <ThemeProvider theme={themeDark}>
      <Header/>
       <Banner/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
       <ToastContainer autoClose={5000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

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

function App() {
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])


  return (
    <ThemeProvider theme={themeDark}>
       <Header/>
       <Banner/>
       <About/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

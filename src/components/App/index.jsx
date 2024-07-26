
import Navbar from "../NavBar"
import GlobalStyles from "../../assets/global"
import Theme from '../../assets/themes/default';
import { Container } from "./styles"
import { ThemeProvider } from 'styled-components';
import SobreNos from "../AboutUs"
import HomePage from "../Home";
function App() {
  return (
    <>
    <ThemeProvider theme={Theme}>
    <GlobalStyles />
      <Container>
        <Navbar/>
        <SobreNos/>
        {/*<HomePage/>*/}
      </Container>
     </ThemeProvider>
    </>
  )
}

export default App

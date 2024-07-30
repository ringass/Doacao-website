import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../NavBar";
import GlobalStyles from "../../assets/global";
import Theme from '../../assets/themes/default';
import { Container } from "./styles";
import { ThemeProvider } from 'styled-components';
import SobreNos from "../AboutUs";
import HomePage from "../Home";
import Donation from "../Donation";
import Footer from "../Footer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<SobreNos />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

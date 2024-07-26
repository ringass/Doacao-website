import Navbar from "../NavBar"
import GlobalStyles from "../../assets/global"
import { Container } from "./styles"
import HomePage from "../Home"
function App() {
  return (
    <>
    <GlobalStyles />
      <Container>
        <Navbar/>
        <HomePage/>
      </Container>
    </>
  )
}

export default App

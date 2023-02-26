import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Techs from "./components/Techs";
import Global from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Home />
      <Sobre />
      <Techs />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;

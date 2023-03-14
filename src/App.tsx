import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ModalCard from "./components/Modal";
import ModalCard2 from "./components/Modal2";
import ModalCard3 from "./components/Modal3";
import ModalCard4 from "./components/Modal4";
import ModalCard5 from "./components/Modal5";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Techs from "./components/Techs";
import { AuthMainContext } from "./context/MainContext";
import Global from "./styles/Global";

function App() {
  const { isModal, isModal2, isModal3, isModal4, isModal5 } =
    useContext(AuthMainContext);
  return (
    <>
      <Global />
      <Header />
      <Home />
      <Sobre />
      <Techs />
      <Projetos />
      <Footer />
      {isModal && <ModalCard />}
      {isModal2 && <ModalCard2 />}
      {isModal3 && <ModalCard3 />}
      {isModal4 && <ModalCard4 />}
      {isModal5 && <ModalCard5 />}
    </>
  );
}

export default App;

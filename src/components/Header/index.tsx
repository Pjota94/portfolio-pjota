import { useState } from "react";
import Logo from "../Logo";
import { Container } from "./styles";
import "animate.css";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import MenuMobile from "../MenuMobile";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <Container>
      <Logo />
      <button onClick={showMenu} className="btn-menu">
        {menu ? (
          <RiCloseLine className="animate__animated animate__flipInX" />
        ) : (
          <FiMenu className="animate__animated animate__flipInX" />
        )}
      </button>
      <div className="div-buttons">
        <a href="#sobre">
          <button>Sobre</button>
        </a>

        <a href="#techs">
          <button>Tecnologias</button>
        </a>

        <a href="#projetos">
          <button>Projetos</button>
        </a>
      </div>
      {menu && <MenuMobile />}
    </Container>
  );
};

export default Header;

/* eslint-disable no-restricted-globals */
import { Container, DropApp, DropName } from "./styles";

import { BsGithub } from "react-icons/bs";
import { FaWindowMaximize } from "react-icons/fa";
import { IProject } from "../../interfaces";
import { useContext } from "react";
import { AuthMainContext } from "../../context/MainContext";

const Card = ({ imagem, vercel, git, id }: IProject) => {
  const {
    setIsModal,
    setIsModal2,
    setIsModal3,
    setIsModal4,
    setIsModal5,
    setIsModal6,
    setIsModal7,
  } = useContext(AuthMainContext);

  return (
    <Container>
      <img
        id={id}
        onClick={(event: any) => {
          // window.open(`${vercel}`, "_blank");
          if (event.target.id === "5") {
            setIsModal(true);
          } else if (event.target.id === "1") {
            setIsModal2(true);
          } else if (event.target.id === "2") {
            setIsModal3(true);
          } else if (event.target.id === "3") {
            setIsModal4(true);
          } else if (event.target.id === "4") {
            setIsModal5(true);
          } else if (event.target.id === "6") {
            setIsModal6(true);
          } else if (event.target.id === "7") {
            setIsModal7(true);
          }
        }}
        src={imagem}
        alt=""
      />
      <div className="buttons-card">
        <DropName>
          <a href={git} target={"_blank"} rel="noreferrer">
            <button className="git">
              <span>Git</span>
              <BsGithub />
            </button>
          </a>
        </DropName>
        <DropApp>
          <a href={vercel} target={"_blank"} rel="noreferrer">
            <button className="window">
              <span>App</span>
              <FaWindowMaximize />
            </button>
          </a>
        </DropApp>
      </div>
    </Container>
  );
};

export default Card;

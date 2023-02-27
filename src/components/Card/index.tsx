/* eslint-disable no-restricted-globals */
import { Container } from "./styles";

import { BsGithub } from "react-icons/bs";
import { FaWindowMaximize } from "react-icons/fa";
import { IProject } from "../../interfaces";

const Card = ({ imagem, vercel, git }: IProject) => {
  return (
    <Container>
      <img
        onClick={() => {
          window.open(`${vercel}`, "_blank");
        }}
        src={imagem}
        alt=""
      />
      <div className="buttons-card">
        <a href={git} target={"_blank"} rel="noreferrer">
          <button className="git">
            <BsGithub />
          </button>
        </a>
        <a href={vercel} target={"_blank"} rel="noreferrer">
          <button className="window">
            <FaWindowMaximize />
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Card;

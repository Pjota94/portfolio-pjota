import { useContext, useEffect, useRef } from "react";
import { AuthMainContext } from "../../context/MainContext";
import CardInfos from "./CardInfos";
import CardVideo from "./CardVideo";
import { Conatiner } from "./styles";

const ModalCard3 = () => {
  const { setIsModal3 } = useContext(AuthMainContext);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      if (!modalRef.current?.contains(target)) {
        setIsModal3(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsModal3]);
  return (
    <Conatiner>
      <div className="modal-box" ref={modalRef}>
        <CardVideo />
        <CardInfos />
      </div>
    </Conatiner>
  );
};

export default ModalCard3;

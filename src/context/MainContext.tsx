import { createContext, useState } from "react";
import { IProviderProps, IValueProps } from "../interfaces";

export const AuthMainContext = createContext<IValueProps>({} as IValueProps);

const MainContext = ({ children }: IProviderProps) => {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false);
  const [isModal3, setIsModal3] = useState(false);
  const [isModal4, setIsModal4] = useState(false);
  const [isModal5, setIsModal5] = useState(false);

  return (
    <AuthMainContext.Provider
      value={{
        isModal,
        setIsModal,
        isModal2,
        setIsModal2,
        isModal3,
        setIsModal3,
        isModal4,
        setIsModal4,
        isModal5,
        setIsModal5,
      }}
    >
      {children}
    </AuthMainContext.Provider>
  );
};

export default MainContext;

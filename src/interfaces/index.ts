import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProject {
  imagem: string;
  git: string;
  vercel: string;
  id: string;
}

export interface ITechs {
  logo: string;
  nome: string;
}

export interface IValueProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  isModal2: boolean;
  setIsModal2: Dispatch<SetStateAction<boolean>>;
  isModal3: boolean;
  setIsModal3: Dispatch<SetStateAction<boolean>>;
  isModal4: boolean;
  setIsModal4: Dispatch<SetStateAction<boolean>>;
  isModal5: boolean;
  setIsModal5: Dispatch<SetStateAction<boolean>>;
}

export interface IProviderProps {
  children: ReactNode;
}

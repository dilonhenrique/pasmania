import { createContext, useContext, useState } from "react";

export const OpenContext = createContext<OpenContextProps | null>(null);
OpenContext.displayName = 'Open';

interface OpenProviderProps {
  children: React.ReactNode;
}

export function OpenProvider({ children }: OpenProviderProps) {
  const [openDraw, setOpenDraw] = useState<IOpen>(null);

  return (
    <OpenContext.Provider value={{ openDraw, setOpenDraw }}>
      {children}
    </OpenContext.Provider>
  )
}

export function useOpenContext() {
  const { openDraw, setOpenDraw } = useContext(OpenContext) as OpenContextProps;

  return {
    openDraw,
    setOpenDraw,
  }
}

export interface OpenContextProps {
  openDraw: IOpen;
  setOpenDraw: React.Dispatch<React.SetStateAction<IOpen>>;
}

type IOpen = null | 'sacola' | 'perfil' | 'infos';
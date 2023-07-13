import { createContext, useContext, useEffect, useState } from "react";
import { ISacolaProduct } from "../interfaces/interfaces";

export const SacolaContext = createContext<SacolaContextProps | null>(null);
SacolaContext.displayName = 'Sacola';

interface SacolaProviderProps {
  children: React.ReactNode;
}

export function SacolaProvider({ children }:SacolaProviderProps) {
  const [sacola, setSacola] = useState<ISacolaProduct[]>([]);

  async function getSacola() {
    //get sacola from session
    setSacola([]);
  }
  
  useEffect(() => {
    getSacola();
  },[])

  return (
    <SacolaContext.Provider value={{ sacola, setSacola }}>
      {children}
    </SacolaContext.Provider>
  )
}

export function useSacolaContext() {
  const { sacola, setSacola } = useContext(SacolaContext) as SacolaContextProps;

  return {
    sacola,
    setSacola
  }
}

export interface SacolaContextProps {
  sacola: ISacolaProduct[];
  setSacola: React.Dispatch<React.SetStateAction<ISacolaProduct[]>>;
}
import { createContext, useContext, useEffect, useState } from "react";
import { IProduct, ISacolaProduct } from "../interfaces/interfaces";
import { v4 as uuid } from 'uuid';

const keySacola = 'sacolaPasmania';

export const SacolaContext = createContext<SacolaContextProps | null>(null);
SacolaContext.displayName = 'Sacola';

interface SacolaProviderProps {
  children: React.ReactNode;
}

export function SacolaProvider({ children }: SacolaProviderProps) {
  const [sacola, setSacola] = useState<ISacolaProduct[]>([]);

  async function getSacola() {
    const novaSacola = localStorage.getItem(keySacola);
    if (novaSacola) setSacola(JSON.parse(novaSacola));
  }

  useEffect(() => {
    getSacola();
  }, [])

  return (
    <SacolaContext.Provider value={{ sacola, setSacola }}>
      {children}
    </SacolaContext.Provider>
  )
}

export function useSacolaContext() {
  const { sacola, setSacola } = useContext(SacolaContext) as SacolaContextProps;

  function addItemSacola(product: IProduct) {
    setSacola((sacolaAtual) => {
      const novaSacola = [...sacolaAtual, { ...product, id: uuid() }]
      localStorage.setItem(keySacola, JSON.stringify(novaSacola));
      return novaSacola;
    });
  }

  function removeItemSacola(id: string) {
    setSacola(sacolaAtual => {
      const novaSacola = sacolaAtual.filter(item => item.id !== id);
      localStorage.setItem(keySacola, JSON.stringify(novaSacola));
      return novaSacola;
    })
  }

  function emptySacola() {
    setSacola([]);
  }

  return {
    sacola,
    setSacola,
    addItemSacola,
    removeItemSacola,
    emptySacola,
  }
}

export interface SacolaContextProps {
  sacola: ISacolaProduct[];
  setSacola: React.Dispatch<React.SetStateAction<ISacolaProduct[]>>;
}
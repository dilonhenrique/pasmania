import { createContext, useContext, useEffect, useState } from "react";
import { ICliente } from "../interfaces/interfaces";

const keyCliente = 'clientePasmania';

export const ClienteContext = createContext<ClienteContextProps | null>(null);
ClienteContext.displayName = 'Cliente';

interface ClienteProviderProps {
  children: React.ReactNode;
}

export function ClienteProvider({ children }: ClienteProviderProps) {
  const [cliente, setCliente] = useState<ICliente | null>(null);

  async function getCliente() {
    const novaCliente = {
      cpf: "00955379024",
      ddd: "51",
      email: "dilonhenrique@gmail.com",
      endereco: [{
        bairro: "Centro",
        casa: "apto",
        cep: "94010001",
        cidade: "Gravataí",
        complemento: "906",
        numero: "2025",
        rua: "Avenida José Loureiro da Silva",
        uf: "RS"
      },
      {
        bairro: "Centro",
        casa: "apto",
        cep: "94010291",
        cidade: "Gravataí",
        complemento: "204",
        numero: "84",
        rua: "Rua Bernardino Fonseca",
        uf: "RS"
      },
      {
        bairro: "Barnabé",
        casa: "apto",
        cep: "94150140",
        cidade: "Gravataí",
        complemento: "301",
        numero: "460",
        rua: "Rua Doutor Jorge C. da Costa",
        uf: "RS"
      },
      {
        bairro: "Dom Feliciano",
        casa: "casa",
        cep: "94015190",
        cidade: "Gravataí",
        complemento: "",
        numero: "146",
        rua: "Rua Norberto Peixoto",
        uf: "RS"
      }],
      key: "1614694976295",
      nome: "Dilon Henrique",
      telefone: "993669397"
    };
    if (novaCliente) setCliente(novaCliente);
  }

  useEffect(() => {
    getCliente();
  }, [])

  return (
    <ClienteContext.Provider value={{ cliente, setCliente }}>
      {children}
    </ClienteContext.Provider>
  )
}

export function useClienteContext() {
  const { cliente, setCliente } = useContext(ClienteContext) as ClienteContextProps;

  return {
    cliente,
    setCliente,
  }
}

export interface ClienteContextProps {
  cliente: ICliente | null;
  setCliente: React.Dispatch<React.SetStateAction<ICliente | null>>;
}
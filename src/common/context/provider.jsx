import { SacolaProvider } from "@/common/context/sacola";
import { MenuProvider } from '@/common/context/menu';
import { ClienteProvider } from "./cliente";

export default function ContextProvider({ children }) {
  return (
    <SacolaProvider>
      <MenuProvider>
        <ClienteProvider>
          {children}
        </ClienteProvider>
      </MenuProvider>
    </SacolaProvider>
  )
}
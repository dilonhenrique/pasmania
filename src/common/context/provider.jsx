import { SacolaProvider } from "@/common/context/sacola";
import { MenuProvider } from '@/common/context/menu';
import { ClienteProvider } from "./cliente";
import { OpenProvider } from "./open";

export default function ContextProvider({ children }) {
  return (
    <SacolaProvider>
      <MenuProvider>
        <ClienteProvider>
          <OpenProvider>
            {children}
          </OpenProvider>
        </ClienteProvider>
      </MenuProvider>
    </SacolaProvider>
  )
}
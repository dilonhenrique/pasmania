import { SacolaProvider } from "@/common/context/sacola";
import { MenuProvider } from '@/common/context/menu';
import { ClienteProvider } from "./cliente";
import { OpenProvider } from "./open";
import { SearchProvider } from "./search";

export default function ContextProvider({ children }) {
  return (
    <SacolaProvider>
      <MenuProvider>
        <ClienteProvider>
          <OpenProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </OpenProvider>
        </ClienteProvider>
      </MenuProvider>
    </SacolaProvider>
  )
}
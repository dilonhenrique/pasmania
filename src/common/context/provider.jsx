import { SacolaProvider } from "@/common/context/sacola";
import { MenuProvider } from '@/common/context/menu';

export default function ContextProvider({ children }) {
  return (
    <SacolaProvider>
      <MenuProvider>
        {children}
      </MenuProvider>
    </SacolaProvider>
  )
}
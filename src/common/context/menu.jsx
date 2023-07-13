import { createContext, useContext, useEffect, useState } from "react";
import { bitbar } from '@/common/infra/services'

export const MenuContext = createContext();
MenuContext.displayName = 'Menu';

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState({isLoading: true});

  async function getMenu() {
    const data = await bitbar.getMenu();
    setMenu(data);
  }
  
  useEffect(() => {
    getMenu();
  },[])

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenuContext() {
  const { menu, setMenu } = useContext(MenuContext);

  return {
    menu,
    setMenu
  }
}
import { createContext, useContext, useEffect, useState } from "react";
import { bitbar } from '@/common/infra/apiServices'
import { IMenu } from "../interfaces/interfaces";

export const MenuContext = createContext<MenuContextProps | null>(null);
MenuContext.displayName = 'Menu';

interface MenuProviderProps {
  children: React.ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [menu, setMenu] = useState<IMenu | IMenuLoading>({ isLoading: true });

  async function getMenu() {
    const data = await bitbar.getMenu();
    setMenu(data);
  }

  useEffect(() => {
    getMenu();
  }, [])

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenuContext() {
  const { menu, setMenu } = useContext(MenuContext) as MenuContextProps;

  return {
    menu,
    setMenu
  }
}

interface IMenuLoading {
  isLoading: true;
} 

interface MenuContextProps {
  menu: IMenu | IMenuLoading;
  setMenu: React.Dispatch<React.SetStateAction<IMenu | IMenuLoading>>;
}
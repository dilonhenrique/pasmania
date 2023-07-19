import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";

export const SearchContext = createContext<SearchContextProps | null>(null);
SearchContext.displayName = 'Search';

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState<ISearch>('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const { search, setSearch } = useContext(SearchContext) as SearchContextProps;
  const router = useRouter();

  function newSetSearch(value: string) {
    setSearch(value);
    router.push(`/busca?q=${value}`);
  }

  useEffect(() => {
    const query = router.query.q;
    if(typeof query === 'string') newSetSearch(query);
  },[])

  return {
    search,
    setSearch: newSetSearch,
  }
}

export interface SearchContextProps {
  search: ISearch;
  setSearch: React.Dispatch<React.SetStateAction<ISearch>>;
}

type ISearch = string;
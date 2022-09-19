import { useContext } from "react";
import { SearchContext } from "./Search";

const useContextSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("No puede usar parte de este componente fuera de Busqueda");
  }

  return context;
};
export default useContextSearch;

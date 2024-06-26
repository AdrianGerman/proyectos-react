/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// crear el contexto.
export const FiltersContext = createContext();

// crear el provider
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
}

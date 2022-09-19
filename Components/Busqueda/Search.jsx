import React, { useState } from "react";
import { createContext } from "react";
import useContextSearch from "./useContextSearch";
import useSearch from "./useSearch";

export const SearchContext = createContext();

const Search = ({ children, config }) => {
  const [query, setQuery] = useState("");
  return (
    <SearchContext.Provider value={{ ...config, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

const Table = ({ children }) => {
  const context = useContextSearch();
  const columns_prop = context.columns?.map((col) => col.property);
  const columns_title = context.columns?.map((col) => col.title);
  const items = useSearch(context.query, context.data, columns_prop);

  return (
    <table>
      <thead>
        <tr>
          {columns_title?.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items?.map((row, key) => (
          <tr key={key}>
            {context.columns.map((col, k) => (
              <td key={k}>{row[col.property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot style={{ border: "2px solid black" }}>
        <tr>
          <td>Items {items?.length}</td>
        </tr>
      </tfoot>
    </table>
  );
};

Search.Table = Table;

const Input = ({ children }) => {
  const context = useContextSearch();
  return (
    <input
      type="text"
      placeholder={children}
      onChange={(e) => context.setQuery(e.target.value)}
    ></input>
  );
};

Search.Input = Input;

export default Search;

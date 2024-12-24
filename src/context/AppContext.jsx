// this file is access the common logic from here

import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  console.log(props);
  const currencySymbol = "$";
  const value = { doctors, currencySymbol };
  console.log(value);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;

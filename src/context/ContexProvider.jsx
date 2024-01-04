import React, {  useState } from "react";

import themeContext from "./Contex";
const ContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <themeContext.Provider value={{ mode, setMode }}>
      {children}
    </themeContext.Provider>
  );
};
export default  ContextProvider;

import { createContext, useState } from "react";

let context = createContext();

export default context;

export function Context({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </context.Provider>
  );
}

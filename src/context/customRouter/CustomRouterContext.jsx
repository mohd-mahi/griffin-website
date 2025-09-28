import { createContext, useCallback, useContext, useState } from "react";
import { useLocation } from "react-router";

const CustomRouterContext = createContext(null);

const CustomRouterProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [customPathname, setCustomPathname] = useState(pathname);

  const setRoute = useCallback((newPathname) => {
    setCustomPathname(newPathname);
  }, []);

  return (
    <CustomRouterContext.Provider value={{ customPathname, setRoute }}>
      {children}
    </CustomRouterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useCustomRouter() {
  const context = useContext(CustomRouterContext);
  if (context === undefined)
    throw new Error("cannot use outside of CustomRouterProvider");
  return context;
}

export default CustomRouterProvider;

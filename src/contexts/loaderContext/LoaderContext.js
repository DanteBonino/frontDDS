// context/FilterContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);


export const LoaderProvider = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
  }, [location.pathname])

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

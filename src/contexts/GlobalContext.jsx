import { createContext, useContext } from "react";

// creo provider
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {


    // destructuring
    const value = {

    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
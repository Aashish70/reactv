import { createContext, useContext } from "react";

//create context
const myContext = createContext();


//provide context
const ContextProvider = ({ children }) => {
    return <myContext.Provider value={"ashish kumar"}>
        { children }
    </myContext.Provider>
}

//consume context 
const contextValue = () => {
    return useContext(myContext)
}


export { ContextProvider, contextValue }
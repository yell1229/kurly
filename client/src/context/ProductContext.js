import { createContext, useState } from "react";

export const PidContext = createContext();

export const PidProvider = ({children}) => {
    const [pidArr, setPidArr] = useState([]);
    return (
        <PidContext.Provider value={{pidArr, setPidArr}}>
            {children}
        </PidContext.Provider>
    );
}
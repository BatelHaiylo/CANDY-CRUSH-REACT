import { createContext, useState } from "react";

export const ScoreContext = createContext()

export default function ScoreProvider({children}) {
    const [score,setScore] = useState(0)

    return ( 
        <ScoreContext.Provider value={{score,setScore}}>
            {children}
        </ScoreContext.Provider>
     );
}
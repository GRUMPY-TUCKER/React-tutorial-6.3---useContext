import React, { createContext } from 'react';
import B from './B';

const GreetContext = createContext();

export const A = () => {
    const greet = "Hello";
    const greet2 = "Hiiii";
    return (
        <div>
            <GreetContext.Provider value={{greet,greet2}}>
                <B />
            </GreetContext.Provider>
        </div>
    );
}
export default A;
export {GreetContext};
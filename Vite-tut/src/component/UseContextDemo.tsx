import {useState, createContext} from 'react';

import HeaderComponent from "./HeaderComponent"
import InputComponent from "./InputComponent"

export const AppContext = createContext(null);

const UseContextDemo = () => {
    const [username, setUsername] = useState("Username");

    return (
        <div className="my-container bg-dark d-flex justify-content-center align-items-center flex-column">
            <AppContext.Provider value={{username, setUsername}}>
                <HeaderComponent/> <InputComponent/> 
            </AppContext.Provider>
        </div>
    )
}

export default UseContextDemo

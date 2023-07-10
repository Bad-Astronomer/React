import { useContext } from "react"
import { AppContext } from "./UseContextDemo"


const HeaderComponent = () => {
    const {username} = useContext(AppContext);
    
    return (
        <div>
        <h2 className="text-light my-header">Hello, {username}</h2>
        </div>
    )
}

export default HeaderComponent

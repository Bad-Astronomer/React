import {NavLink} from 'react-router-dom';

const HomeComponent = () => {
    return (
    <div className="my-container bg-dark d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-light">Hooks Demo</h2>
        <NavLink to="usestate">
            <button className="btn btn-success my-btn">UseState Demo</button>
        </NavLink>
        <NavLink to="usestate2">
            <button className="btn btn-success my-btn">UseState Demo 2</button>
        </NavLink>
        <NavLink to="useref">
            <button className="btn btn-success my-btn">UseRef Demo</button>
        </NavLink>
        <NavLink to="usecontext">
            <button className="btn btn-success my-btn" onClick={() => {console.log("Hello")}}>UseContext Demo</button>
        </NavLink>
    </div>
    )
}

export default HomeComponent

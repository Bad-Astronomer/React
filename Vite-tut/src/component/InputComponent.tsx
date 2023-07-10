import { useContext } from 'react';
import { AppContext } from './UseContextDemo';

const InputComponent = () => {
    const {username, setUsername} = useContext(AppContext);

    const handleChange = (event) => {
        setUsername(event?.target.value);
        console.log(username);
    }

    return (
        <input type="text" className="form-control w-50 mt-3 text-center" onChange={handleChange} placeholder='Enter Username'/>
    )
}

export default InputComponent

import {useState} from 'react';

const UseStateDemo2 = () => {
    const [textInput, setTextInput] = useState("Enter Something");

    let input_string = "Enter Something"
    let handleChange = (event) => {
        input_string = event.target.value;
        input_string ? {} : input_string = "Enter Something";
    }

    return (
        <div className='my-container bg-dark d-flex justify-content-center align-items-center flex-column'>
            <h2 className="my-header mb-3">{textInput}</h2>
            <div className="input-group d-flex w-50">
                <input type="text" placeholder='Enter Something' className='form-control' id="text-in" onChange={handleChange}/>
                <button className="btn btn-outline-success" type="button" onClick={()=>{
                    setTextInput(input_string);
                }}>Submit</button>
            </div>
        </div>
    )
}

export default UseStateDemo2;

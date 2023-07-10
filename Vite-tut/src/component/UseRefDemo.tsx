import {useRef} from "react";

const UseRefDemo = () => {
    const inputRef = useRef(null);
    const handleFocus = () => {
      inputRef.current.focus();
      console.log(inputRef.current['value']);
      inputRef.current.value = "";
    }

  return (
    <div className="my-container bg-dark d-flex justify-content-center align-items-center flex-column">
        <h2 className="my-header text-light">Enter Something</h2>
        <div className="input-group d-flex w-50">
            <input type="text" className='form-control' ref={inputRef}/>
            <button className="btn btn-outline-success" type="button" onClick={handleFocus}>Focus</button>
        </div>
    </div>
  )
}

export default UseRefDemo

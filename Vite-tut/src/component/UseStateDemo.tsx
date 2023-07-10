import {useState} from 'react';

const UseStateDemo = () => {
    const [count, setCount] = useState(0);

  return (
    <div className="my-container d-flex flex-column justify-content-center align-items-center bg-dark">
        <h2 className='m-5 my-header'>{count}</h2>
        <h2 className='text-light btn btn-outline-success my-btn p-4' 
        onClick={()=>{
          setCount(count+1)
        }}>UseState Demo</h2>
    </div>
  )
}

export default UseStateDemo

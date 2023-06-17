import React from 'react'
import './Button.css'
import { useState } from 'react';


function Button(props){
    const [count, setCount] = useState(1);
    const [content, setContent] = useState(props.content);

    function handleClick(){
        
      setCount(count + 1);
      console.log(`clicked ${count} times.`);
      setContent(`${props.content} clicked ${count} times.`);

      if(count > 10){
        window.location.href = "https://github.com/Bad-Astronomer/React";
      }
    }
    
    return(
        <>
            <button className="button" onClick={handleClick}>{content}</button>
        </>
    )
}

export default Button;
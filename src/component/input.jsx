import React, {useState} from 'react';

function Input(props) {
    let[text,setText]=useState("");

    function handleClick(){
        props.handleClick(text);
        setText("");
    }

    return <>
        <div className="input-box">
            <div>Enter name of food</div>
            <div className="input-container">
               <input type="text" onChange={e=>{setText(e.target.value)}} value={text}/>
                  <span onClick={handleClick}> search</span>
            </div>
        </div>

    </>
}

export default Input;
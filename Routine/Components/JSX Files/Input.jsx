import {useState} from "react";
import style from "../Static/css/Input.module.css"

function Input({handlevaluefun}){
    let [currentValue, setcurrentValue] = useState('');

    const handlechange = (event) => {
        let storemyvalue = event.target.value;
        setcurrentValue(storemyvalue);
    }

    const onkeyhandle = (event) =>{
        if(event.key === 'Enter')
            handlevaluefun(currentValue)
            // setcurrentValue(event.target.value);
    }

    const handleClickButton = () =>{
        handlevaluefun(currentValue);
        setcurrentValue("");
    }

    return <>
        <input className={style["Input_Design"]} 
        type="text"
        placeholder="Enter Your Value"
        value={currentValue}
        onChange={handlechange}
        onKeyDown={onkeyhandle}/>

        <button className={style["Button_Design"]}
        onClick={handleClickButton}>
        Add
        </button>
        
        {/* <h1>{currentValue}</h1> */}
        </>
}

export default Input
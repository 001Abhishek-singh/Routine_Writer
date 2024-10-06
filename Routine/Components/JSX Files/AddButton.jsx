import { useState } from "react"
import style from "../Static/css/AddButton.module.css"
function AddButton(props){
    let[storecurrentValue, setstorecurrentValue] = useState('');

    const handleClickButton = ()=>{
        props.itemValueStore(storecurrentValue);
        setstorecurrentValue("");
    }
    return <>
        <button className={style["Button_Design"]}
        onClick={handleClickButton}>
        Add
        </button>
    </>
}
export default AddButton
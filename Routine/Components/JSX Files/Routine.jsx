import style from "../Static/css/Routine.module.css"
import { useState } from "react"
import Input from "./Input"
// import AddButton from "./AddButton"
import Items from "./Items"
// import List from "./List"

function Routine(){

    let [RcurrentValue, RsetcurrentValue] = useState([]);
    // creating a function and passing to the input component
    const handlevaluefun = (usecurrentValue) => {
        RsetcurrentValue([...RcurrentValue, usecurrentValue]);
    }

    return <>
        <div className={style["maincontainer"]}>
            <div className={style["inputAndButton"]}>
                <Input handlevaluefun={handlevaluefun}></Input>
                {/* <AddButton itemValueStore = {RcurrentValue}></AddButton> */}
            </div>
            <hr />
            <Items itemValue = {RcurrentValue}></Items>
        </div>
    </>
}
export default Routine
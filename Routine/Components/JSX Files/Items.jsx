import style from "../Static/css/Items.module.css"
function Items(props){
    return <>
        <div className={style["item-container"]}>
            <ul>
                {props.itemValue.map((value) => <li className={style["liststyle"]} key={value}>{value}</li>)}
            </ul>
        </div>
    </>
}
export default Items
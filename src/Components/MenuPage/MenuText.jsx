import MenuList from "../../MenuList"
import MenuParagraf from "./MenuParagraf"


function CreateParagraf(item){
    return ( 
    <MenuParagraf
    key={item.name}
    name={item.name}
    ingredients={item.ingredients}
    price={item.price}
    />
    )
}


function MenuText(){
    return (
        <div className="MainMenu">
            {MenuList.map(CreateParagraf)}
        </div>
    )
}
export default MenuText
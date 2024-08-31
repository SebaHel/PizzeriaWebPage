function MenuParagraf(props){
    return (
        <div className="MenuP">
            <p id="MenuName">{props.name}</p>
            <p id="MenuPrice">{props.price}</p>
            <p id="MenuIngredients">{props.ingredients}</p>
        </div>
    )
}

export default MenuParagraf
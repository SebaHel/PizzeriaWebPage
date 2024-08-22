import { useState } from "react"

function HoverButton({text, href, styleclass, reservation}){

    const [isActive, setIsActive] = useState(false);


    const HandleMouseOver = () => setIsActive(true);
    const HandleMouseOut = () => setIsActive(false);

    return (
    <p 
      className={`${reservation} ${isActive ? styleclass : ''}`}
      onMouseOver={HandleMouseOver}
      onMouseOut={HandleMouseOut}
    >
      <a href={href}>{text}</a>
    </p>
    );
    


}

export default HoverButton;
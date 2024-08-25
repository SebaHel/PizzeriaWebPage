import { useState } from "react"
import { Link } from "react-router-dom";

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
      <Link to={href}>{text}</Link>
    </p>
    );
    


}

export default HoverButton;
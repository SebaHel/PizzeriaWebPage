import HoverButton from "./HoverButton"
import { useState } from "react";
import ReservationForm from "./ReservsationForm";
function Reservation(){
    const [isActive, setIsActive] = useState(false);


    const HandleMouseClick = () => setIsActive(true);
    const HandleMouseEnd = () => setIsActive(false);

    return (
        <div onClick={HandleMouseClick}>
            <HoverButton text={"Reservation"} reservation={"reservation"} styleclass={"active"} />   
            <div className={`${"resrvationDiv"} ${isActive ? "Active" : ''}`}>
                <div className="ResContainer">
                    <ReservationForm />
                    <button onMouseEnter={HandleMouseEnd} id="close"><span className="material-symbols-outlined">close</span></button>
                </div>
            </div>         
        </div>
    )
}
export default Reservation
import HoverButton from "../HoverButton"
import Reservation from "../Reservation"


function ImageButtons(){
    return (
        <div className="ImgButtons">
            <div id="reservationButton">
                <Reservation />
            </div>
            <div id="MenuButton">
                <HoverButton text={"Menu"} href={"/Menu"} reservation={"reservation"} styleclass={"active"}/>
            </div>
        </div>
    )
}
export default ImageButtons
import HoverButton from "../HoverButton"


function ImageButtons(){
    return (
        <div className="ImgButtons">
            <div id="reservationButton">
                <HoverButton text={"Reservation"} href={"/Reservation"} reservation={"reservation"} styleclass={"active"}/>
            </div>
            <div id="MenuButton">
                <HoverButton text={"Menu"} href={"/Menu"} reservation={"reservation"} styleclass={"active"}/>
            </div>
        </div>
    )
}
export default ImageButtons
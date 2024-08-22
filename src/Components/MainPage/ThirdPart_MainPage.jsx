import HoverButton from "../HoverButton";

function ThirdPart_mainPage(){


    return(
    <div className="ThirdPage">
        <div className="MainPage">
            <div>
                <p style={{fontSize: "60px", fontWeight: "bolder", marginBottom: "10px"}}>Reserve Your Table Today!</p>
                <p style={{fontSize: "30px"}}>
                Secure your spot and enjoy an unforgettable
                 dining experience with us.
                 Book your table now and savor the best 
                 pizza in town in a cozy and welcoming atmosphere.</p>
                <HoverButton text={"Reserve Table"} href={"/Reservation"} reservation={"reservation"} styleclass={"active"}/>
            </div>
        </div>
    </div>
    )

}
export default ThirdPart_mainPage 

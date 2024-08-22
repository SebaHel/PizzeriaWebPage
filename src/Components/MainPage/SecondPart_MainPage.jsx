import HoverButton from "../HoverButton";

function SecondPart_mainPage(){


    return(
    <div className="SecondPage">
        <div className="MainPage">
            <div>
                <p style={{fontSize: "60px", fontWeight: "bolder", marginBottom: "10px"}}>Check Out the Menu!</p>
                <p style={{fontSize: "30px"}}>
                    Indulge in our handcrafted pizzas made with 
                    the freshest ingredients and a passion for perfection.
                    Discover a variety of mouthwatering flavors
                    that will satisfy all your cravings.</p>
                <HoverButton text={"check Menu"} href={"/Menu"} reservation={"reservation"} styleclass={"active"}/>
            </div>
        </div>
    </div>
    )

}
export default SecondPart_mainPage 

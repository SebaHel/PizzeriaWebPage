import HoverButton from "../HoverButton";

function FirstPart_mainPage(){


    return(
    <div className="MainPage">
        <div>
            <p style={{fontSize: "60px", fontWeight: "bolder", marginBottom: "10px"}}>Welcome to Pizzera!</p>
            <p style={{fontSize: "30px"}}>We serve authentic Italian pizza 
                made with fresh ingredients and a lot of love
                Enjoy a slice of Italy right here in town
                crafted by our skilled chefs
                for a delightful culinary experience.</p>
            <HoverButton text={"About Us"} href={"/About"} reservation={"reservation"} styleclass={"active"}/>
        </div>
    </div>
    )

}
export default FirstPart_mainPage 

import Header from "./Header"
import Footer from "./Footer"
import AboutText from "./AboutPage/AboutText"
import HoverButton from "./HoverButton"


function About(){


    return(
        <div className="About">
            <Header />
            <div id="about">
                <p>About Us</p>
            </div>
            <div className="aboutContainer">
                <AboutText />
                <div className="ImgButtons">
                    <div id="reservationButton">
                        <HoverButton text={"Reservation"} href={"/Reservation"} reservation={"reservation"} styleclass={"active"}/>
                    </div>
                    <div id="MenuButton">
                        <HoverButton text={"Menu"} href={"/Menu"} reservation={"reservation"} styleclass={"active"}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default About 
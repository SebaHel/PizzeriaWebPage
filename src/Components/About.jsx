import Header from "./Header"
import Footer from "./Footer"
import AboutText from "./AboutPage/AboutText"
import ImageButtons from "./AboutPage/ImageButtons"

function About(){


    return(
        <div className="About">
            <Header />
            <div id="about">
                <p>About Us</p>
            </div>
            <div className="aboutContainer">
                <AboutText />
                <ImageButtons />
            </div>
            <Footer />
        </div>
    )

}
export default About 
import Header from "./Header"
import Footer from "./Footer"
import ImageButtons from "./AboutPage/ImageButtons"
import MenuText from "./MenuPage/MenuText"

function Menu(){
    return(
        <div className="Menu">
            <Header />
            <div id="about">
                <p>Menu</p>
            </div>
            <MenuText />
            <ImageButtons />
            <Footer />
        </div>
    )
}
export default Menu
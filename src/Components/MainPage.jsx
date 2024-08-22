import FirstPart_mainPage from "./MainPage/FirstPart_MainPage";
import SecondPart_mainPage from "./MainPage/SecondPart_MainPage";
import ThirdPart_mainPage from "./MainPage/ThirdPart_MainPage";
import Footer from './Footer.jsx'

function MainPage(){


    return(
        <div className="MainPart">
            <FirstPart_mainPage />
            <SecondPart_mainPage />
            <ThirdPart_mainPage />
            <Footer />
        </div>
    )

}
export default MainPage 
import Header from "./Header"
import Footer from "./Footer"
import ReservationForm from "./ReservsationForm"

function Contact(){
    return(
        <div className="Contact">
            <Header />
            <div id="about">
                <p>Contact</p>
            </div>
            <div className="ContactPage">
                <div className="ContactGrid">
                    <ReservationForm />
                    <div className="footer-section">
                        <h2>Contact</h2>
                        <ul>
                            <li><i className="material-icons">location_on</i> 1234 Pizza Street, City, Country</li>
                            <li><i className="material-icons">phone</i> +48 123 456 789</li>
                            <li><i className="material-icons">email</i>contact@pizzeria.com</li>
                            <li><span className="material-symbols-outlined">nest_clock_farsight_analog</span>Mon-Fr: 8-22</li>
                            <li><span className="material-symbols-outlined">nest_clock_farsight_analog</span>St: 8-22</li>
                            <li><span className="material-symbols-outlined">nest_clock_farsight_analog</span>Sun: 8-22</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}
export default Contact

function Footer(){

    return(
    <footer className="footerMain">
        <div className="footerContent">
            <div className="footer-section_about">
                <h2>About Us</h2>
                <p>Welcome to our pizzeria, where we serve delicious,
                     freshly made pizzas with a blend of traditional
                      Italian recipes and modern twists in a cozy atmosphere.</p>
            </div>

            <div className="footer-section">
                <h2>Contact</h2>
                <ul>
                    <li><i className="material-icons">location_on</i> 1234 Pizza Street, City, Country</li>
                    <li><i className="material-icons">phone</i> +48 123 456 789</li>
                    <li><i className="material-icons">email</i>contact@pizzeria.com</li>
                </ul>
            </div>

            <div className="footer-section social">
                <h2>Find Us</h2>
                <div className="social-icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pizzeria. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer
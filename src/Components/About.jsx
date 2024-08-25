import Header from "./Header"
import Footer from "./Footer"


function About(){


    return(
        <div className="About">
            <Header />
            <div id="about">
                <p>About Us</p>
            </div>
            <div className="aboutContainer">
                <div className="aboutText">
                <p>
                    Our passion for authentic Italian cuisine shines through in every pizza we make.
                    Using traditional recipes and the freshest ingredients,
                    we create pizzas with a perfect balance of flavors and a crisp,
                    light crust. Every bite offers a true taste of Italy,
                    crafted with care by our dedicated team.
                    </p><br />
                    
                <p>
                    From the classic Margherita to gourmet options like Quattro Formaggi,
                    each pizza is baked in a wood-fired oven for that unmistakable smoky flavor.
                    We also offer a selection of Italian appetizers, fresh salads,
                    and homemade desserts to complement your meal.
                    </p><br />
                <p>Enjoy your pizza in a cozy setting inspired by Italian trattorias.
                    Whether you're with family or friends,
                    our friendly service and relaxed vibe make Pizzera
                    the perfect place for any occasion.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export default About 
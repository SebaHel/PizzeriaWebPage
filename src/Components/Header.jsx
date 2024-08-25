import HoverButton from "./HoverButton";
import React, { useEffect, useState } from 'react';

function Header(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const scrollableElement = document.body;

        const handleScroll = (event) => {
            const delta = event.deltaY || (event.wheelDelta ? -event.wheelDelta : 0);
            setScrollPosition(prev => prev + delta);

            if (scrollPosition <= 0) {
                setIsHidden(false);
            } else {
                setIsHidden(true);
            }
        };

        scrollableElement.addEventListener('wheel', handleScroll, { passive: true });

        return () => {
            scrollableElement.removeEventListener('wheel', handleScroll);
        };
    }, [scrollPosition]);
    
    return(
       <nav className={` ${isHidden ? 'hidden' : ''}`}>
           <div className={`nav_header ${isHidden ? 'hidden' : ''}`}>
               <a href="/"><p className="Logo"><span className="material-symbols-outlined">local_pizza</span>Good pizza</p></a>
               <HoverButton text={"About Us"} href={"/About"} reservation={"links"} styleclass={"hovered"}/>
               <HoverButton text={"Menu"} href={"/Menu"} reservation={"links"} styleclass={"hovered"}/>
               <HoverButton text={"Contact"} href={"/Contact"} reservation={"links"} styleclass={"hovered"}/>
               <HoverButton text={"Log In"} href={"/Log_in"} reservation={"links"} styleclass={"hovered"}/>
               <HoverButton text={"Reservation"} href={"/Reservation"} reservation={"reservation"} styleclass={"active"}/>
           </div>
       </nav>
    )
}



export default Header
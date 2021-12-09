import React, {useState, useEffect} from "react";

import About from "../about/About";
import Cover from "../cover/Cover";
import Footer from "../footer/Footer";
import Info from "../info/Info";
import NavBar from '../navBar/NavBar';

const Home = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [scrollHeight]);

    return (
        <div>
            <NavBar isScrolling={scrollHeight} />
            <Cover />
            <About />
            <Info />
            <Footer />
        </div>
    )
}

export default Home

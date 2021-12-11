import React from 'react'
import "./Cover.css";
import coverImg from "../../media/cover-imf.jpg";

const Cover = () => {
    const toTheTop = () => {
        window.scrollTo({ top: 1000, left: 0, behavior: "smooth"})
    }

    return (
        <div className="cover-container">
            <img className="img" src={coverImg} alt=""/>
            <div className="cover-tiket-scroll" onClick={toTheTop}>Compra tu entrada!</div>
        </div>
    )
}

export default Cover;


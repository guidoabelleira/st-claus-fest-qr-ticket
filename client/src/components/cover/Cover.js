import React from 'react'
import "./Cover.css";
import coverImg from "../../media/cover-img.jpg";

const Cover = () => {
    const toTheTop = () => {
        window.scrollTo({ top: 1000, left: 0, behavior: "smooth"})
    }

    return (
        <div className="cover-container">
            <img className="img" src={coverImg} alt=""/>
            <h1>ST CLAUS</h1>
            <p>24 DICIEMBRE 2021</p>
            <div className="cover-tiket-scroll" onClick={toTheTop}>ADQUIRÍ TU ENTRADA!</div>
        </div>
    )
}

export default Cover;


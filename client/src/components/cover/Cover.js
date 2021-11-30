import React from 'react'
import "./Cover.css";
import coverImg from "../../media/cover-img.jpg";

const Cover = () => {
    return (
        <div className="cover-container">
            <img className="img" src={coverImg} alt=""/>
            <h1>St Claus</h1>
            <p>24 Diciembre 2021</p>
        </div>
    )
}

export default Cover;


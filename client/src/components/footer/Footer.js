import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h3>TRANSLADOS / SALIDAS</h3>
                <p>PRÓXIMAMENTE... </p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    CONTACTO
                </div>
                <div className="sns-links">
                    <a href="https://www.instagram.com/stclaus.cordoba/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;

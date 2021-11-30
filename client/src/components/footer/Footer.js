import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h3>Aca compra de tickets</h3>
                <p>MercadoPago</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Desing by Guido Abelleira & Lucas Ruiz - 2021
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;

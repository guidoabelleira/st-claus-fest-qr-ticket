import React from 'react'
import './FailurePayment.css'
import {Link} from 'react-router-dom'

const FailurePayment = () => {

    return (
        <div className="failurePayment-container">
            <h3>ALGO SALIÓ MAL! INTENTÁ COMPRAR DE NUEVO</h3>
            <Link to='/'>
                <button className="failurePayment-bttn">INICIO</button>
            </Link>
        </div>
    )
}

export default FailurePayment
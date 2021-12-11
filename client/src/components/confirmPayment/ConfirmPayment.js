import React from 'react'
import './ConfirmPayment.css'
import axios from 'axios'

const ConfirmPayment = () => {

    async function validateTicket () {
        try {
            // tomo id de localstorage
            let idTiket = window.localStorage.getItem('idTiket');
            // parametros para confirmar idTiket y status true
            await axios.put('tickets/' + idTiket);
            alert('Compra finalizada! Revisá tu casilla de correo electrónico.')
            window.location.assign('/')
        // corregir url correcta. ok
        } catch (error) {
            console.log(error);
        }
        

    }

    return (
        <div className="confirmPayment-container">
            <h3>Confirma tu compra</h3>
            <button className="confirmPayment-bttn" onClick={validateTicket}>FINALIZAR</button>
        </div>
    )
}

export default ConfirmPayment

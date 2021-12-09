import React from 'react'
import './ConfirmPayment.css'

const ConfirmPayment = () => {

    async function validateTicket () {
        try {
            // tomo id de localstorage
            let idTiket = window.localStorage.getItem('idTiket');
            // parametros para confirmar idTiket y status true
            // let resValidate = await axios.post('tickets/');
            alert(idTiket)
        // corregir url correcta
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

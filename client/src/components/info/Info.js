import React, { useState } from 'react';
import axios from 'axios';

import "./Info.css";

const Info = () => {
    
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        email: "", 
        telephone: "",
        ticketType: "",
        dni: "",
    });

    async function sendContact (input){
        //Endpoint ---> http://localhost:3001/ruta_generador_tiket ?
    
        // Por BODY necesito:
        let body ={
            user:{
                name: input.name,
                lastname: input.lastname,
                email: input.email,
                telephone: input.telephone,
                ticketType: input.ticketType,
                dni: input.dni
            }
        }
        let resEmail = await axios.post('ruta_generador_tiket', body)
        console.log(resEmail)
        console.log("soy body: ", body)
        return
    };

    function handleSubmit(e){
        e.preventDefault();
        // dispatch a ruta de back
        sendContact(input);
        alert("Tiket generado!!! Revise su casilla de mail...")
        setInput({
            name: "",
            lastname: "",
            email: "", 
            telephone: "",
            ticketType: "",
            dni: "",
        })
    }

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value})
    }

    function handleSelectChange(e) {
        setInput({
            ...input,
            ticketType: e.target.value
        })
    }
    
    
    return (
        <div className="info-container">
            <div className="info">
                <h1>Adquiri tu entrada: </h1>
            </div>
            <div className="tiket">
                <form onSubmit={handleSubmit}>
                    <p>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre *" 
                            required
                            onChange={handleInputChange}
                            value={input.name} 
                            className="tiket-input"
                        />
                    </p>
                    <p>
                        <input 
                            type="text" 
                            name="lastname" 
                            placeholder="Apellido *" 
                            required
                            onChange={handleInputChange}
                            value={input.lastname} 
                            className="tiket-input"
                        />
                    </p>
                    <p>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email *"
                            required
                            onChange={handleInputChange}
                            value={input.email} 
                            className="tiket-input"
                            />
                    </p>
                    <p>
                        <input 
                            type="tel" 
                            name="telephone" 
                            placeholder="Número de teléfono *" 
                            required
                            onChange={handleInputChange}
                            value={input.telephone}
                            className="tiket-input"
                            />
                    </p>
                    <p>
                        <select value={input.ticketType} onChange={handleSelectChange}>
                            <option defaultValue={false} selected >Entrada:</option>
                            <option value="type1" >type1 $1500</option>
                            <option value="type2">type2 $3000</option>
                        </select>
                    </p>
                    <p>
                        <input 
                            type="number"
                            name="dni" 
                            placeholder="DNI *" 
                            required
                            onChange={handleInputChange}
                            value={input.dni} 
                            className="tiket-input"
                            />
                    </p>

                    <button className="tiket-bttn"type='submit'><p>Enviar</p></button>
                    
                </form>
            </div>
        </div>
    )
}

export default Info

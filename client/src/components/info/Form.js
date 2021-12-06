import React, {useState} from 'react';
import axios from 'axios';

const Form = ({type}) => {

    const [input, setInput] = useState({
        name: "",
        lastname: "",
        email: "", 
        telephone: "",
        ticketType: "",
        dni: "",
    });

    async function sendContact (input){
        //Endpoint ---> http://localhost:3001/mercadopago/ ?
    
        // Por BODY necesito:
        let body ={
            user:{
                name: input.name,
                lastname: input.lastname,
                email: input.email,
                telephone: input.telephone,
                ticketType: type.ticketType,
                dni: input.dni
            }
        }


        let bodyMercadoPago = {
            title: input.ticketType,
            unit_price: type.unit_price,
            quantity: 1
        }
        let mercadoPagoRes = await axios.post('mercadopago/', bodyMercadoPago)
        console.log(mercadoPagoRes)
        window.open(mercadoPagoRes.data, '_blank')
        console.log("soy body: ", body)
        return
    };

    function handleSubmit(e){
        e.preventDefault();
        // dispatch a ruta de back
        sendContact(input);
        alert("Terminá tu compra en Mercado Pago y esperá a ser redirigido!")
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
        <div>
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
                            type="number"
                            name="dni" 
                            placeholder="DNI *" 
                            required
                            onChange={handleInputChange}
                            value={input.dni} 
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

                    <button className="tiket-bttn"type='submit'><p>Enviar</p></button>
                    
                </form>
        </div>
    )
}

export default Form





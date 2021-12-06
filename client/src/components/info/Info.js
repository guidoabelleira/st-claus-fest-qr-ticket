import React from 'react';

import { useModal } from "../../hooks/useModal";
import Modal from "./Modal";

import "./Info.css";
import Form from './Form';

const Info = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModal4, openModal4, closeModal4] = useModal(false);
    const [isOpenModal5, openModal5, closeModal5] = useModal(false);

    const type1 = {
        ticketType: "general",
        unit_price: 1500
    }
    
    return (
        <div className="info-container">
            <div>
                <h3>Ticket General</h3>
                <p>+ mas info</p>
                <button onClick={openModal1}>Modal 1</button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <Form type={type1}/>
                </Modal>
            </div>

            <div>
                <h3>Ticket Vip +25</h3>
                <p>+ mas info</p>
                <button onClick={openModal2}>Modal 2</button>
                <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                    <h3>Modal 1</h3>
                    <p>Hola este es el contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="no animals"></img>
                </Modal>
            </div>

            <div>
                <h3>Ticket Vip +30 exclusivo</h3>
                <p>+ mas info</p>
                <button onClick={openModal3}>Modal 3</button>
                <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                    <h3>Modal 1</h3>
                    <p>Hola este es el contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="no animals"></img>
                </Modal>
            </div>

            <div>
                <h3>Mesa Vip +25</h3>
                <p>+ mas info</p>
                <button onClick={openModal4}>Modal 4</button>
                <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                    <h3>Modal 1</h3>
                    <p>Hola este es el contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="no animals"></img>
                </Modal>
            </div>

            <div>
                <h3>Mesa Vip +30</h3>
                <p>+ mas info</p>
                <button onClick={openModal5}>Modal 5</button>
                <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
                    <h3>Modal 1</h3>
                    <p>Hola este es el contenido modal 1</p>
                    <img src="https://placeimg.com/400/400/animals" alt="no animals"></img>
                </Modal>
            </div>
            
        </div>
    )
}

export default Info

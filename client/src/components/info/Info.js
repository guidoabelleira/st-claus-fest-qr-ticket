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

    const typeTiket = {
        type1: {ticketType: "General",
        unit_price: 1000},
        type2: {ticketType: "Entrada VIP +25",
        unit_price: 2000},
        type3: {ticketType: "Entrada VIP +30 Exclusivo",
        unit_price: 3000},
        type4: {ticketType: "Mesas VIP +25",
        unit_price: 4000},
        type5: {ticketType: "Mesas VIP +30",
        unit_price: 5000},
    }
    
    return (
        <div className="info-container">
            <div className="info-tickets">
                <h3>Ticket General</h3>
                <p>+ mas info</p>
                <button className="tiket-bttn" onClick={openModal1}>COMPRAR</button>
                <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                    <Form type={typeTiket.type1}/>
                </Modal>
            </div>

            <div className="info-tickets">
                <h3>Ticket Vip +25</h3>
                <p>+ mas info</p>
                <button className="tiket-bttn" onClick={openModal2}>COMPRAR</button>
                <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                    <Form type={typeTiket.type2}/>
                </Modal>
            </div>

            <div className="info-tickets">
                <h3>Ticket Vip +30 exclusivo</h3>
                <p>+ mas info</p>
                <button className="tiket-bttn" onClick={openModal3}>COMPRAR</button>
                <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                    <Form type={typeTiket.type3}/>
                </Modal>
            </div>

            <div className="info-tickets">
                <h3>Mesa Vip +25</h3>
                <p>+ mas info</p>
                <button className="tiket-bttn" onClick={openModal4}>COMPRAR</button>
                <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                   <Form type={typeTiket.type4}/>
                </Modal>
            </div>

            <div className="info-tickets">
                <h3>Mesa Vip +30</h3>
                <p>+ mas info</p>
                <button className="tiket-bttn" onClick={openModal5}>COMPRAR</button>
                <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
                   <Form type={typeTiket.type5}/>
                </Modal>
            </div>
            
        </div>
    )
}

export default Info

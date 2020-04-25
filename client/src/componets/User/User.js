import React, {useState} from "react";
import UserName from "./UserName";
import "./User.css"
import UserImage from "./UserImage";
import Modal from 'react-modal';
import { MdSettings } from "react-icons/md";

const _URL="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"

const User = ()=>{
    const [modal, setModal] = useState(false)
    const openModal = ()=>{
        setModal(true);
    }


    const closeModal = ()=>{
        setModal(false);
    }
    return (
        <div className="user">
            <UserName name={"Иван"}/>
            <div className="user__icon-btn" onClick={openModal}><MdSettings/>
            </div>
            <Modal
                className="user__modal"
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >gg <button onClick={closeModal}>Close Modal</button></Modal>
            <UserImage url={_URL}/>
        </div>)
}

export default User;
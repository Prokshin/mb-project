import React, {useEffect, useState} from "react";
import UserName from "./UserName";
import "./User.css"
import UserImage from "./UserImage";
import Modal from 'react-modal';
import { MdSettings } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import { USER_REQUEST} from "../../redux/types";

const User = ()=>{
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.login.userId)
    const user = useSelector(state=> state.user);

    useEffect(()=>{
        dispatch({type:USER_REQUEST, payload: {userId}})
    },[dispatch,userId])

    const openModal = ()=>{
        setModal(true);
    }
    const closeModal = ()=>{
        setModal(false);
    }
    return (
        <div className="user">
            <UserName name={user.name}/>
            <div className="user__icon-btn" onClick={openModal}><MdSettings/>
            </div>
            <Modal
                className="user__modal"
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
            ><button className="user__icon-btn" onClick={closeModal}>Close Modal</button>
            </Modal>
            <UserImage url={user.img}/>
        </div>)
}

export default User;
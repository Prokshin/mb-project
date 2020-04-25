import React from "react";
import "./Header.css"
import Balance from "../Balance";
import CurrentDate from "../CurrentDate";
import { FaRegCalendarAlt } from "react-icons/fa";
const Header = () =>{
    return <div className="header">
        <div className="header__item"><Balance text="24000"/></div>
        <div className="header__item"><FaRegCalendarAlt/> {" "}<CurrentDate/></div>
        <div className="header__item">Юзер</div>
    </div>
}

export default Header;
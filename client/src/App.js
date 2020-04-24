import React from 'react';

import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_REQUEST} from "./redux/types";

function App() {
    const dispatch = useDispatch()
    const login = useSelector(state => state.login)
    console.log(login)
  return (
    <div>
        {!login.isLogin ? <button onClick={()=>dispatch({type:LOGIN_REQUEST})}>Войти</button>: ""}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_REQUEST} from "./redux/types";
import MainPage from "./pages/mainPage";

function App() {
    const dispatch = useDispatch()
    const login = useSelector(state => state.login)
    console.log(login)
  return (
    <div className="content">
        {!login.isLogin ? <button onClick={()=>dispatch({type:LOGIN_REQUEST})}>Войти</button>: <MainPage/>}
    </div>
  );
}

export default App;

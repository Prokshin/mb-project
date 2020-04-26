import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './pages/mainPage';
import { loginRequest } from './redux/actions/loginActions';

function App() {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  console.log(login);
  return (
    <div className="content">
      {!login.isLogin ? <button onClick={() => dispatch(loginRequest(
        'test@email.ru',
        'test-password'))}>Войти</button> :
        <MainPage />}
    </div>
  );
}

export default App;

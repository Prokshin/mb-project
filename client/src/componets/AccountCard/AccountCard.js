import React from 'react';
import './AccountCard.css';
import { FaRubleSign } from 'react-icons/fa';

const AccountCard = ({ account }) => {
  //TODO: Обработчики конпок
  return (
    <div className="account__card">
      <div className="account__number">Счёт: {account.number}</div>
      <div className="account__balance">{account.balance}<FaRubleSign /></div>
      <div className="account__buttons">
        <button className="account__replenish btn bg_green">Пополнить</button>
        <button className="account__transfer btn bg_green">Перевод</button>
        <button className="account__payment btn bg_green">Платёж</button>
      </div>
      <div className="account__other">
        <div className="account__links">
          <a href="#1"> Выписка </a>
          <a href="#2"> Создать шаблон </a>
        </div>
        <button className="btn bg_red">Закрыть счёт</button>
      </div>
    </div>
  );
};

export default AccountCard;
import React, { useEffect } from 'react';
import SelectInput from './SelectInput';
import { useDispatch } from 'react-redux';
import { accountsMinRequest } from '../../redux/actions/accountActions';

import './AccountSelect.css';

const AccountSelect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(accountsMinRequest());
  }, [dispatch]);

//TODO: 0 и 1 счёт

  return <div className="account__select">

    <SelectInput />
    <hr className="separate" />
    <button className="btn bg_orange">Открыть счёт</button>
  </div>;
};

export default AccountSelect;
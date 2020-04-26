import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setCurrentAccount } from '../../redux/actions/accountActions';
import React from 'react';


const SelectInput = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.account.accounts);
  const options = accounts.map((account) => {
    return {
      value: account.number,
      label: account.number,
    };
  });

  return <div className="account__select">
    <h1>выбор счёта</h1>
    <Select
      onChange={(select) => {
        dispatch(setCurrentAccount(select.value));
      }}
      options={options}
    />
  </div>;
};

export default SelectInput;
import React from 'react';

import './AccountInfo.css';
import AccountCard from '../AccountCard/AccountCard';
import AccountSelect from '../AccountSelect';
import { useSelector } from 'react-redux';
import AccountHistory from '../AccountHistory';

const AccountInfo = () => {
  const account = useSelector(state => state.account.currentAccount);
  return (
    <div className="account">
      {account
        ?
        <>
          <AccountCard account={account} />
          <AccountHistory />
        </>
        :
        <h2>Выберите счёт</h2>}
      <AccountSelect />

    </div>
  );
};

export default AccountInfo;
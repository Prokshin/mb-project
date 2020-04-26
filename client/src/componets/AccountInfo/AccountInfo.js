import React from 'react';

import './AccountInfo.css';
import AccountCard from '../AccountCard/AccountCard';
import AccountSelect from '../AccountSelect';
import { useSelector } from 'react-redux';

const AccountInfo = () => {
  const account = useSelector(state => state.account.currentAccount);
  return (
    <div className="account">
      {account ? <> <AccountCard account={account} />
        <div className="account__history">
          <h1>История операций по счёту</h1>
        </div>
      </> : <h2>Выберите счёт</h2>}
      <AccountSelect />

    </div>
  );
};

export default AccountInfo;
export default class AccountAPI {
  getFullBalance = async () => {
    //----ЗАГЛУШКА----
    return _FULL_BALANCE;
  };
  getAccountInfo = async () => {
    console.log('--API: получение текущего аккаунта');
    return _CURRENT_INFO;
  };
  getAccounts = async () => {
    console.log('--API: получение всех аккаунтов');
    return _Accounts;
  };
}

const _FULL_BALANCE = 24000;
const _CURRENT_INFO = {
  number: '10000000099',
  balance: '12000',
};
const _Accounts = [
  {
    number: '10000000099',
  },
  {
    number: '10000000098',
  },
  {
    number: '10000000049',
  },
  {
    number: '10000000012',
  },
];

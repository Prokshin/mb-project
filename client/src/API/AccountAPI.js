export default class AccountAPI {
  getFullBalance = async () => {
    //----ЗАГЛУШКА----
    return _FULL_BALANCE;
  };
  getAccountInfo = async () => {
    console.log('--API: получение текущего счёта');
    return _CURRENT_INFO;
  };
  getAccounts = async () => {
    console.log('--API: получение всех счетов');
    return _Accounts;
  };
  getHistory = async () => {
    console.log('--API: получение истории счёта');
    return _History;
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

const _History = [
  {
    type: 'Платёж',
    date: '2020-04-17T03:24:00',
    sum: '2000',
  },
  {
    type: 'Платёж',
    date: '2020-04-17T03:24:00',
    sum: '2000',
  },
  {
    type: 'Платёж',
    date: '2020-04-17T03:24:00',
    sum: '2000',
  },
];

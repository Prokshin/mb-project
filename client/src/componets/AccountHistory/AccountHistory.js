import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker/es';

import './AccountHistory.css';

const AccountHistory = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div className="account__history">
      <h1>История операций по счёту</h1>
      <span>C
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="account__date"
          selected={startDate}
          maxDate={new Date()}
          onChange={(date) => setStartDate(date)}
        />
        по
        <DatePicker
          dateFormat="dd/MM/yyyy"
          className="account__date"
          selected={endDate}
          maxDate={new Date()}
          minDate={startDate}
          onChange={(date) => setEndDate(date)}
        />
      </span>
      <div className="account__table">
        <table>
          <thead>
          <tr>
            <td>Дата</td>
            <td>Тип</td>
            <td>Сумма</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>Doe</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AccountHistory;
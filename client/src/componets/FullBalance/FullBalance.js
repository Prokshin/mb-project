import React, { useEffect } from 'react';
import { FaRubleSign } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fullBalanceRequest } from '../../redux/actions/accountActions';

const FullBalance = (props) => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.fullBalance);
  useEffect(() => {
    dispatch(fullBalanceRequest());
  }, [dispatch]);
  return <>{balance} <FaRubleSign /></>;
};

export default FullBalance;
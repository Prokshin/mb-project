import React, { useEffect } from 'react';
import UserName from './UserName';
import './User.css';
import UserImage from './UserImage';
import { useDispatch, useSelector } from 'react-redux';
import { userRequest } from '../../redux/actions/userActions';
import UserSettings from './UserSettings';

const User = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.login.userId);
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userRequest(userId));
  }, [dispatch, userId]);


  return (
    <div className="user">
      <UserName name={user.name} />
      <UserSettings />
      <UserImage url={user.img} />
    </div>);
};

export default User;
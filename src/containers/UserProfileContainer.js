import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../views/pages/backoffice/UserProfile';

export const UserProfileContainer = () => {
  const userMe = useSelector(state => state.userMe)
  
  return <UserProfile userMe={userMe}/>;
};

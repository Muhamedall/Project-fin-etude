import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  // If the user is not logged in, redirect to login page
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // If user is not logged in, don't render anything
  if (!isLoggedIn) {
    return null;
  }

  // If user is logged in, render the children components
  return <>{children}</>;
};

export default ProtectedLayout;

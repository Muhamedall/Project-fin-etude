// Account.jsx
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  // Get the user from Redux store
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  // If the user is not logged in, redirect to login page
  if (!user) {
    return navigate("/login");
  }

  return (
    <div>
      {/* Your account page content goes here */}
      <h1>Welcome, {user.name}!</h1>
      <p>This is your account page.</p>
    </div>
  );
};

export default Account;

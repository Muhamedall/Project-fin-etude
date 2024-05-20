import { useSelector } from 'react-redux';


const Account = () => {
  const user = useSelector((state) => state.users.user);
  console.log("data user is :" +JSON.stringify(user))
  return (
    <div>
      <p>Email: {user.email}</p>
      <p>This is your account page.</p>
    </div>
  );
};

export default Account;

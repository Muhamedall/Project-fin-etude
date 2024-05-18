import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from '../../api/api';
import { setLoggedIn, setShowLogine, setShowInscription, setShowProfile } from '../Redux/navbarSlice';
import { useDispatch } from "react-redux";
import { setUser } from '../Redux/usersSlice';

const Logine = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [errorLogine, setErrorlogine] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/Account'); // Redirect to Account component if user is logged in
    }
  }, [navigate]);


  const validateForm = () => {
    const fields = [
      { ref: emailRef, name: "email", message: "Email is required." },
      { ref: passwordRef, name: "password", message: "Please enter a password." },
    ];

    const errors = {};

    fields.forEach(({ ref, name, message }) => {
      const value = ref.current.value.trim();

      if (value === "") {
        errors[name] = message;
      } else if (name === "email" && !value.match(/^\S+@\S+\.\S+$/)) {
        errors[name] = "Please enter a valid email address.";
      } else {
        errors[name] = "";
      }
    });

    setErrorMessages(errors);

    const isValid = Object.values(errors).every((message) => message === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
   

    if (isValid) {
     
      try {
        const response = await axios.post('/login', { email: emailRef.current.value, password: passwordRef.current.value });
        const userData = response.data.user;
        dispatch(setUser(userData));
        setErrorlogine(false);
        dispatch(setShowLogine(false));
        dispatch(setShowInscription(false));
        dispatch(setShowProfile(false));
        dispatch(setLoggedIn(true));
        localStorage.setItem('isLoggedIn', 'true');
       
        setLoginSuccess(true);
        setTimeout(() => {
          navigate('/Account');
        }, 3000);
      } catch (error) {
        console.log("Error:", error);
        setLoginSuccess(false);
        setErrorlogine(true);
      }
    }
  };

  return (
    <>

      <div className="ml-[10%] lg:w-full max-w-xs absolute z-40 lg:ml-[35%] lg:mt-[5%] lg:h-full shadow-zinc-900 ">
        <form className="p-[5%] bg-white shadow-md rounded lg:px-10 lg:p-[15%] lg:mb-4" >
          <nav className="flex flex-wrap gap-2">
            <div>
            </div>
            <div>
              <h2 className="font-serif ml-18 text-wheat text-2xl ">Log in to <span className="m-0 font-mono ">Student</span>Nest</h2>
            </div>
          </nav >
          <div className="lg:mt-16 grid space-y-4">
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Username
              </label>
              <input name="email" ref={emailRef} className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Username" />
              {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input ref={passwordRef} className={`${errorMessages.password ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************" />
              {errorMessages.password && <p style={{ color: "red" }}>{errorMessages.password}</p>}
            </div>
            <a className="inline-block align-baseline font-bold text-sm text-slate-950 hover:text-blue-800" href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar&from_login_screen=0" target="_blank" rel="noopener noreferrer">
              Forgot Password?
            </a>
            <div className="flex items-center justify-between">
              <button onClick={handleSubmit} className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded" type="button">
                Log in
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-800  hover:text-blue-950" href="https://www.facebook.com/login/identify/?ctx=recover&ars=royal_blue_bar&from_login_screen=0" target="_blank" rel="noopener noreferrer">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
      {loginSuccess && <div className="absolute z-50 mb-[15%] ml-[2%] lg:w-[30%] rounded-lg lg:ml-[30%] bg-green-100 border-l-4 border-green-500 text-green-700 lg:p-4" role="alert">
        <p className="font-bold">Success!</p>
        <p>You have successfully logged in.</p>
      </div>}
      {errorLogine && !loginSuccess && <div className="absolute z-50 mb-[15%] ml-[2%] lg:w-[30%] rounded-lg lg:ml-[30%] bg-orange-100 border-l-4 border-orange-500 text-orange-700 lg:p-4" role="alert">
        <p className="font-bold">Oops!</p>
        <p>It seems there was an error with your login credentials</p>
      </div>}
      <footer>
      </footer>
    </>
  );
};

export default Logine;

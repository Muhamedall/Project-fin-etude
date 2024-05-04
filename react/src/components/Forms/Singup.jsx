import { useRef, useState } from "react";
import axios from '../../api/api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns'
import {useNavigate} from 'react-router-dom';
const Signup = () => {
  const navigate =useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const acceptConditionRef = useRef(false);
  const cityRef = useRef("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    city: "",
    accept: "",
  });

  const validateForm = () => {
    const fields = [
      { ref: nameRef, name: "name", message: "Please enter full name." },
      { ref: emailRef, name: "email", message: "Email is required." },
      { ref: passwordRef, name: "password", message: "Please enter a Password." },
      { ref: acceptConditionRef, name: "accept", message: "Please check your condition." },
      { ref: cityRef, name: "city", message: "Please enter a City." },
    ];

    const errors = {};

    fields.forEach(({ ref, name, message }) => {
      const value = ref.current.value.trim();

      if (value === "") {
        errors[name] = message;
      } else if (name === "email" && !value.match(/^\S+@\S+\.\S+$/)) {
        errors[name] = "Please enter a valid email address.";
      } else if (name === "accept" && !ref.current.checked) {
        errors[name] = message;
      } else {
        errors[name] = ""; // Ensure that all fields are initialized in errors object
      }
    });

    if (!selectedDate) {
      errors.dateOfBirth = "Please select a date.";
    } else {
      errors.dateOfBirth = "";
    }

    setErrorMessages(errors);

    const isValid = Object.values(errors).every((message) => message === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      try {
        const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null;
        const response = await axios.post('/register', {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          dateOfBirth: formattedDate, // Ensure date of birth value is correctly populated
          city: cityRef.current.value, // Ensure city value is correctly populated
        });
        navigate('/Login');
        console.log("User registered successfully:", response.data);
        // Reset form fields and error messages upon successful registration
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        setSelectedDate(null);
        cityRef.current.value = "";
        acceptConditionRef.current.checked = false;
        setErrorMessages(prevErrors => ({
          ...prevErrors,
          fullname: "", // Reset fullname error to empty string
        }));
      } catch (error) {
        console.log("Error:", error.response.data);
        setErrorMessages(error.response.data.errors);
      }
    }
  };
  
  return (
    <>
      <div className="absolute ml-[5%] z-40  shadow-zinc-900 lg:w-[50%]  lg:ml-[25%] lg:mt-[5%] lg:h-full ">
        <form className=" p-[5%]  shadow-md rounded-2xl lg:px-10 bg-gray-100">
         
          <div className="  lg:grid lg:grid-cols-2 lg:gap-4    space-x">
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                ref={nameRef}
                className= {`${errorMessages.name ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="name"
                type="text"
                name="name"
              />
              {errorMessages.name && <p style={{ color: "red" }}>{errorMessages.name}</p>}
            </div>

            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                ref={emailRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="text"
                name="email"
                placeholder="example@gmail.com"
              />
              {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                ref={passwordRef}
                className={`${errorMessages.password ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                name="password"
                type="password"
                placeholder="******************"
              />
              {errorMessages.password && <p style={{ color: "red" }}>{errorMessages.password}</p>}
            </div>
            
            <div className="static max-w-sm">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of birth</label>
              <FontAwesomeIcon icon={faCalendarDays} className="absolute z-40 mt-3 ml-2 " />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className={`${errorMessages.dateOfBirth ? "border-red-600 " : ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholderText="Select date"
                name="dateOfBirth"
              />
              {errorMessages.dateOfBirth && <p style={{ color: "red" }}>{errorMessages.dateOfBirth}</p>}
            </div>
            
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
              <input
                name="city"
                ref={cityRef}
                className={`${errorMessages.city ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="city"
                type="text"
              />
              {errorMessages.city && <p style={{ color: "red" }}>{errorMessages.city}</p>}
            </div>
          </div>

          <input className="mr-2 leading-tight" type="checkbox" name="chexInput" ref={acceptConditionRef}/>
          <span className="text-sm">
            I agree to the Terms of Use and Privacy Policy <span className="text-red-500">*</span>
            {errorMessages.accept && <p style={{ color: "red" }}>{errorMessages.accept}</p>}
          </span>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="shadow bg-slate-950 hover:bg-slate-700 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
              type="button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <footer></footer>
    </>
  );
};

export default Signup;

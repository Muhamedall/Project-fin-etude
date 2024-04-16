import  { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { axiosClient } from "../../api/api";

const Singup = () => {
  const nameRef=useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const acceptConditionRef = useRef(false);
  const cityRef =useRef("");
  

  const [selectedDate, setSelectedDate] = useState(null);

  const [errorMessages, setErrorMessages] = useState({
    fullname:"",
    
    email: "",
    password: "",
    date: "",
    city:"",
    accept: "",
  });

  const validateForm = () => {
    const fields = [
      { ref: nameRef, name: "fullname", message: "Please enter Full Name." },
      { ref: emailRef, name: "email", message: "Email is required." },
      { ref: passwordRef, name: "password", message: "Please enter a Password." },

      {
         ref: acceptConditionRef,
         name: "accept",
         message: "Please check your condition.",
       },
       { ref: cityRef, name: "city", message: "Please enter a City." },
       
    ];

    const errors = {};

    fields.forEach(({ ref, name, message }) => {
      const value = ref.current.value.trim();

      if (value === "") {
        errors[name] = message;
      } else if (name === "email" && !value.match(/^\S+@\S+\.\S+$/)) {
        errors[name] = "Please enter a valid email address.";
      } 
      else if (name === "accept" && !ref.current.checked) {
         errors[name] = message;
      }
        
      
      
      
      
      else {
        errors[name] = "";
      }
    });

    if (!selectedDate) {
      errors.date = "Please select a date.";
    } else {
      errors.date = "";
    }

    setErrorMessages(errors);

    const isValid = Object.values(errors).every((message) => message === "");

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    const axios =axiosClient.defaults
  

    if (isValid) {
      console.log("Full Name:", nameRef.current.value);
      console.log("Email:", emailRef.current.value);
      console.log("Password:", passwordRef.current.value);
      console.log("Date of Birth:", selectedDate);
      console.log("City:", cityRef.current.value);
      console.log(axios)
    }
  };

  return (
    <>
      <div className="absolute ml-[5%] shadow-zinc-900 lg:w-[50%]  lg:ml-[25%] lg:mt-[5%] lg:h-full ">
        <form className=" p-[5%] bg-white shadow-md rounded lg:px-10   ">
         
          <div className="  lg:grid lg:grid-cols-2 lg:gap-4    space-x">
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                ref={nameRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="fullname"
                type="text"
                name="fullname"
              />
              {errorMessages.fullname&& <p style={{ color: "red" }}>{errorMessages.fullname}</p>}
            </div>
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                ref={emailRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
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
                className={`${errorMessages.date ? "border-red-600 " : ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholderText="Select date"
                name="date"
              />
              
              {errorMessages.date && <p style={{ color: "red" }}>{errorMessages.date}</p>}
            </div>
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
              <input
              name="city"
                ref={cityRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
                Sing up
              </button>
             
            </div>
        </form>
      </div>
      <footer></footer>
    </>
  );
};

export default Singup;

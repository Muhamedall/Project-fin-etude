import  { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

const Singup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const acceptConditionRef = useRef(false);
  

  const [selectedDate, setSelectedDate] = useState(null);

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    date: "",
    accept: "",
  });

  const validateForm = () => {
    const fields = [
      { ref: emailRef, name: "email", message: "Email is required." },
      { ref: passwordRef, name: "password", message: "Please enter a password." },
      {
         ref: acceptConditionRef,
         name: "accept",
         message: "Please check your condition.",
       },
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

    if (isValid) {
      // Form submission logic goes here
    }
  };

  return (
    <>
      <div className="ml-[10%]  lg:w-[50%]   absolute lg:ml-[30%] lg:mt-[5%] lg:h-full shadow-zinc-900">
        <form className=" p-[5%] bg-white shadow-md rounded lg:px-10  ">
         
          <div className="  lg:grid lg:grid-cols-2 lg:gap-4  lg:mt-16  space-y-4">
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                ref={emailRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
              />
              {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
            </div>
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                ref={emailRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
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
                type="password"
                placeholder="******************"
              />
              {errorMessages.password && <p style={{ color: "red" }}>{errorMessages.password}</p>}
            </div>
            <div className="relative max-w-sm">
              
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of birth</label>

              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date"
              />
              {errorMessages.date && <p style={{ color: "red" }}>{errorMessages.date}</p>}
            </div>
            <div className="lg:mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
              <input
              name="city"
                ref={emailRef}
                className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="city"
                type="text"
                
              />
              {errorMessages.email && <p style={{ color: "red" }}>{errorMessages.email}</p>}
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
                Log in
              </button>
             
            </div>
        </form>
      </div>
      <footer></footer>
    </>
  );
};

export default Singup;

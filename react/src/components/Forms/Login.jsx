import  { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom';

import axios from '../../api/api';
import {   setShowLogine } from '../Redux/navbarSlice';

import { useDispatch  } from "react-redux";

export default function Logine() {
  
    const dispatch =useDispatch();

	const navigate =useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
    });

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

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const isValid = validateForm();
       
       
        if (isValid) {
            console.log("is good")
            console.log("Axios request headers:", axios.defaults.headers);

            try{
                 await axios.post('/login' ,{email :emailRef.current.value , password :passwordRef.current.value});
                 dispatch(setShowLogine(false))
                 navigate('/Student');
            }catch(e){
                console.log("Is Error " +e);

            }
            
     
        }
      

       
    };

    return (
        <>
            <div  className=" ml-[10%]  lg:w-full max-w-xs absolute  z-40  lg:ml-[35%]  lg:mt-[5%]  lg:h-full shadow-zinc-900  ">
                <form className="p-[5%]  bg-white shadow-md rounded lg:px-10 lg:p-[15%]  lg:mb-4" >
                    <nav className="flex flex-wrap gap-2">
                        <div>
                            
                        </div>
                        <div>
                            <h2 className="font-serif  ml-18 text-wheat text-2xl ">Log in to <span className="m-0 font-mono ">Student</span>Nest</h2>
                        </div>
                    </nav >
                    <div className="lg:mt-16 grid space-y-4">
                        <div className="lg:mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Username
                            </label>
                            <input ref={emailRef} className={`${errorMessages.email ? "border-red-600" : ""} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" `} id="username" type="text" placeholder="Username" />
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
                               Sing up
                            </a>
                            
                            
                        </div>
                    </div>
                </form>
            </div>
            <footer>
              
            </footer>
        </>
    );
}

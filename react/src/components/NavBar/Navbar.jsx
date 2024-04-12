
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { setShowProfile ,setShowLogine } from '../Redux/navbarSlice';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from './WhatsApp_Image_2024-04-12_at_22.08.25-removebg-preview.png';

const Navbar = () => {
  const showProfile = useSelector((state) => state.navbar.showProfile);
  const showLogine=useSelector((state) => state.navbar.showLogine);

  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShowProfile(true));
   
  };
  const handleShowLogine =()=>{
    dispatch(setShowLogine(true));
    dispatch(setShowProfile(false));

  }
  const removeShowLogine=()=>{
    dispatch(setShowLogine(false));
  }

  return (
    <>
      <header className=" static flex flex-row  border-b-2  ">
          <div className='  w-15 ml-3 mt-2  '>
            <img src={logo} alt="logo" className="  w-20 xl:w-[97%] lg:w-[10%]  "></img>
           
          </div>
     
        
        <nav className=" ">
       
          <div className="Search-bar 
          
         bg-yellow-300
        sm:bg-red-400
         xl:bg-orange-500
          xl:w-[300%]
          
          xl:ml-[25%]
         
         sm:w-[250%]
         sm:ml-[20%]
         sm:mb-2
         sm:p-2
        

        
          md:w-[350%]
         
          md:mb-[5%]
          md:p-2
         
          md:ml-[75%]
          md:border-gray-400 
          rounded-full
          mt:mt-3
          md:bg-slate-500

          lg:p-1 
          flex flex-row lg:ml-[30%] 
          lg:shadow-xl border
           lg:bg-green-500
           lg:border-gray-400 
         
            lg:w-[210%] mt-3
            
            ">

          <div className=" flex flex-col 
          rounded-full 
          
          cursor-pointer group hover:bg-gray-100  lg:w-[30%]   ">
  <div>
    <label className="absolute sm:mt-2  md:text-xl md:mt-[10px] md:ml-5 xl:text-xl lg:relative  lg:text-xs font-medium lg:ml-10 lg:mt-2 ">Where</label>
  </div>
  <div className="relative hidden  lg:inline-block    ">
    <input 
      className="  md:placeholder:text-xl
      xl:placeholder:text-2xl
      
     
      xl:text-xl
       lg:ml-10 
       lg:focus:outline-none rounded-full 
       lg:text-xs 
       lg:font-medium 
       bg-transparent 
       
       lg:placeholder:text-sm 
       lg:placeholder:font-normal "
      type="text"
      placeholder='Search destination'
    />
    
  </div>
</div>

            <div className="flex flex-col rounded-full hover:bg-gray-100 cursor-pointer w-[30%] ">
              
              <label  className='md:text-xl md:mt-2 xl:text-xl  lg:text-xs font-medium ml-5 lg:mt-2  '>Who</label>
             
          

            <span className=" hidden lg:inline-block xl:text-xl text-slate-500 lg:text-sm lg:ml-5  ">Add guest</span>
            </div>
            <div className="flex flex-col rounded-full  hover:bg-gray-100 cursor-pointer w-[30%] ">
            <label className='md:text-xl md:mt-2 xl:text-xl lg:text-xs font-medium ml-5 lg:mt-2 '>Price</label>
           <span className="hidden lg:inline-block xl:text-xl  text-slate-500 text-sm ml-5">Price ranking</span>
           </div>
           <div className='' >
           <button className="bg-slate-950 border-2 borde rounded-full w-[100%] h-[100%]  text-slate-50  hover:bg-gray-500 p-1 mr-5   "><FontAwesomeIcon icon={faSearch}  className=""/></button>
           </div>
            
           <div className=" text-center absolute grid grid-cols-3 
           gap-2
            sm:bg-amber-400
          
            sm:ml-[83%]
            md:mb-[5%]
            md:ml-[75%]
            
            
            
          
            lg:bg-green-700
          
            p-3 
            
            lg:ml-[80%] 
            lg:mt-[5px] 
            border 
            border-x-2 rounded-full 
            
            hover:shadow-xl 
            cursor-pointer " >
           <FontAwesomeIcon   icon={faBars} />
        <FontAwesomeIcon   icon={faUser}/>
        </div>
        
          </div>
         
        </nav>
       
        {showProfile ? (
        
        <div className="absolute bg-slate-50  mt-[75%] max-sm:mt-[125%] max-sm:ml-[180%]  max-sm:w-[70%] max-sm:p-5   lg:rounded lg:bg-slate-50 lg:w-[20%] lg:py-5 lg:absolute  lg:ml-[75%] lg:mt-[21%]   ">
          <div className="max-w-sm rounded overflow-hidden ">
            <div className="px-6 py-4">
              <button className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:text-green-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleShowLogine}>
                Log in
              </button>
              <br></br>
              <button className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:text-green-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" href="Login">
                Sign up
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
     
    ) : null}
    {showLogine ? (
      <>
        <div className="absolute bg-slate-50 rounded ml-40 p-[15px] w-[200%] mt-[150%] items-center lg:rounded lg:bg-slate-50 lg:w-[35%]  lg:absolute  lg:ml-[25%] lg:mt-[37%]   ">
        <FontAwesomeIcon   icon={faXmark} className='absolute ml-[90%] p-1 mb-5  cursor-pointer hover:bg-slate-100   rounded-full  '  onClick={removeShowLogine}  />

          <div >
           
            
          
         
            <div className="px-6 py-4  ">
            <form action="#" className=''>

			<div className="mb-4">
				<label  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" />
			</div>
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" />
				<a href="#"
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a>
			</div>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center">
					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked/>
					<label  className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<a href="#"
					className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
			</div>
			<button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
		</form>

            </div>
            
          </div>
        </div>
        </>
    ) : null}
    
      </header>
     
    </>
  );
};

export default Navbar;

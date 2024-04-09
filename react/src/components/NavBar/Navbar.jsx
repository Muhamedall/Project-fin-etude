
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setShowProfile ,setShowLogine } from '../Redux/navbarSlice';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from './housetica__1_-removebg-preview.png';

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
      <header className=" max-sm:bg-red-300 max-sm:drop-shadow-md  max-sm:static drop-shadow-md  lg:static drop-shadow-md header sticky top-0 lg:bg-slate-50 lg:shadow-md flex items-center justify-between px-8 ">
          <div className='logo-title hidden sm:block  '>
          <a href="/">
            <img src={logo} alt="logo" className="w-20"></img>
            <h2 className="text-2xl  ">
              Student<span className="text-green-400">Nest</span>
            </h2>
          </a>
          </div>
     
        
        <nav className=" max-sm: nav font-semibold text-lg  flex flex-row">
       
          <div className="max-sm:absolute  sm:inline-flex max-w-full items-center">
            <button
              className="max-sm:bg-red-700 max-sm:p-0 max-sm:text-4xl drop-shadow-2xl max-sm:rounded-full max-sm:p-0 max-sm:h-[5%] border-solid border-1 border-green-200 relative flex lg:w-[650%] flex-shrink items-center rounded-full py-2 pl-1  mt-5 h-[50%] lg:border-1 lg:border-green-200 lg:relative lg:flex lg:w-60 lg:flex-shrink lg:flex-grow-0 lg:items-center lg:rounded-full lg:border lg:drop-shadow-2xl lg:border-solid lg:border-2 border-red-200 lg:px-1 lg:py-1  lg:pl-2"
              type="button"
            >
              <div className="block flex-shrink flex-grow overflow-hidden">Start your search</div>
              <FontAwesomeIcon icon={faSearch} />
              <div className="relative flex h-8 w-8  items-center justify-center rounded-full"></div>
            </button>
          </div>
          <ul className="flex ml-[300%] lg:flex lg:items-center lg:ml-[160%]   ">
         
            <li className="p-4  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link>
                <FontAwesomeIcon icon={faUser} onClick={handleShow} />
              </Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to="/">
                <FontAwesomeIcon icon={faGlobe} className="fa-sharp fa-light" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" sm:w-3/12 flex justify-end ">
          <a href=""></a>
          <a href=""></a>
        </div>
        {showProfile ? (
        
        <div className="absolute bg-slate-50 ml-[230%] mt-[75%]      lg:rounded lg:bg-slate-50 lg:w-[20%] lg:py-5 lg:absolute  lg:ml-[75%] lg:mt-[21%]   ">
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

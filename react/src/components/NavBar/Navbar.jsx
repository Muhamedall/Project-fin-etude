
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setShowProfile ,setShowLogine } from '../Redux/navbarSlice';

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

  return (
    <>
      <header className="drop-shadow-md  lg:static drop-shadow-md header sticky top-0  lg:shadow-md flex items-center justify-between px-8 ">
          <div className='logo-title hidden sm:block  '>
          <a href="/">
            <img src={logo} alt="logo" className="w-20"></img>
            <h2 className="text-2xl  ">
              Student<span className="text-green-400">Nest</span>
            </h2>
          </a>
          </div>
     
        
        <nav className=" nav font-semibold text-lg  flex flex-row">
       
          <div className="sm:inline-flex max-w-full items-center">
            <button
              className=" drop-shadow-2xl border-solid border-2 border-red-200 relative flex w-[650%] flex-shrink items-center rounded-full py-2 pl-1  mt-5 h-[50%]  lg:relative lg:flex lg:w-60 lg:flex-shrink lg:flex-grow-0 lg:items-center lg:rounded-full lg:border lg:drop-shadow-2xl lg:border-solid lg:border-2 border-red-200 lg:px-1 lg:py-1  lg:pl-2"
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
              <a className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:text-green-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleShowLogine}>
                Log in
              </a>
              <br></br>
              <a className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:text-green-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" href="Login">
                Sign up
              </a>
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
        
        <div className="absolute bg-slate-50 ml-[230%] mt-[75%]      lg:rounded lg:bg-slate-50 lg:w-[20%] lg:py-5 lg:absolute  lg:ml-[15%] lg:mt-[21%]   ">
          <div className="max-w-sm rounded overflow-hidden ">
            <div className="px-6 py-4">
              <h1>Hello Logine </h1>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
     
    ) : null}
      </header>
     
    </>
  );
};

export default Navbar;

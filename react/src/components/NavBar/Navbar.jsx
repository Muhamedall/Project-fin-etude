
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setShowProfile } from '../Redux/navbarSlice';
import logo from './housetica__1_-removebg-preview.png';

const Navbar = () => {
  const showProfile = useSelector((state) => state.navbar.showProfile);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShowProfile(true));
  };

  return (
    <>
      <header className="static drop-shadow-md header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12">
          <a href="/">
            <img src={logo} alt="logo" className="w-20"></img>
            <h2 className="text-2xl">
              Student<span className="text-green-400">Nest</span>
            </h2>
          </a>
        </h1>
        <nav className="nav font-semibold text-lg  flex flex-row">
          <div className="inline-flex max-w-full items-center">
            <button
              className="relative flex w-60 flex-shrink flex-grow-0 items-center rounded-full border  px-1 py-1  pl-2"
              type="button"
            >
              <div className="block flex-shrink flex-grow overflow-hidden">Start your search</div>
              <FontAwesomeIcon icon={faSearch} />
              <div className="relative flex h-8 w-8  items-center justify-center rounded-full"></div>
            </button>
          </div>
          <ul className="flex items-center ml-[120%] ">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to="/">
                <FontAwesomeIcon icon={faGlobe} className="fa-sharp fa-light" />
              </Link>
            </li>
            <li className="p-4  border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link>
                <FontAwesomeIcon icon={faUser} onClick={handleShow} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-end">
          <a href=""></a>
          <a href=""></a>
        </div>
      </header>
      {showProfile ? (
        <section>
          <div className="p-10 ml-[70%] absolute top-10   ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <a className="inline-flex items-center justify-center p-1 text-base font-medium text-gray-900 rounded-lg bg-gray-50 hover:text-green-500 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" href="Login">
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
        </section>
      ) : null}
    </>
  );
};

export default Navbar;

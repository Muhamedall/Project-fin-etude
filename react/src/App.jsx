
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HommePage from './components/Homme';

import Navbar from './components/NavBar/Navbar';
import Nopages from './components/NoPages';
import Login from './components/Forms/Login';
import Singup from "./components/Forms/Singup";
import Studente from './components/Student';
import ProtectedLayout from './components/ProtectedLayout';
import MenuOfuser from "./components/MenuOfuser";

const App=()=>{
   return(
    <>


<BrowserRouter>
        <Navbar/>
          <Routes>

            <Route path="/" element={<HommePage />}/>
              <Route index element={<HommePage/>} />
              <Route path="Login" element={<Login/>} />
              <Route path="ProtectedLayout" element={<ProtectedLayout/>} />
              <Route path="MenuOfuser" element={<MenuOfuser/>} />
              <Route path="Singup" element={<Singup/>}/>
              <Route path="Student" element={<Studente/>}/>
              
           
              <Route path="*" element={<Nopages />} />
          
          </Routes>
        </BrowserRouter>


    </>
   )
}
export default App;
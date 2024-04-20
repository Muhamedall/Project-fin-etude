
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HommePage from './components/Homme';

import Navbar from './components/NavBar/Navbar';
import Nopages from './components/NoPages';
import Login from './components/Forms/Login';
import Singup from "./components/Forms/Singup";
import Studente from './components/Student';

const App=()=>{
   return(
    <>


<BrowserRouter>
        <Navbar/>
          <Routes>

            <Route path="/" element={<HommePage />}/>
              <Route index element={<HommePage/>} />
              <Route path="Login" element={<Login/>} />
              <Route path="Singup" element={<Singup/>}/>
              <Route path="Student" element={<Studente/>}/>
              
           
              <Route path="*" element={<Nopages />} />
          
          </Routes>
        </BrowserRouter>


    </>
   )
}
export default App;
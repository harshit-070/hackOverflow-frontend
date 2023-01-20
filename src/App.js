import {Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

//Components
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Template from './Components/Templates/Template';
import Templates from './Components/Templates/Templates';

function App() {
  return (
    <Box>
      <BrowserRouter>
      <Navbar/>
      <Box style={{marginTop:'70px'}}>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/templates' element={<Templates/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;

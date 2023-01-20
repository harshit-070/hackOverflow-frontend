import {Box} from '@mui/material'

//Components
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Template from './Components/Templates/Template';
import Templates from './Components/Templates/Templates';

function App() {
  return (
    <Box>
      {/* <Login/>
      <SignUp/> */}
      {/* <Box style={{display:'flex',justifyContent:'center'}}>
      <Templates/>
      </Box> */}
      <Navbar/>
      <Box style={{marginTop:'70px'}}>
        {/* <Login/> */}
      <Template/>
      </Box>
      
    </Box>
  );
}

export default App;

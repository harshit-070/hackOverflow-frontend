import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import Template from "./Components/Templates/Template";
import Templates from "./Components/Templates/Templates";

function App() {
  return (
    <div>
      <ToastContainer />
      <Box>
        {/* <Login/> */}
        {/* <Box style={{display:'flex',justifyContent:'center'}}>
      <Templates/>
      </Box> */}
        <Navbar />
        <Box style={{ marginTop: "70px" }}>
          {/* <Login/> */}
          <SignUp />

          {/* <Template/> */}
        </Box>
      </Box>
    </div>
  );
}

export default App;

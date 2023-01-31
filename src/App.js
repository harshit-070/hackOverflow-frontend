import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

//Components
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import Templates from "./Components/Templates/Templates";
import Footer from "./Footer/Footer";
import GoogleAuth from "./Components/SignUp/GoogleAuth";
import GithubAuth from "./Components/SignUp/GithubAuth";
import EditResume from "./Components/Templates/Template";
import ViewResume from "./Components/Templates/View";
import ResumeScorer from "./Components/ResumeScorer/ResumeScorer";
import PrivateComponent from "./Components/PrivateComponent";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import PageNotFound from "./Components/PageNotFound";
import FetchUserResume from "./Components/Templates/FetchUserResume";
import LoadingScreen from "./Components/LoadingPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Box style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/scorer" element={<ResumeScorer />} />
            <Route
              path="/:username/:resume_name"
              element={<FetchUserResume />}
            />
            <Route path="/home" element={<Landing />} />
            <Route element={<PrivateComponent />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/edit/resume/:resume_id" element={<EditResume />} />
            </Route>
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="" element={<SignUp />} />
            <Route path="" element={<Login />} />
            <Route path="/google/auth" element={<GoogleAuth />} />
            <Route path="/github/auth" element={<GithubAuth />} />

            <Route path="/edit/resume/:resume_id" element={<EditResume />} />
            <Route
              path="/view/resume/:resume_id/:template"
              element={<ViewResume />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;

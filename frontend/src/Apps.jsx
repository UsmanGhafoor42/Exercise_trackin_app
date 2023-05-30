import { useState } from "react";
import NotFound from "./components/NotFound";
import Addactivity from "./components/Addactivity";
import Exercise from "./components/Exercise";
import Logout from "./components/Logout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup"; //usman
import Signin from "./pages/Signin"; //usman
import Dashboard from "./components/dashboard";

function Apps() {
  // const [first, setfirst] = useState("");
  // const location = useLocation();
  // setfirst(location.pathname);
  // const rout = location.pathname;
  // console.log(rout);
  let token = localStorage.getItem("accessToken")
  console.log(token)
  return (
    
  
    <Router>
    {token==null?
    <>
          
        <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        
        </ Routes>
    
    
    </>
    :
    <Routes>
            
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addactivity" element={<Addactivity />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
    </Routes>

    }

    </Router>
  )
}

export default Apps;

// import './App.css'
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Sign_Up from './pages/SignUp/Sign_Up';
// import NotFound from './pages/NotFound/NotFound';
// import Navigation from './components/Navigation';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Sidebar from './components/Sidebar';
// import Addactivity from './components/AddActivity';

// const App = () => {
//   let token = localStorage.getItem("Token")
//   console.log(token)
//   return (
      

//     <Router>
//     {/* <Sidebar> */}
//     {
//     token==null?
//     <>
//       <Navigation />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/signup" element={<Sign_Up />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     </>
//     :
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/addActivity" element={<Addactivity />} />
      
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//     }
//     {/* </Sidebar> */}
//     </Router>




//   )
// }


// export default App;
import React from "react";
import BusHireFooter from "./Components/Bus hire Main Page/Bus Hire Footer Section/BusHireFooter";
import SubFooter from "./Components/Bus hire Main Page/Sub Footer Section/SubFooter";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Routes/Routes";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="875288647843-hr8kb6mvovsces2plue2gtlb4ojecrg0.apps.googleusercontent.com">
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes />
      <SubFooter />
      <BusHireFooter />
    </div>
    </GoogleOAuthProvider>
  );
};

export default App;

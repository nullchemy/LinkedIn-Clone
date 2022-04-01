import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Feed from "./routes/Feed";
import Home from "./routes/Home";
import Jobs from "./routes/Jobs";
import Messaging from "./routes/Messaging";
import Network from "./routes/Network";
import Notifications from "./routes/Notifications";
import Profile from "./routes/Profile";
import NotFound from "./routes/Notfound";
import Register from "./routes/Register";

function App() {
  const [curPath, setCurPath] = useState(true);
  //page pre loader
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".Pagecontents").style.visibility = "hidden";
      document.querySelector(".ppreloader").style.display = "unset";
    } else {
      document.querySelector(".ppreloader").style.display = "none";
      document.querySelector(".Pagecontents").style.visibility = "visible";
      document.querySelector(".Pagecontents").style.display = "unset";
    }
  };
  //home remove navbar
  const loc = useLocation();
  useEffect(() => {
    const rendernav = () => {
      if (
        loc.pathname === "/home" ||
        loc.pathname === "/login" ||
        loc.pathname === "/register"
      ) {
        setCurPath(false);
      }
    };
    rendernav();
  }, [loc]);
  return (
    <div className="App">
      <div className="ppreloader">
        <Preloader />
      </div>
      <div className="Pagecontents">
        {curPath && <Navbar />}
        <div className="container">
          <Routes>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/" element={<Navigate to="/feed" />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/messaging" element={<Messaging />}></Route>
            <Route path="/network" element={<Network />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

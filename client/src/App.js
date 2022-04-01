import React from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Feed";
import Jobs from "./routes/Jobs";
import Messaging from "./routes/Messaging";
import Network from "./routes/Network";
import Notifications from "./routes/Notifications";
import Profile from "./routes/Profile";
import NotFound from "./routes/Notfound";
import Register from "./routes/Register";

function App() {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".Pagecontents").style.visibility = "hidden";
      document.querySelector(".ppreloader").style.display = "unset";
    } else {
      setTimeout(() => {
        document.querySelector(".ppreloader").style.display = "none";
        document.querySelector(".Pagecontents").style.visibility = "visible";
        document.querySelector(".Pagecontents").style.display = "unset";
      }, 4000);
    }
  };
  return (
    <div className="App">
      <div className="ppreloader">
        <Preloader />
      </div>
      <div className="Pagecontents">
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/signup" element={<Register />}></Route>

              <Route path="/feed" element={<Home />}></Route>
              <Route path="/" element={<Navigate to="/feed" />}></Route>
              <Route path="/jobs" element={<Jobs />}></Route>
              <Route path="/messaging" element={<Messaging />}></Route>
              <Route path="/network" element={<Network />}></Route>
              <Route path="/notifications" element={<Notifications />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

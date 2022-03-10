import React from "react";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
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
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Feed from './routes/Feed'
import Home from './routes/Home'
import Jobs from './routes/Jobs'
import Messaging from './routes/Messaging'
import Network from './routes/Network'
import Notifications from './routes/Notifications'
import Profile from './routes/Profile'
import NotFound from './routes/Notfound'
import Register from './routes/Register'
import Login from './routes/Login'
import Modal from './components/Modal'
import BreadCrumb from './components/BreadCrumb'

function App() {
  const [curPath, setCurPath] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showBreadCrumb, setShowBreadCrumb] = useState(false)
  //home remove navbar
  const loc = useLocation()
  useEffect(() => {
    const rendernav = () => {
      if (
        loc.pathname === '/home' ||
        loc.pathname === '/login' ||
        loc.pathname === '/register'
      ) {
        setCurPath(false)
      }
    }
    rendernav()
  }, [loc])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
      setShowBreadCrumb(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }
  const closeBreadCrumb = () => {
    setShowBreadCrumb(false)
  }
  return (
    <div className="App">
      <div
        className="Pagecontents"
        style={{ visibility: 'visible', display: 'unset' }}
      >
        {curPath && <Navbar />}
        <BreadCrumb show={showBreadCrumb} onClose={closeBreadCrumb} />

        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
      <Modal show={showModal} onClose={closeModal} />
    </div>
  )
}

export default App

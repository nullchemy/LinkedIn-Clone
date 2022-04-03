import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/css/globals.css'
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


createRoot(document.getElementById('root')).render(<Router><App tab="home" /></Router>);

serviceWorkerRegistration.unregister();
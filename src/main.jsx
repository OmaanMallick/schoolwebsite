import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import Navbar from './components/custom/Navbar'
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Navbar/>
    <App />
   
  </React.StrictMode>
);



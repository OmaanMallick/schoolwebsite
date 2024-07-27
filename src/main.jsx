import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';

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
  element: <AboutUs/>
 },
 {
  path: '/Academics',
  element: <Academics/>
 },
 {
  path: '/Admissions',
  element: <Admissions/>
 },
 {
  path: '/Faculty',
  element: <Faculty/>
 },
 {
  path: '/Students',
  element: <Students/>
 },
 {
  path: '/Gallery',
  element: <Gallery/>
 },
 {
path: '/ContactUs',
element: <ContactUs/>
 }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);



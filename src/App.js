import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react'
import Navbar from './pages/NavbarComponent/Navbar';
import ErrorPage from './pages/Error';
import SharedLayout from './component/SharedLayout';
import Loading from './pages/Loading';
import Dashboard from './pages/DashboardCompnent/Dashboard';
import SharedLayout2 from './component/SharedLayout2';
import ScrollToTop from './pages/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoute from './AnimatedRoute';
const Hero = React.lazy(()=>import("./pages/Hero"))
const Waitlist = React.lazy(()=>import("./pages/WaitlistComponent/Waitlist"))
const Report = React.lazy(()=>import("./pages/DashboardCompnent/Report/Report"))
const Admin = React.lazy(()=>import("./pages/DashboardCompnent/Admin/Admin"))
const Login = React.lazy(()=>import("./pages/Login/Login"))


function App() {

  const [openNav, setOpenNav] = React.useState(true)
  const [modal, setModal] = React.useState(false)


  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <AnimatedRoute />
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;

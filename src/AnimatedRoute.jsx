import { BrowserRouter, Route, Routes, useLocation, } from 'react-router-dom';
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
const Hero = React.lazy(()=>import("./pages/Hero"))
const Waitlist = React.lazy(()=>import("./pages/WaitlistComponent/Waitlist"))
const Report = React.lazy(()=>import("./pages/DashboardCompnent/Report/Report"))
const Admin = React.lazy(()=>import("./pages/DashboardCompnent/Admin/Admin"))
const Login = React.lazy(()=>import("./pages/Login/Login"))


const AnimatedRoute = () => {

    const [openNav, setOpenNav] = React.useState(true)
    const [modal, setModal] = React.useState(false)

    const location = useLocation()
  return (
    <div>
        <AnimatePresence>
                
            <Routes location={location} key={location.pathname}>


                <Route 
                path='/' 
                element={
                    <SharedLayout 
                    openNav = {openNav} 
                    setOpenNav={setOpenNav} 
                    modal = {modal}
                    setModal = {setModal}
                    />
                }
                >
                    <Route index element={
                    <Suspense fallback={<Loading />}>
                        <Hero  
                        openNav = {openNav} 
                        setOpenNav={setOpenNav}
                        modal = {modal}
                        setModal = {setModal}
                        />
                    </Suspense>
                    }/>

                    <Route path='waitlist' element={
                    <Suspense fallback={<Loading />}>
                        <Waitlist 
                        openNav = {openNav} 
                        setOpenNav={setOpenNav} 
                        modal={modal}
                        setModal={setModal}
                        />
                    </Suspense>
                    }/>

                    <Route path='login' element={
                    <Suspense fallback={<Loading />}>
                        <Login  />
                    </Suspense>
                    }/>


                    <Route path='*' element={<ErrorPage />}/>
                </Route>


                {/* ROUTE FOR THE DASHBOARD STARTS HERE */}

                <Route
                path='/dashboard' 
                element={<SharedLayout2 />}
                >
                <Route 
                    index 
                    element={
                    <Suspense 
                    fallback={<Loading />
                    }
                >
                    <Admin  />
                    </Suspense>} 
                />

                <Route path='report' element={
                    <Suspense fallback={<Loading />}>
                    <Report  />
                    </Suspense>} 
                />
                
                </Route>

                {/* ROUTE FOR THE DASHBOARD ENDS HERE */}
                

                
            </Routes>
        
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoute
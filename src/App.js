import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react'
import Navbar from './pages/NavbarComponent/Navbar';
import ErrorPage from './pages/Error';
import SharedLayout from './component/SharedLayout';
import Loading from './pages/Loading';
const Hero = React.lazy(()=>import("./pages/Hero"))
const Waitlist = React.lazy(()=>import("./pages/WaitlistComponent/Waitlist"))

function App() {

  const [openNav, setOpenNav] = React.useState(true)


  return (
    <div>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<SharedLayout openNav = {openNav} setOpenNav={setOpenNav} />}>
                <Route index element={
                  <Suspense fallback={<Loading />}>
                    <Hero  openNav = {openNav} setOpenNav={setOpenNav}/>
                  </Suspense>
                }
                />
                <Route path='waitlist' element={
                <Suspense fallback={<Loading />}>
                  <Waitlist openNav = {openNav} setOpenNav={setOpenNav} />
                </Suspense>
                }/>
                <Route path='*' element={<ErrorPage />}/>
            </Route>
          </Routes>
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;

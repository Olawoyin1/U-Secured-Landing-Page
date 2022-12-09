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
  return (
    <div>
      <BrowserRouter>

          <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={
                  <Suspense fallback={<Loading />}>
                    <Hero />
                  </Suspense>
                }
                />
                <Route path='waitlist' element={
                <Suspense fallback={<Loading />}>
                  <Waitlist />
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

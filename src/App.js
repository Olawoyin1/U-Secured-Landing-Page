import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Features from './pages/Features';
import Hero from './pages/Hero';
import News from './pages/News';
import Waitlist from './pages/WaitlistComponent/Waitlist';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import ErrorPage from './pages/Error';
import SharedLayout from './component/SharedLayout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
              <Route index element={<Hero />}/>
              <Route path='about_us' element={<About />}/>
              <Route path='features' element={<Features />}/>
              <Route path='news' element={<News />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='join_waitlist' element={<Waitlist />}/>
              <Route path='*' element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

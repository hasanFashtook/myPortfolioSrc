import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Index from './Pages/Index/Index'
import Footer from './Components/Footer'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import { useEffect, useState } from 'react'
import SplashScreen from './Components/splash-screen'
 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <div className='App relative'>
      <NavBar className={' fixed z-40 top-0 left-1/2 -translate-x-1/2 w-full bg-white'} />
      <Routes>
        <Route path='/' element={<Index className={'mt-[5.25rem]'} />} />
        <Route path='/about' element={<About className={'max-md:mt-9 mt-[5.25rem]'} />} />
        <Route path='/projects' element={<Projects className={'max-md:mt-9 mt-[5.25rem]'} />} />
        <Route path='/contact' element={<Contact className={'max-md:mt-9 mt-[5.25rem]'} />} />
      </Routes>
      <Footer className={' border-t-2 border-zinc-300'} />
    </div>
  )
}

export default App

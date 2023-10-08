import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Index from './Pages/Index/Index'
import Footer from './Components/Footer'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import Loading from './Components/Loading'
import { useEffect, useState } from 'react'
// 
function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname.split('/').pop();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000)
  }, [location.pathname])

  return (
    <div className='App relative'>
      {loading &&
        <Loading className={' fixed bg-[#00000070]  backdrop-saturate-150 backdrop-blur-md top-0 z-50 left-0 w-full min-h-screen '} />
      }
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

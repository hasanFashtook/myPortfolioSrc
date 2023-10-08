import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { changeCurrentSize } from '../store/ScreenSizeSlice';

const navLinks = [
  {
    label: 'home',
    path: '/'
  },
  {
    label: 'about',
    path: '/about'
  },
  {
    label: 'projects',
    path: '/projects'
  },
  {
    label: 'contact me',
    path: '/contact'
  }
]

function NavBar({ className }) {
  const [breakPoint, setBreakPoint] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  let pathname = location.pathname.split('/').pop();

  function changeBreakPoint() {
    setBreakPoint(window.innerWidth);
    dispatch(changeCurrentSize(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener('resize', changeBreakPoint)
    return (() => {
      window.removeEventListener('resize', changeBreakPoint)
    })
  });

  const links = navLinks.map((link, i) => (
    <li
      key={i}
      className={`transition-transform duration-1000 delay-${300 + (200 * i)}
      ${breakPoint < 768 && ' h-12' + (clicked ? ' -translate-y-0' : ' -translate-y-96')}`}
    >
      <Link
        to={link.path}
        onClick={() => setClicked(false)}
        className={`text-lg max-md:text-2xl capitalize hover:text-[#7D11F9] transition 
        ${link.path == `/${pathname}` ? ` text-[#7D11F9]` : ` text-[#3F3A64]`}
        `}
      >
        {link.label}
      </Link>
    </li>
  ))
  return (
    <div className={'NavBar  ' + className} >
      <div className="relative shadow-sm p-4 h-[84px]">

        <div className="container-b h-full mx-auto flex items-center justify-between">
          {/* logo */}
          <div className="logo flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
              <path d="M10.8584 27.0235L9.90976 27.9722C9.78327 28.0987 9.63781 28.1619 9.47337 28.1619C9.30894 28.1619 9.16348 28.0987 9.03699 27.9722L0.195469 19.1307C0.0689814 19.0042 0.0057373 18.8587 0.0057373 18.6943C0.0057373 18.5299 0.0689814 18.3844 0.195469 18.2579L9.03699 9.41638C9.16348 9.2899 9.30894 9.22665 9.47337 9.22665C9.63781 9.22665 9.78327 9.2899 9.90976 9.41638L10.8584 10.365C10.9849 10.4915 11.0481 10.637 11.0481 10.8014C11.0481 10.9659 10.9849 11.1113 10.8584 11.2378L3.40194 18.6943L10.8584 26.1508C10.9849 26.2772 11.0481 26.4227 11.0481 26.5871C11.0481 26.7516 10.9849 26.897 10.8584 27.0235ZM22.0716 6.77911L14.9946 31.2735C14.944 31.438 14.846 31.5613 14.7005 31.6435C14.555 31.7257 14.4064 31.7415 14.2546 31.6909L13.0783 31.3684C12.9138 31.3178 12.7905 31.2198 12.7083 31.0743C12.6261 30.9288 12.6103 30.7739 12.6609 30.6095L19.7379 6.11504C19.7885 5.95061 19.8865 5.82728 20.032 5.74507C20.1774 5.66285 20.326 5.64704 20.4778 5.69763L21.6542 6.02018C21.8186 6.07077 21.9419 6.1688 22.0242 6.31426C22.1064 6.45972 22.1222 6.61467 22.0716 6.77911ZM34.537 19.1307L25.6955 27.9722C25.569 28.0987 25.4235 28.1619 25.2591 28.1619C25.0947 28.1619 24.9492 28.0987 24.8227 27.9722L23.874 27.0235C23.7476 26.897 23.6843 26.7516 23.6843 26.5871C23.6843 26.4227 23.7476 26.2772 23.874 26.1508L31.3305 18.6943L23.874 11.2378C23.7476 11.1113 23.6843 10.9659 23.6843 10.8014C23.6843 10.637 23.7476 10.4915 23.874 10.365L24.8227 9.41638C24.9492 9.2899 25.0947 9.22665 25.2591 9.22665C25.4235 9.22665 25.569 9.2899 25.6955 9.41638L34.537 18.2579C34.6635 18.3844 34.7267 18.5299 34.7267 18.6943C34.7267 18.8587 34.6635 19.0042 34.537 19.1307Z" fill="#7D11F9" />
            </svg>
            <div className=' capitalize font-extrabold text-xl'>hasan fashtouk</div>
          </div>
          {/* links */}
          <div className={`Links ${breakPoint < 768 && 'mobile-menu'} ${clicked && 'active'}`}>
            <ul className='flex gap-5 p-3'>
              {links}
            </ul>
          </div>
          {/* toggle menu */}
          {clicked ?
            <XMarkIcon onClick={() => setClicked(prev => !prev)} className='w-10 h-10 hidden max-md:block z-50 text-[#7d11f9] cursor-pointer' />
            :
            <Bars2Icon onClick={() => setClicked(prev => !prev)} className='w-10 h-10 hidden max-md:block text-[#7d11f9] cursor-pointer' />
          }
        </div>
      </div>
    </div >
  )
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar

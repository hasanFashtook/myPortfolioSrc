import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'


function IntroSection({ className }) {
  const loaction = useLocation();
  let label = loaction.pathname.split('/').pop();

  return (
    <header className={'IntroSection bg-[#936be80d] mt-[84px] ' + className} >
      <div className="container-b flex flex-col justify-center items-center gap-4 h-56">
        <h1 className=' text-6xl text-[rgb(63,58,100)] capitalize font-normal'>
          {label}
        </h1>
        <div className="flex items-center gap-1">
          <Link className=' text-xl capitalize text-[#7D11F9]' to={'/'}>home</Link>
          <ChevronRightIcon className='w-4 h-4' />
          <p className='  text-xl text-[#3F3A64] capitalize'>{label}</p>
        </div>
      </div>
    </header>
  )
}

IntroSection.propTypes = {
  className: PropTypes.string,
}

export default IntroSection

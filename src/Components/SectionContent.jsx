import PropTypes from 'prop-types'
import Button from './Button'
import FacebookIcon from './Icons/FacebookIcon'
import LinkedInIcon from './Icons/LinkedInIcon'
import InstagramIcon from './Icons/Instagram'
import { Link } from 'react-router-dom'


function SectionContent({ className, isShowing, span, h1, p, button, href, file, gridInfo, socialMedia }) {

  const showInfo = gridInfo && Object.entries(gridInfo).map((item, i) => (
    <div key={i}>
      <span
        className=' capitalize text-[rgb(63,58,100)] font-semibold text-xl'
      >
        {item[0]}
      </span>: <span
        className=' text-[#696969] font-normal text-lg capitalize'
      >{item[1]}</span>
    </div>
  ))

  return (
    <div className={'Details flex flex-col ' + className} >

      <span className={` tracking-widest block transition-all duration-1000 text-lg max-sm:text-base text-slate-400 uppercase font-semibold
        ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
        `}>
        {span}
      </span>
      <h1 className={` transition-all duration-1000 delay-200 text-[2.5rem] max-sm:text-3xl text-[rgb(63,58,100)] capitalize font-light my-2
        ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
        `}>
        {h1}
      </h1>
      {p &&
        <p className={`transition-all duration-1000 delay-300 font-normal text-lg max-sm:text-base text-[#696969] my-5
          ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
          `}>
          {p}
        </p>
      }
      {gridInfo && (
        <div className={`transition-all duration-1000 delay-500 grid grid-cols-2 max-sm:grid-cols-1 gap-3 py-5 text-left border-t-2 border-[#ddd]
        ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
        `}>
          {showInfo}
        </div>
      )}
      {button &&
        <div className={`works flex gap-20 justify-start items-center mt-0 transition-all duration-1000 delay-700
          ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
        `}>
          <Link
            to={href}
            download={file ? true : false}
            target={file ? "_blank" : href.startsWith('https') ? "_blank" : '_self'}
            className=' outline-none border-none'
          >
            <Button contained>{button}</Button>
          </Link>
          {socialMedia && (
            <div className="social-media flex items-center max-md:hidden gap-6">
              <span className=' w-20 h-[2px] bg-[#979797]'></span>
              <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/hasan-fashtouk"><LinkedInIcon w='25' h='25' color='#AAA' /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100006271217183&mibextid=ZbWKwL"> <FacebookIcon w='25' h='25' /></a>
              <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/hasan_fashtouk?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon w='25' h='25' /></a>
            </div>
          )}
        </div>
      }

    </div>
  )
}

SectionContent.propTypes = {
  className: PropTypes.string,
  isShowing: PropTypes.bool,
  socialMedia: PropTypes.bool,
  href: PropTypes.string,
  file: PropTypes.bool,
  span: PropTypes.string,
  h1: PropTypes.string,
  p: PropTypes.object,
  gridInfo: PropTypes.object,
  button: PropTypes.object
}

export default SectionContent

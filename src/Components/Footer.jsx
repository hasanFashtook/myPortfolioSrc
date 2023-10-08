import PropTypes from 'prop-types'
import LinkedInIcon from './Icons/LinkedInIcon'
import FacebookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/Instagram'

function Footer({ className }) {
  return (
    <footer className={'Footer ' + className} >
      <div className="container-b flex max-md:justify-center justify-between items-center my-12 max-md:my-4">
        <div className="rights text-xl capitalize">
          © 2023 V <span className=' font-bold text-[#696969]'>DevStack</span>. Designed by <span className=' text-[#7D11F9]'>Hasan Fashtouk</span>
        </div>
        <div className="social-media flex max-md:hidden gap-6">
          <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/hasan-fashtouk"><LinkedInIcon color='#AAA' /></a>
          <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100006271217183&mibextid=ZbWKwL"> <FacebookIcon /></a>
          <a target='_blank' rel="noopener noreferrer" href="https://instagram.com/hasan_fashtouk?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer

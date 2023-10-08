import PropTypes from 'prop-types'
import IntroSection from '../../Components/IntroSection'
import ContactSection from './ContactSection'

function Contact({ className }) {

  return (
    <div className={'Contact ' + className} >
      <IntroSection />
      <ContactSection />
    </div>
  )
}

Contact.propTypes = {
  className: PropTypes.string
}

export default Contact

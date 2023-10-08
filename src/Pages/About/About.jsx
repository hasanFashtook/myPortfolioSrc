import PropTypes from 'prop-types'
import IntroSection from '../../Components/IntroSection'
import SlefDefinition from './SlefDefinition';
import Features from './Features';
import Recognitions from './Recognitions';

function About({ className }) {

  return (
    <div className={'About ' + className} >
      <IntroSection />
      <SlefDefinition />
      <Features className={'bg-[#936be80d]'} />
      <Recognitions />
    </div>
  )
}

About.propTypes = {
  className: PropTypes.string
}

export default About

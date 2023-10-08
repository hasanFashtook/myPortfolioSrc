import PropTypes from 'prop-types'
import IntroSection from '../../Components/IntroSection'
import Gallery from './Gallery';

function Projects({ className }) {

  return (
    <div className={'Projects ' + className} >
      <IntroSection />
      <Gallery />
    </div>
  )
}

Projects.propTypes = {
  className: PropTypes.string
}

export default Projects

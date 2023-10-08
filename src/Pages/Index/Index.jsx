import PropTypes from 'prop-types'
import Header from './Header'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Services from './Services'
import Track from './Track'
import Testimonials from './Testimonials'
import Collaborating from './Collaborating'

function Index({ className }) {

  return (
    <div className={'Index ' + className} >
      <Header className={'bg-[#936be80d] py-12 text-left'} />
      <AboutMe className={' py-12'} />
      <Portfolio className={'bg-[#936be80d] py-12 text-left'} />
      <Services className={' py-12'} />
      <Track className={'bg-[#936be80d] py-12 text-left'} />
      <Testimonials className={' py-12'} />
      <Collaborating className={'bg-[#936be80d] py-12 text-left'} />
    </div>
  )
}

Index.propTypes = {
  className: PropTypes.string
}

export default Index

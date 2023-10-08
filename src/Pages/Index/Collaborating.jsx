import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import Button from '../../Components/Button';
import { useObserver } from '../../Hooks/useObserver';
import { Link } from 'react-router-dom';

function Collaborating({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Collaborating overflow-hidden  ' + className} >
      <div className="container-b my-12">
        <SectionContent
          isShowing={isShowing}
          span={"Let's Collaborate"}
          h1={"Ready to Start a Project? Hire Me."}
          className={'text-center'}
        />
        <div className={` flex justify-center gap-3 mt-6 transition-all duration-1000 delay-500
        ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}
        `}>
          <Link to={'/contact'}>
            <Button outline>get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

Collaborating.propTypes = {
  className: PropTypes.string
}

export default Collaborating

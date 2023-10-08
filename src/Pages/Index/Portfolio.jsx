import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import LinkedInIcon from '../../Components/Icons/LinkedInIcon';
import { useObserver } from '../../Hooks/useObserver';

function Portfolio({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Portfolio overflow-hidden ' + className} >
      <div className="container-b my-12">
        <SectionContent
          isShowing={isShowing}
          className={'max-lg:items-center max-lg:text-center'}
          span={'Professional Portfolio'}
          h1={<>
            Transforming Ideas into Reality
          </>}
          p={<>
            As a highly skilled front end developer, I have been passionately pursuing my career since 2022. With a strong focus on
            visual aesthetics and cutting-edge technologies, I have consistently delivered captivating designs and seamless user experiences. My portfolio
            showcases a diverse range of successful projects, demonstrating my expertise in both design and development. I invite you to explore my
            resume to gain a comprehensive understanding of my professional journey. Let&lsquo;s collaborate and bring your ideas to life!
          </>}
          button={<>
            check out <LinkedInIcon />
          </>}
          href={'https://www.linkedin.com/in/hasan-fashtouk'}
        />

      </div>
    </div>
  )
}

Portfolio.propTypes = {
  className: PropTypes.string,
  func: PropTypes.object

}

export default Portfolio

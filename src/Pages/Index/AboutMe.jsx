import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import { CloudArrowDownIcon } from '@heroicons/react/24/outline'
import { useObserver } from '../../Hooks/useObserver'



const importants = ['html', 'css', 'javaScript', 'tailwind CSS', 'react JS', ' redux', ' react query', 'git and gitHub', 'REST API']

const importantInfo = importants.map((info, i) => (
  <span key={i}
  >
    {i < importants.length - 1
      ? <span className=' capitalize text-red-400'>{info}, </span>
      : <span>and <span className=' text-red-400'>{info}</span></span>}
  </span>
))

function AboutMe({ className }) {
  const [isShowing, eleRef] = useObserver();

  console.log(typeof ('hasan fashtouk'))
  return (
    <div ref={eleRef} className={'AboutMe  overflow-hidden ' + className} >
      <div className="container-b flex gap-4 my-12">
        <div className="image max-lg:hidden w-[370px]">
          <div className='overflow-hidden rounded-3xl'>
            <img src="/images/photo_2023-07-20_06-38-24.jpg" alt="" />
          </div>
        </div>
        <SectionContent
          isShowing={isShowing}
          className={' text-left flex-1 p-4 max-lg:items-center max-lg:text-center'}
          span={'About Me'}
          h1={'hasan fashtouk'}
          p={<>
            I am a skilled Front End Developer. Proficient in {importantInfo}.
            I create visually stunning interfaces and seamless user experiences across platforms. With expertise in front-end developer, I deliver dynamic applications. I am a proactive problem solver,
            quick learner, and collaborative team player. Passionate about staying updated with the latest
            technologies and driving business success. Download my resume to know more.
          </>}
          button={
            <>
              <CloudArrowDownIcon className='w-6 h-6' />my resume
            </>}
          href={"/src/assets/files/hasan_fashtouk.pdf"}
          file={true}
        />
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  className: PropTypes.string,
  func: PropTypes.object

}

export default AboutMe

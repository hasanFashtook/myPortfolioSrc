import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent'
import { CloudArrowDownIcon } from '@heroicons/react/24/outline';
import { useObserver } from '../../Hooks/useObserver';

const selfInfo = {
  name: 'hasan fashtouk',
  age: '23',
  location: 'Aleppo,Syria',
  email: 'fashoukhasan@gmail.com'
}


function SlefDefinition({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'SlefDefinition overflow-hidden py-12 ' + className} >
      <div className="container-b flex gap-4">
        <div className="image max-lg:hidden w-[370px]">
          <div className='overflow-hidden rounded-3xl'>
            <img src="/images/photo_2023-07-20_06-38-24.jpg" alt="" />
          </div>
        </div>
        <div className="flex-1 p-4">
          <SectionContent
            isShowing={isShowing}
            span={'Welcome, I am a Front End Developer'}
            h1={'With Over 1 Years of Professional Experience'}
            p={`I deliver high-quality solutions that meet my clients' needs. With a strong technical background
                and a passion for innovation, I create efficient web applications. My expertise ensures
                exceptional user experiences and seamless functionality.`}
            gridInfo={selfInfo}
            button={
              <>
                <CloudArrowDownIcon className='w-6 h-6' />my resume
              </>}
            href={"/src/assets/files/hasan_fashtouk.pdf"}
            file={true}
            socialMedia={true}
            className={' text-left max-lg:items-center max-lg:text-center'}
          />
        </div>
      </div>
    </div>
  )
}

SlefDefinition.propTypes = {
  className: PropTypes.string
}

export default SlefDefinition

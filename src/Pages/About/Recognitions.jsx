import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent'
import GridCards from '../../Components/GridCards';
import { ArrowTrendingUpIcon, GlobeEuropeAfricaIcon, TrophyIcon } from '@heroicons/react/24/outline';
import TagBraket from '../../Components/Icons/TagBraket';
import { useObserver } from '../../Hooks/useObserver';

function Recognitions({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Recognitions overflow-hidden py-12 ' + className} >
      <div className="container-b">
        <SectionContent
          isShowing={isShowing}
          span={'Recognitions'}
          h1={'Personal Achievements'}
        />
        <GridCards isSlider={false} isShowing={isShowing} gridData={data} />
      </div>
    </div>
  )
}

const data = [
  {
    icon: <GlobeEuropeAfricaIcon className='w-10 h-10 text-[#7d11f9]' />,
    title: 'Website of the Day',
    content: `Recognized for developing an exceptional website that
    showcases exemplary design and functionality, captivating
    users and delivering a seamless online experience.`
  },
  {
    icon: <TagBraket />,
    title: 'Award-Winning Website',
    content: `Awarded for the development of an outstanding website that
    demonstrates exemplary coding practices, technical expertise,
    and innovative solutions.`
  },
  {
    icon: <TrophyIcon className='w-10 h-10 text-[#7d11f9]' />,
    title: 'Honorable Mention',
    content: `Received an honorable mention for exceptional skills and
    contributions in web development, showcasing creativity,
    dedication, and a strong work ethic.`
  },
  {
    icon: <ArrowTrendingUpIcon className='w-10 h-10 text-[#7d11f9]' />,
    title: 'Design Excellence',
    content: `Acknowledged for consistently delivering outstanding design
    solutions that meet client requirements and elevate the visual
    identity of brands.`
  },
]
Recognitions.propTypes = {
  className: PropTypes.string
}

export default Recognitions

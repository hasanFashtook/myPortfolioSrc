import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent'
import GridBox from '../../Components/GridBox';
import TagBraket from '../../Components/Icons/TagBraket';
import { ComputerDesktopIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useObserver } from '../../Hooks/useObserver';

function Features({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Features overflow-hidden py-12 ' + className} >
      <div className="container-b">
        <SectionContent
          className={' text-left max-md:text-center'}
          isShowing={isShowing}
          span={'welcome'}
          h1={'empower Your Business with Innovative Front End Development'}
          p={`I am an experienced Front End Developer based in Aleppo, Syria, dedicated to delivering exceptional software solutions. With a
          deep understanding and proficiency in multiple programming languages, I possess a versatile skill set that enables me to tackle complex
          challenges across various development domains.`}
        />
        <GridBox className={'flex max-md:flex-col max-md:items-center gap-10 my-12'} data={data} isShowing={isShowing} />
      </div>
    </div>
  )
}

const data = [
  {
    icon: <TagBraket />,
    title: 'Responsive Design',
    content: 'Crafting engaging and adaptable designs.'
  },
  {
    icon: <PencilSquareIcon className='w-10 h-10 text-[#7d11f9]' />,
    title: 'Powerful Editor',
    content: 'Creating compelling content with a robust editor.'
  },
  {
    icon: <ComputerDesktopIcon className='w-10 h-10 text-[#7d11f9]' />,
    title: 'Creative Design',
    content: 'Innovative design techniques for stunning user interfaces'
  }
]
Features.propTypes = {
  className: PropTypes.string
}

export default Features

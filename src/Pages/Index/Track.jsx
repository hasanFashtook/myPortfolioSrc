import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import TagBraket from '../../Components/Icons/TagBraket';
import SandGlassIcon from '../../Components/Icons/SandGlassIcon';
import SmileIcon from '../../Components/Icons/SmileIcon';
import GiftIcon from '../../Components/Icons/GiftIcon';
import GridBox from '../../Components/GridBox';
import { useObserver } from '../../Hooks/useObserver';

function Track({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Track overflow-hidden ' + className} >
      <div className="container-b my-12">
        <SectionContent
          isShowing={isShowing}
          span={'Impressive Track Record'}
          h1={'Demonstrating Excellence'}
          className={'text-center'}
        />
        <GridBox
          className={'grid max-md:grid-cols-1 max-lg:grid-cols-2 gap-10 grid-cols-4 max-lg:h-auto h-40 my-12 '}
          data={tracks}
          isShowing={isShowing}
        />
      </div>
    </div>
  )
}
const tracks = [
  {
    icon: <TagBraket />,
    title: 'Completed Projects'
  },
  {
    icon: <SandGlassIcon />,
    title: 'Project In Progress'
  },
  {
    icon: <GiftIcon />,
    title: 'Awards Received'
  },
  {
    icon: <SmileIcon />,
    title: 'Satisfied Clients'
  }
];

Track.propTypes = {
  className: PropTypes.string
}

export default Track

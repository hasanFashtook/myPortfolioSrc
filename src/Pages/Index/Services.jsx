import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import GridCards from '../../Components/GridCards';
import { useObserver } from '../../Hooks/useObserver';

function Services({ className }) {
  const [isShowing, eleRef] = useObserver();

  return (
    <div ref={eleRef} className={'Services overflow-hidden' + className} >
      <div className="container-b">
        <SectionContent
          isShowing={isShowing}
          span={'Services'}
          h1={'Turning Concepts into Tangible Solutions'}
          className={'text-center'}
        />
        <GridCards gridData={services} isSlider={true} isShowing={isShowing} />
      </div>

    </div>
  )
}

const services = [
  {
    title: 'UI/UX Design',
    content: `Harnessing the power of user-centric
    design, I create visually striking and
    intuitive solutions that captivate
    audiences.`,
    path: '/',
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="2" viewBox="0 0 43 2" fill="none">
        <g clipPath="url(#clip0_1_1339)">
          <path d="M21.5038 0.690778L24.2501 0.626046L20.6515 0.541225L17.9051 0.605957V0.637207H20.178V0.690778H21.5038ZM31.8973 0.307408C32.1656 0.301084 32.1735 0.294945 31.921 0.288993C31.6684 0.28304 31.408 0.283226 31.1397 0.289551L22.8533 0.484863C22.585 0.491188 22.5771 0.497326 22.8296 0.503278C23.0821 0.509231 23.3426 0.509045 23.6109 0.50272L31.8973 0.307408ZM33.815 0.620466V0.726493C33.815 0.770764 33.1482 0.808617 31.8144 0.840053C30.4807 0.871489 28.8747 0.887207 26.9965 0.887207H7.29851C5.42026 0.887207 3.81427 0.871489 2.48056 0.840053C1.14684 0.808617 0.47998 0.770764 0.47998 0.726493V0.262207C0.47998 0.217936 1.14684 0.180083 2.48056 0.148647C3.81427 0.117211 5.42026 0.101493 7.29851 0.101493H26.9965C27.9909 0.101493 28.9142 0.106143 29.7665 0.115444C30.0033 0.118048 30.1453 0.122326 30.1927 0.128278C30.24 0.134603 30.169 0.139997 29.9796 0.144462L28.8195 0.171805C28.5985 0.177014 28.346 0.178502 28.0619 0.17627C27.6989 0.174037 27.3437 0.172921 26.9965 0.172921H7.29851C6.25679 0.172921 5.36501 0.181664 4.62318 0.199149C3.88135 0.216634 3.51044 0.237653 3.51044 0.262207V0.726493C3.51044 0.751046 3.88135 0.772066 4.62318 0.789551C5.36501 0.807036 6.25679 0.815778 7.29851 0.815778H26.9965C28.0382 0.815778 28.93 0.807036 29.6718 0.789551C30.4136 0.772066 30.7846 0.751046 30.7846 0.726493V0.65618C30.7846 0.651344 30.8556 0.647252 30.9976 0.643903L32.5129 0.608189C32.7496 0.602609 33.0258 0.601307 33.3415 0.604283C33.6572 0.607259 33.815 0.612653 33.815 0.620466ZM31.5422 0.208636L38.3607 0.36935L22.4508 0.74435H15.6323V0.583636L31.5422 0.208636ZM42.0541 0.282296L39.8759 0.333636L33.0574 0.172921L35.2355 0.121582C35.6775 0.111165 36.2141 0.105957 36.8455 0.105957C37.4768 0.105957 38.0135 0.111165 38.4554 0.121582L42.0541 0.206403C42.496 0.21682 42.717 0.229469 42.717 0.24435C42.717 0.259231 42.496 0.27188 42.0541 0.282296Z" fill="#7D11F9" />
        </g>
        <defs>
          <clipPath id="clip0_1_1339">
            <rect width="42.4264" height="1" fill="white" transform="matrix(1 0 0 -1 0.47998 1.03003)" />
          </clipPath>
        </defs>
      </svg>
  },
  {
    title: 'Web Development',
    content: `Translating designs into dynamic and
    interactive websites, I ensure seamless
    functionality and exceptional user
    experience.`,
    path: '/',
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="2" viewBox="0 0 43 2" fill="none">
        <g clipPath="url(#clip0_1_1339)">
          <path d="M21.5038 0.690778L24.2501 0.626046L20.6515 0.541225L17.9051 0.605957V0.637207H20.178V0.690778H21.5038ZM31.8973 0.307408C32.1656 0.301084 32.1735 0.294945 31.921 0.288993C31.6684 0.28304 31.408 0.283226 31.1397 0.289551L22.8533 0.484863C22.585 0.491188 22.5771 0.497326 22.8296 0.503278C23.0821 0.509231 23.3426 0.509045 23.6109 0.50272L31.8973 0.307408ZM33.815 0.620466V0.726493C33.815 0.770764 33.1482 0.808617 31.8144 0.840053C30.4807 0.871489 28.8747 0.887207 26.9965 0.887207H7.29851C5.42026 0.887207 3.81427 0.871489 2.48056 0.840053C1.14684 0.808617 0.47998 0.770764 0.47998 0.726493V0.262207C0.47998 0.217936 1.14684 0.180083 2.48056 0.148647C3.81427 0.117211 5.42026 0.101493 7.29851 0.101493H26.9965C27.9909 0.101493 28.9142 0.106143 29.7665 0.115444C30.0033 0.118048 30.1453 0.122326 30.1927 0.128278C30.24 0.134603 30.169 0.139997 29.9796 0.144462L28.8195 0.171805C28.5985 0.177014 28.346 0.178502 28.0619 0.17627C27.6989 0.174037 27.3437 0.172921 26.9965 0.172921H7.29851C6.25679 0.172921 5.36501 0.181664 4.62318 0.199149C3.88135 0.216634 3.51044 0.237653 3.51044 0.262207V0.726493C3.51044 0.751046 3.88135 0.772066 4.62318 0.789551C5.36501 0.807036 6.25679 0.815778 7.29851 0.815778H26.9965C28.0382 0.815778 28.93 0.807036 29.6718 0.789551C30.4136 0.772066 30.7846 0.751046 30.7846 0.726493V0.65618C30.7846 0.651344 30.8556 0.647252 30.9976 0.643903L32.5129 0.608189C32.7496 0.602609 33.0258 0.601307 33.3415 0.604283C33.6572 0.607259 33.815 0.612653 33.815 0.620466ZM31.5422 0.208636L38.3607 0.36935L22.4508 0.74435H15.6323V0.583636L31.5422 0.208636ZM42.0541 0.282296L39.8759 0.333636L33.0574 0.172921L35.2355 0.121582C35.6775 0.111165 36.2141 0.105957 36.8455 0.105957C37.4768 0.105957 38.0135 0.111165 38.4554 0.121582L42.0541 0.206403C42.496 0.21682 42.717 0.229469 42.717 0.24435C42.717 0.259231 42.496 0.27188 42.0541 0.282296Z" fill="#7D11F9" />
        </g>
        <defs>
          <clipPath id="clip0_1_1339">
            <rect width="42.4264" height="1" fill="white" transform="matrix(1 0 0 -1 0.47998 1.03003)" />
          </clipPath>
        </defs>
      </svg>
  },
  {
    title: 'Research & Analysis',
    content: `Uncovering valuable insights through
    meticulous research and analysis, I
    empower organizations to optimize
    strategies and enhance performance.`,
    path: '/',
    icon:
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="2" viewBox="0 0 43 2" fill="none">
        <g clipPath="url(#clip0_1_1339)">
          <path d="M21.5038 0.690778L24.2501 0.626046L20.6515 0.541225L17.9051 0.605957V0.637207H20.178V0.690778H21.5038ZM31.8973 0.307408C32.1656 0.301084 32.1735 0.294945 31.921 0.288993C31.6684 0.28304 31.408 0.283226 31.1397 0.289551L22.8533 0.484863C22.585 0.491188 22.5771 0.497326 22.8296 0.503278C23.0821 0.509231 23.3426 0.509045 23.6109 0.50272L31.8973 0.307408ZM33.815 0.620466V0.726493C33.815 0.770764 33.1482 0.808617 31.8144 0.840053C30.4807 0.871489 28.8747 0.887207 26.9965 0.887207H7.29851C5.42026 0.887207 3.81427 0.871489 2.48056 0.840053C1.14684 0.808617 0.47998 0.770764 0.47998 0.726493V0.262207C0.47998 0.217936 1.14684 0.180083 2.48056 0.148647C3.81427 0.117211 5.42026 0.101493 7.29851 0.101493H26.9965C27.9909 0.101493 28.9142 0.106143 29.7665 0.115444C30.0033 0.118048 30.1453 0.122326 30.1927 0.128278C30.24 0.134603 30.169 0.139997 29.9796 0.144462L28.8195 0.171805C28.5985 0.177014 28.346 0.178502 28.0619 0.17627C27.6989 0.174037 27.3437 0.172921 26.9965 0.172921H7.29851C6.25679 0.172921 5.36501 0.181664 4.62318 0.199149C3.88135 0.216634 3.51044 0.237653 3.51044 0.262207V0.726493C3.51044 0.751046 3.88135 0.772066 4.62318 0.789551C5.36501 0.807036 6.25679 0.815778 7.29851 0.815778H26.9965C28.0382 0.815778 28.93 0.807036 29.6718 0.789551C30.4136 0.772066 30.7846 0.751046 30.7846 0.726493V0.65618C30.7846 0.651344 30.8556 0.647252 30.9976 0.643903L32.5129 0.608189C32.7496 0.602609 33.0258 0.601307 33.3415 0.604283C33.6572 0.607259 33.815 0.612653 33.815 0.620466ZM31.5422 0.208636L38.3607 0.36935L22.4508 0.74435H15.6323V0.583636L31.5422 0.208636ZM42.0541 0.282296L39.8759 0.333636L33.0574 0.172921L35.2355 0.121582C35.6775 0.111165 36.2141 0.105957 36.8455 0.105957C37.4768 0.105957 38.0135 0.111165 38.4554 0.121582L42.0541 0.206403C42.496 0.21682 42.717 0.229469 42.717 0.24435C42.717 0.259231 42.496 0.27188 42.0541 0.282296Z" fill="#7D11F9" />
        </g>
        <defs>
          <clipPath id="clip0_1_1339">
            <rect width="42.4264" height="1" fill="white" transform="matrix(1 0 0 -1 0.47998 1.03003)" />
          </clipPath>
        </defs>
      </svg>
  }
]

Services.propTypes = {
  className: PropTypes.string,
  curr: PropTypes.object,
  func: PropTypes.object
}

export default Services

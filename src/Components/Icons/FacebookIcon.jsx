import PropTypes from 'prop-types'

function FacebookIcon({ className, w = '17', h = '18', color = '#AAA' }) {
  return (
    <div className={'FacebookIcon ' + className} >
      <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 17 18" fill="none">
        <g clipPath="url(#clip0_1_1454)">
          <path d="M15.2205 1.28578C15.4549 1.28578 15.6558 1.36949 15.8232 1.5369C15.9906 1.70431 16.0743 1.9052 16.0743 2.13958V15.8606C16.0743 16.0949 15.9906 16.2958 15.8232 16.4632C15.6558 16.6307 15.4549 16.7144 15.2205 16.7144H11.2931V10.7378H13.292L13.5933 8.40744H11.2931V6.92083C11.2931 6.54583 11.3718 6.26458 11.5291 6.07708C11.6865 5.88958 11.9929 5.79583 12.4482 5.79583L13.6737 5.78578V3.70654C13.2518 3.64628 12.6558 3.61614 11.8857 3.61614C10.975 3.61614 10.2468 3.884 9.701 4.41971C9.15524 4.95543 8.88236 5.71212 8.88236 6.6898V8.40744H6.87343V10.7378H8.88236V16.7144H1.49955C1.26517 16.7144 1.06428 16.6307 0.896868 16.4632C0.729457 16.2958 0.645752 16.0949 0.645752 15.8606V2.13958C0.645752 1.9052 0.729457 1.70431 0.896868 1.5369C1.06428 1.36949 1.26517 1.28578 1.49955 1.28578H15.2205Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_1_1454">
            <rect width="15.44" height="18" fill="white" transform="matrix(1 0 0 -1 0.640137 18)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

FacebookIcon.propTypes = {
  className: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
}

export default FacebookIcon

import PropTypes from 'prop-types'

function TagBraket({ color, w, h }) {
  return (
    <div className={'TagBraket '} >
      <svg xmlns="http://www.w3.org/2000/svg" width={w || "42"} height={h || "32"} viewBox="0 0 42 32" fill="none">
        <path d="M13.3294 25.5577L12.2133 26.6737C12.0645 26.8226 11.8934 26.897 11.6999 26.897C11.5065 26.897 11.3353 26.8226 11.1865 26.6737L0.784738 16.272C0.635928 16.1232 0.561523 15.952 0.561523 15.7586C0.561523 15.5651 0.635928 15.394 0.784738 15.2452L11.1865 4.84339C11.3353 4.69458 11.5065 4.62018 11.6999 4.62018C11.8934 4.62018 12.0645 4.69458 12.2133 4.84339L13.3294 5.95946C13.4782 6.10827 13.5526 6.2794 13.5526 6.47286C13.5526 6.66631 13.4782 6.83744 13.3294 6.98625L4.55706 15.7586L13.3294 24.5309C13.4782 24.6797 13.5526 24.8508 13.5526 25.0443C13.5526 25.2377 13.4782 25.4089 13.3294 25.5577ZM26.5213 1.74071L18.1955 30.5577C18.1359 30.7511 18.0206 30.8962 17.8495 30.9929C17.6783 31.0897 17.5035 31.1083 17.3249 31.0488L15.941 30.6693C15.7475 30.6098 15.6024 30.4944 15.5057 30.3233C15.409 30.1522 15.3904 29.9699 15.4499 29.7764L23.7758 0.959463C23.8353 0.766012 23.9507 0.620922 24.1218 0.524197C24.2929 0.427469 24.4678 0.408869 24.6463 0.468391L26.0303 0.847857C26.2237 0.907381 26.3688 1.02271 26.4655 1.19384C26.5623 1.36497 26.5809 1.54726 26.5213 1.74071ZM41.1865 16.272L30.7847 26.6737C30.6359 26.8226 30.4648 26.897 30.2713 26.897C30.0779 26.897 29.9068 26.8226 29.758 26.6737L28.6419 25.5577C28.4931 25.4089 28.4187 25.2377 28.4187 25.0443C28.4187 24.8508 28.4931 24.6797 28.6419 24.5309L37.4142 15.7586L28.6419 6.98625C28.4931 6.83744 28.4187 6.66631 28.4187 6.47286C28.4187 6.2794 28.4931 6.10827 28.6419 5.95946L29.758 4.84339C29.9068 4.69458 30.0779 4.62018 30.2713 4.62018C30.4648 4.62018 30.6359 4.69458 30.7847 4.84339L41.1865 15.2452C41.3353 15.394 41.4097 15.5651 41.4097 15.7586C41.4097 15.952 41.3353 16.1232 41.1865 16.272Z" fill={color || "#7D11F9"} />
      </svg>
    </div>
  )
}

TagBraket.propTypes = {
  color: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string
}

export default TagBraket
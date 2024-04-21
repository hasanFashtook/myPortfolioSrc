import PropTypes from 'prop-types'

function Loading({ className }) {
  return (
    <div className={'Loading ' + className} >
      {/* <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div> */}
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string
}

export default Loading

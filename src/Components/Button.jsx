import PropTypes from 'prop-types'

function Button(props) {
  return (
    <button className={props.className + ` focus:outline-none flex gap-2 justify-center items-center px-9 py-3 capitalize min-w-40 h-14 rounded-xl text-lg
    ${props.outline ? ` bg-white border border-[#7D11F9] text-[#7d11f9] `
        : props.contained && ` bg-[#7D11F9] hover:bg-[#5d10b6] transition duration-500 text-white`}
    
    `}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  props: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.object,
  outline: PropTypes.bool,
  contained: PropTypes.bool
}

export default Button

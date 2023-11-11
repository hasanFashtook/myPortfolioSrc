import PropTypes from 'prop-types'
import { useId } from 'react'

function InputFeild({ label, value, onChange, name }) {
  const id = useId();

  return (
    <>
      <div className="relative mt-6">
        <input
          type='text'
          className={`peer w-full h-14 rounded-lg border-b py-2 px-[0.625rem] focus:outline 
          focus:outline-2 focus:outline-[#7d11f9] placeholder:text-transparent 
          bg-slate-50 focus:bg-white
          ${value && ' bg-white'}`}
          placeholder={name}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`absolute left-0 ml-1 px-1 bg-inherit peer-focus:-translate-y-4
          ease-linear text-gray-500 peer-placeholder-shown:translate-y-1/2 
          peer-focus:px-1 peer-focus:bg-white peer-focus:ml-1 duration-100
          ${value && ' -translate-y-4 bg-white'}`}
        >
          {label}
        </label>
      </div>
    </>
  )
}

InputFeild.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default InputFeild

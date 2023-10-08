import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function InputFeild({ className, label, value, onChange, name }) {
  const [id, setId] = useState(0);

  useEffect(() => { setId(Math.trunc(Math.random() * (10 ** 8))) }, [])
  return (
    <button
      onClick={(e) => e.preventDefault()}
      className={'InputFeild group focus:outline-none  relative w-full h-14 p-0 border-none cursor-pointer ' + className} >
      <label
        htmlFor={`${id}`}
        className={` px-1 text-xl text-[#696969] capitalize absolute z-30  -translate-y-1/2 translate-x-8 transition-all duration-300 group-focus-within:translate-x-4 group-focus-within:top-0 group-focus-within:bg-white
        ${value ? 'translate-x-4 top-0 bg-white' : '-translate-y-1/2 top-1/2'}
        `}
      >
        {label}
      </label>
      <input
        name={name}
        type="text"
        id={`${id}`}
        value={value}
        onChange={onChange}
        className={` p-6 bg-slate-50 rounded-2xl h-16 w-full border-4 border-white transition-all duration-300 outline-[#7d11f9] group-focus-within:bg-white
        ${value ? ' bg-white border-[3px] border-[#7d11f9]' : ' bg-slate-50'}
        `}
      />
    </button>
  )
}

InputFeild.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string
}

export default InputFeild

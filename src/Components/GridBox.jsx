import PropTypes from 'prop-types'



function GridBox({ className, data, isShowing }) {


  const showData = data.map((item, i) => (
    <div key={i} className={`box flex flex-1 max-md:max-w-sm max-md:flex-col max-md:items-center max-lg:h-32 transition-all duration-1000 delay-500
    ${item.content ? ' gap-5' : 'flex-col justify-between items-center'}
    ${i < (data.length / 2)
        ? (isShowing ? ' translate-x-0 opacity-100 blur-none' : ' -translate-x-96 opacity-0 blur-sm')
        : (isShowing ? ' translate-x-0 opacity-100 blur-none' : ' translate-x-96 opacity-0 blur-sm')}
    `}>


      <div className="icon mt-2">
        {item.icon}
      </div>


      <div className={`content max-md:text-center ${item.content ? ' text-left' : ' text-center'}`}>

        <p className=' text-3xl max-sm:text-2xl text-[rgb(63,58,100)] capitalize font-medium'
        >
          {item.title}
        </p>

        {item.content && (
          <p className='font-normal text-lg text-[#696969]'>
            {item.content}
          </p>
        )}
      </div>
    </div>
  ))


  return (
    <div className={'GridBox ' + className} >
      {showData}
    </div>
  )
}

GridBox.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  isDetails: PropTypes.bool,
  isShowing: PropTypes.bool
}

export default GridBox

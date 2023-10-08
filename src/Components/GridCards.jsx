import PropTypes from 'prop-types'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'

import 'swiper/css/pagination'
import 'swiper/css'

function GridCards({ className, gridData, isShowing, isSlider }) {
  const breakPoint = useSelector(state => state.screen)
  const location = useLocation();
  let pathname = location.pathname.split('/').pop();


  const showData = gridData.map((item, i) => (
    <SwiperSlide key={i}>
      <div
        className={`transition-all duration-1000 shadow-inner delay-${100 + (i * 200)} bg-[#936be80d] rounded-xl p-7 text-left relative
          ${isShowing == true ? ` translate-y-0 opacity-100 blur-none ` : ` translate-y-96 opacity-0 blur-sm`}`}
      >
        {isSlider &&
          <span
            className=' absolute top-7 right-10 text-[#3F3A64] text-6xl max-sm:text-5xl font-medium opacity-[0.07]'
          >
            {gridData.length < 10 ? `0${i + 1}` : `${i + 1}`}
          </span>
        }
        <div className={`icon ${isSlider && 'mt-10'}`}>{item.icon}</div>
        <div className="title mt-7 text-[#3F3A64] text-2xl max-sm:text-xl font-semibold">{item.title}</div>
        <div className="content mt-4 text-[#696969] text-lg max-sm:text-base font-normal">{item.content}</div>
        {item.path &&
          <div className=' mt-5'>
            <Link to={item.path} className='text-[#3F3A64] text-base max-sm:text-sm font-semibold border-b-2 border-[#7D11F9] transition'>Read More</Link>
          </div>
        }
      </div>
    </SwiperSlide>
  ));

  const swiperElRef = useRef(null);

  return (
    <div className={'GridCards my-10 ' + className} >
      {isSlider ?
        <Swiper
          ref={swiperElRef}
          spaceBetween={'30'}
          slidesPerView={breakPoint > 1024 ? '3' : breakPoint > 768 ? '2' : '1'}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[Pagination]}
          space-between="32"
        >
          {showData}
          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        :
        <div className={`grid ${pathname == 'projects' ? 'grid-cols-3' : 'grid-cols-2'}  max-lg:grid-cols-2 max-md:grid-cols-1 gap-5`}>
          {showData}
        </div>
      }
    </div>
  )
}

GridCards.propTypes = {
  className: PropTypes.string,
  gridData: PropTypes.array,
  isShowing: PropTypes.bool,
  isSlider: PropTypes.bool
}

export default GridCards

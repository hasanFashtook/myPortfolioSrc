import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import { useEffect, useState } from 'react';
import { useObserver } from '../../Hooks/useObserver';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Testimonials({ className }) {
  const [breakPoint, setBreakPoint] = useState(window.innerWidth);
  const [isShowing, eleRef] = useObserver();


  function changeBreakPoint() {
    setBreakPoint(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeBreakPoint)
    return (() => {
      window.removeEventListener('resize', changeBreakPoint)
    })
  }, []);

  return (
    <div ref={eleRef} className={'Testimonials overflow-hidden my-12 ' + className} >
      <div className="container-b">
        <SectionContent
          span={'Testimonials'}
          h1={'what my clints think about me'}
          isShowing={isShowing}
        />
        <div className="my-12">
          <Swiper
            spaceBetween={'30'}
            slidesPerView={breakPoint > 768 ? '2' : '1'}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            modules={[Pagination]}
            space-between="32"
          >
            {/* card */}
            <SwiperSlide>
              <div className={`card transition duration-1000 delay-300 bg-[#936be80d] rounded-xl p-7 text-left
          ${isShowing ? 'translate-y-0' : 'translate-y-96'}
          `}>
                <div className="body indent-5  mt-4 text-[#696969] text-xl max-sm:text-lg font-normal">
                  His professionalism and expertise are unparalleled.
                  He consistently delivers exceptional results and exceeds
                  expectations. Highly recommended!
                </div>
                <div className="header flex items-center gap-4 mt-5">
                  <div className="image w-20 h-20 rounded-full overflow-hidden">
                    <img src="/images/photo_2023-04-29_20-11-21.jpg" alt="" />
                  </div>
                  <div className="details">
                    <p className='text-[#3F3A64] text-xl capitalize font-semibold'>hasan fashtouk</p>
                    <span className=' text-[#777] text-base font-normal capitalize'>aleppo, syria</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* card */}
            <SwiperSlide>
              <div className={`card transition duration-1000 delay-500 bg-[#936be80d] rounded-xl p-7 text-left
            ${isShowing ? 'translate-y-0' : 'translate-y-96'}
          `}>
                <div className="body indent-5 mt-4 text-[#696969] text-xl max-sm:text-lg font-normal">
                  Working with him has been an absolute pleasure. He
                  has exceptional problem-solving skills and consistently
                  delivers top-notch solutions. Highly recommended!
                </div>
                <div className="header flex items-center gap-4 mt-5">
                  <div className="image w-20 h-20 rounded-full overflow-hidden">
                    <img src="/images/photo_2023-04-29_20-11-21.jpg" alt="" />
                  </div>
                  <div className="details">
                    <p className='text-[#3F3A64] text-xl capitalize font-semibold'>hasan fashtouk</p>
                    <span className=' text-[#908f91] capitalize'>aleppo, syria</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div >
  )
}

Testimonials.propTypes = {
  className: PropTypes.string
}

export default Testimonials

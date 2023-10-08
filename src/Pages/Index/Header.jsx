import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent';
import { useObserver } from '../../Hooks/useObserver'

function Header({ className }) {
  const [isShowing, eleRef] = useObserver();

  console.log(typeof (
    <>
      i&apos;m <span>hasan fashtouk</span> a <span>front end developer</span>
    </>
  ))
  return (
    <div ref={eleRef} className={'Header overflow-hidden min-h-[calc(100vh-84px)] ' + className} >
      <div className="container-b flex gap-4 h-full items-center">
        <SectionContent
          isShowing={isShowing}
          className={'flex-1 max-lg:items-center max-lg:text-center'}
          span={'Hello'}
          h1={<>
            i&apos;m <span>hasan fashtouk</span> a <span>front end developer</span>
          </>}
          p={<>
            Hi 👋, I’m Hasan Fashtouk, a frontend developer with over 1 years of experience building responsive websites and web applications. I specialize in HTML, CSS, Tailwind, JavaScript, and React JS. 🌐🎨 I’m passionate about creating user-friendly interfaces that are both visually appealing and functional. In my free time, I enjoy experimenting with new technologies and learning new skills to stay up-to-date with the latest trends in frontend development. 🚀📚 Currently studying control engineering at the University of Aleppo. 🎓
          </>}
          button={'see project'}
          href={'/projects'}
        />
        <div className="image w-1/2 max-lg:hidden ">
          <div className=' relative'>
            <img src="/images/photo.svg.png" alt="" />
            <span
              className='absolute right-[34%] bottom-[19%] bg-[#eba154] text-white font-extrabold text-3xl w-12 h-12 rounded-full grid place-items-center'
            >
              H
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

Header.propTypes = {
  className: PropTypes.string,
  func: PropTypes.object
}

export default Header
import PropTypes from 'prop-types'
import SectionContent from '../../Components/SectionContent'
import GridCards from '../../Components/GridCards';
import TagBraket from '../../Components/Icons/TagBraket';
import Button from '../../Components/Button';
import { useObserver } from '../../Hooks/useObserver';
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { Client } from "get-pinned-repos";

function Gallery({ className }) {
  Client.setToken(import.meta.env.VITE_GITHUB_TOKEN);
  const [isShowing, eleRef] = useObserver();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function getRepos() {
      try {
        setLoading(true)
        const pinned = await Client.getPinnedRepos("hasanFashtook");
        // We will only show six projects,
        // And change the object's keys to accordance with the component,
        // Using object destructring.
        const customArr = pinned.slice(0, 6).map((item) => {
          const { icon = <TagBraket />, name: title, description: content, html_url: path } = item;
          return { icon, title, content, path }
        });

        setRepos(customArr);

      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    })();
  }, [])


  return (
    <div ref={eleRef} className={'Gallery overflow-hidden py-12 ' + className} >
      {loading && <Loading className={'fixed bg-[#00000070]  backdrop-saturate-150 backdrop-blur-md top-0 z-50 left-0 w-full min-h-screen'} />}
      <div className="container-b">
        <SectionContent
          isShowing={isShowing}
          span={'Project Gallery'}
          h1={'Explore some of the projects I have worked on.'}
        />

        <GridCards isShowing={isShowing} isSlider={false} gridData={repos} />
        <a href="https://github.com/hasanFashtook">
          <Button className={' mx-auto'} outline>show more projects</Button>
        </a>
      </div>
    </div>
  )
}


Gallery.propTypes = {
  className: PropTypes.string
}

export default Gallery

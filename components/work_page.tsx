import { Container } from "../components/container";
import { useEffect, useState } from "react";
import { getPlaylist } from "../libs/playlist";
import YouTube from "react-youtube";
export const WorkPage = () => {
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(false);

  ///
  const fetchPlayList = async () => {
    const result = await getPlaylist();
    setData(result.items);
  };
  ///
  useEffect(() => {
    fetchPlayList();
    setMounted(true);
  }, []);
  return (
    <Container
      id="work"
      className=" bg-dark text-white flex items-stretch flex-col w-full p-5"
    >
      <h1 className="text-3xl p-5">Work</h1>
      <h2 className="px-10 p-2 text-2xl">Videography</h2>
      <div className="flex flex-row flex-wrap justify-items-center items-center px-4 lg:px-16">
        {mounted
          ? data.map((vid, index) => (
              // <div>}`</div>
              <YouTube
                videoId={vid.snippet.resourceId.videoId}
                // id={string} // defaults -> null
                className={"h-52 w-auto p-2"} // defaults -> null
                // containerClassName={string} // defaults -> ''
                // opts={obj} // defaults -> {}
                // onReady={func} // defaults -> noop
                // onPlay={func} // defaults -> noop
                // onPause={func} // defaults -> noop
                // onEnd={func} // defaults -> noop
                // onError={func} // defaults -> noop
                // onStateChange={func} // defaults -> noop
                // onPlaybackRateChange={func} // defaults -> noop
                // onPlaybackQualityChange={func} // d
              ></YouTube>
              //   <img
              //     key={vid.snippet.thumbnails.default.url}
              //     className=""
              //     src={vid.snippet.thumbnails.high.url}
              //   ></img>
            ))
          : null}
      </div>
      <h2 className="p-10 text-2xl">Photography</h2>
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 py-3 pb-24">
        {imageLinks.map((link, index) => (
          <img key={link + index + "sds"} className="" src={link}></img>
        ))}
      </div> */}
    </Container>
  );
};

import { Container } from "../components/container";
import { BehanceSvg } from "../components/logos/behance_logo_svg";
import { DiscordSvg } from "../components/logos/discord_logo_svg";
import { DownArrowSvg } from "../components/logos/down_arrow_svg";
import { InstagramSvg } from "../components/logos/instagram_svg";
import { LinkedInSvg } from "../components/logos/linkedIn_logo_svg";
import { LogoSvg } from "../components/logos/logo_svg";
import { YoutubeLogoSvg } from "../components/logos/youtube_logo";
import { LocationSvg } from "../components/logos/location_svg";
import Link from "next/link";
import { WorkPage } from "../components/work_page";

export default function Home() {
  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     console.log("adasd");
  //     document.body.style.setProperty(
  //       "--scroll",
  //       `${
  //         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //       }`
  //     );
  //   },
  //   false
  // );
  const imageLinks: Array<string> = [
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
    "https://qph.fs.quoracdn.net/main-qimg-92172b29f27e283e70586917075b5bb3",
  ];
  return (
    <div className="flex flex-col">
      <Container className="h-screen" id="home">
        <nav className="flex flex-row p-10 lg:p-10 items-center space-x-5 lg:space-x-10 lg:text-2xl font-medium text-xl">
          <LogoSvg className="h-12 w-12 lg:h-16 lg:w-16" />
          <div className="flex-grow" />
          <Link href="#home">
            <span className="">HOME</span>
          </Link>
          <Link href="#work">
            <span className="bg-black text-white rounded-md py-2 px-3">
              WORK
            </span>
          </Link>

          <Link href="#contact">
            <span className="">CONTACT</span>
          </Link>
        </nav>
        <div className="flex flex-row flex-grow">
          <div className="flex flex-grow flex-col">
            <div className="flex-grow"></div>

            <h1 className="text-5xl text-center pt-20 lg:pl-20 lg:text-left lg:text-6xl">
              Neel Patki
            </h1>
            <span className="text-xl text-center lg:text-left lg:pl-20 lg:text-2xl">
              edit / color / sound / vfx
            </span>
            <div className="flex-grow"></div>
            <Link href="#work">
              <div className="flex flex-row items-start justify-center lg:justify-end py-28  pl-14 space-x-2">
                <div className="text-xl lg:text-3xl">my work</div>
                <DownArrowSvg className="h-12 w-12 lg:h-20 lg:w-20" />
              </div>
            </Link>
          </div>
          <div className="hidden lg:inline flex-grow">
            {/* <img src="/img/home_page.png" className="w-max h-max"></img> */}
          </div>
        </div>
      </Container>
      {/* Page two */}
      <WorkPage />
      {/* Page three */}
      <Container className="h-screen" id="about">
        <h1 className="text-3xl p-14">About</h1>
        <div className="flex flex-col flex-grow lg:flex-row">
          <img
            className="w-screen lg:w-max lg:rounded-lg lg:w-1/3 lg:h-52 lg:m-10 "
            src="/img/about_img.png"
            alt="profile"
          ></img>
          <div className="flex flex-col">
            <p className="px-5 lg:px-20 py-10 text-lg font-medium">
              {`I have always been fond of movies. The journey from raw footage to a
          production grade film always piqued my interest. Once i graduated from
          college, i turned my passion into my career. I like to work with my
          clients and focus on delievering the best content possible.`}
            </p>
            <div className="flex-grow"></div>
            <div className="flex flex-row p-10 pb-28 items-center">
              <div className="flex-grow"></div>
              <LocationSvg />
              <div className="text-lg"> mumbai, india</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-grow flex-col bg-black">
          <div className="text-xl p-5 pl-10 text-white">Skills</div>
          <div className="flex-grow flex flex-row ">
            <div>
              <img src="/img/vfx.png" />
              <img src="/img/audio_correction.png" />
            </div>
            <div>
              <img src="/img/colors_correction.png" />
              <img src="/img/chroma_key.png" />
            </div>
            <div>
              <img src="/img/editing_post.png" />
            </div>
          </div>
        </div>
      </Container>
      <Container id="contact" className="h-screen">
        <h1 className="text-3xl p-14">Find me at</h1>
        <div className="flex-grow"></div>
        <LogoSvg className="self-center h-52 w-max lg:h-1/3	" />
        <div className="flex-grow"></div>
        <div className="flex flex-row lg:hidden items-center justify-center space-x-5">
          <BehanceSvg href="" />
          <LinkedInSvg href="https://www.linkedin.com/in/neel-patki-17261119/" />
        </div>
        <div className="flex flex-row justify-center items-center p-2 space-x-5">
          <LinkedInSvg
            href="https://www.linkedin.com/in/neel-patki-17261119/"
            className="hidden lg:inline"
          />
          <BehanceSvg href="" className="hidden lg:inline  hover:text-white" />
          <YoutubeLogoSvg href="https://www.youtube.com/channel/UCr5copTsSrMFQT4HrbuR3BQ/featured" />
          <DiscordSvg />
          <InstagramSvg href={"https://www.instagram.com/neil.in/"} />
        </div>
        <div className="text-center  p-10 text-xl">neelpatki@gmail.com</div>
        <div className="text-sm text-center p-4">
          © 2020 Neel Patki. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

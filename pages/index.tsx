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
    <div className="flex flex-col ">
      <Container className="w-full bg-yellow" id="home">
        <nav className="flex flex-row p-10 lg:p-10 items-center space-x-5 lg:space-x-10 lg:text-lg font-medium text-xl">
          <LogoSvg className="h-12 w-12 lg:h-16 lg:w-16" />
          <div className="flex-grow" />
          <Link href="#home">
            <span className="">Home</span>
          </Link>
          <Link href="#work">
            <span className="bg-black text-white rounded-md py-2 px-3">
              Work
            </span>
          </Link>

          <Link href="#about">
            <span className="">Contact</span>
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
                <DownArrowSvg className="h-12 w-12 lg:h-10 lg:w-10" />
              </div>
            </Link>
          </div>
          <div className="flex-grow"></div>
        </div>
      </Container>
      {/* Page two */}
      <WorkPage />
      {/* Page three */}
      <Container className="bg-yellow w-full" id="about">
        <div className="hidden lg:flex flex-grow flex-col bg-dark">
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
        <div className="flex flex-col flex-grow p-10">
          <h1 className="text-xl">About me</h1>
          <div className="flex flex-col">
            <p className="lg:px-20 py-10 text-md font-medium">
              {`I have always been fond of movies. The journey from raw footage to a
          production grade film always piqued my interest. Once i graduated from
          college, i turned my passion into my career. I like to work with my
          clients and focus on delievering the best content possible.`}
            </p>
            <div className="flex-grow"></div>
            <div className="flex flex-row items-baseline space-x-2">
              <div className="flex-grow"></div>
              <LocationSvg className="h-5 w-5" />
              <div className="text-lg">Mumbai,India</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-10">
          <svg
            className={"w-1/4 lg:w-24"}
            viewBox="0 0 80 80"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#060606" />
            <path
              d="M56.2634 24.4V58H49.8794L33.1274 37.6V58H25.4474V24.4H31.8794L48.5834 44.8V24.4H56.2634Z"
              fill="white"
            />
            <rect
              x="47.5045"
              y="33"
              width="27.8375"
              height="7.17569"
              transform="rotate(50.7062 47.5045 33)"
              fill="#060606"
            />
            <rect
              x="22.9332"
              y="26.2196"
              width="27.3417"
              height="7.14548"
              rx="3.57274"
              transform="rotate(49.4663 22.9332 26.2196)"
              fill="#060606"
            />
          </svg>
        </div>
        <div className="flex flex-row justify-center items-center p-2 space-x-5">
          <BehanceSvg href="" className="hover:text-white" />
          <DiscordSvg />
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
          </svg>
          <InstagramSvg href={"https://www.instagram.com/neil.in/"} />
          <LinkedInSvg
            href="https://www.linkedin.com/in/neel-patki-17261119/"
            className=""
          />
          <YoutubeLogoSvg href="https://www.youtube.com/channel/UCr5copTsSrMFQT4HrbuR3BQ/featured" />
        </div>
        <div className="text-sm text-center p-4">
          © 2020 Neel Patki. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

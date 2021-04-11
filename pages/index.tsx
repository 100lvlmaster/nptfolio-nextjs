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

export default function Home() {
  return (
    <div>
      <Container className="h-screen" id="home">
        <nav className="flex flex-row p-5 lg:p-10 items-center space-x-5 lg:space-x-10 lg:text-2xl font-medium text-xl">
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
            <Link href="#about">
              <div className="flex flex-row items-start justify-center lg:justify-end py-28  pl-14 space-x-2">
                <div className="text-xl">my work</div>
                <DownArrowSvg className="h-12 w-12" />
              </div>
            </Link>
          </div>
          <div className="hidden lg:inline flex-grow">
            {/* <img src="/img/home_page.png" className="w-max h-max"></img> */}
          </div>
        </div>
      </Container>
      <Container className="h-screen" id="about">
        <h1 className="text-3xl p-8">About</h1>
        <div className="flex flex-col lg:flex-row">
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
        <div className="hidden lg:block bg-black flex-grow">
          <div className="flex flex-col">
            <div className="p-16 text-xl text-white">Skills</div>
          </div>
        </div>
      </Container>
      <Container id="contact" className="h-screen items-stretch">
        <h1 className="text-3xl p-8">Find me at</h1>
        <div className="flex-grow"></div>
        <LogoSvg className="self-center" height="150" width="150" />
        <div className="flex-grow"></div>
        <div className="flex flex-row lg:hidden items-center justify-center space-x-5">
          <BehanceSvg />
          <LinkedInSvg />
        </div>
        <div className="flex flex-row justify-center items-center p-2 space-x-5">
          <a>
            <LinkedInSvg className="hidden lg:inline" />
          </a>
          <BehanceSvg className="hidden lg:inline  hover:text-white" />
          <YoutubeLogoSvg />
          <DiscordSvg />
          <InstagramSvg />
        </div>
        <div className="text-center  p-10 text-xl">neelpatki@gmail.com</div>
        <div className="text-sm text-center p-4">
          © 2020 Neel Patki. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

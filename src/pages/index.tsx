import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/PageComponent/Nav";
import Hero from "@/PageComponent/Hero";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-[100%] overflow-x-hidden bg-[#F5F5F6] h-full ${inter.className}`}
    >
      <div className="relative lg:h-screen h-[80vh]   z-10 overflow-hidden">
        <div className="fixed z-50 w-full">
          <Nav />
        </div>

        <Hero />
        {/* <div className="">
          <div className="w-[23%] h-screen origin-center rotate-45  absolute top-0 right-0 overflow-hidden inline-block bg-black opacity-90"></div>
          <div className="w-[29.6%] h-[80vh] origin-center rotate-45  absolute -bottom-12 right-0 overflow-hidden inline-block bg-black/20 opacity-50"></div>
          <div className="w-[35%] h-[42vh] origin-center rotate-45  absolute -bottom-[265px] right-[293px] overflow-hidden inline-block bg-black opacity-90"></div>
          <div className="w-[10%] h-[126px] rotate-45   absolute bottom-[257px] -right-16  bg-black opacity-70 "></div>
          <div className="w-[25%] h-[300px]   absolute -bottom-0 right-0 rotate-180 bg-black opacity-90"></div>
        </div> */}
        <div className="lg:h-full md:h-[40vh]   absolute lg:top-0 bottom-0 right-0">
          <div className="h-full  relative">
            <Image
              src="/asset/triangle.png"
              alt="black-background"
              width={1000}
              height={800}
            />
            {/* <div className="opacity-10 absolute top-0 h-full w-full bg-white"></div> */}
          </div>
        </div>
        <div className="absolute bottom-4 h-[55px]   w-8 rounded-3xl border-[5px] left-[800px] border-gray-500">
          <div className="h-full animate-bounce flex items-center justify-center">
            <div className=" w-3 h-3  rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="md:w-[90%] w-[95%] lg:w-[80%] md:h-[80vh] h-full bg-[#f5f5f6] mx-auto mt-12  md:mt-40"
      >
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex flex-col items-start md:w-[60%]"
        >
          <p className="text-gray-500 md:text-[20pt] text-[14pt] ">
            INTRODUCTION
          </p>
          <h1 className="text-black md:text-[50pt] text-[20pt] font-bold">
            Overview.
          </h1>
          <p className="text-gray-500 md:text-[16pt] text-[12pt]">
            I&apos;m a Fullstack developer that brings a blend of creativity and
            technical expertise to every project. My hands-on experience,
            coupled with a passion for staying ahead in the ever-evolving tech
            landscape, which makes me a versatile and valuable asset. Whether
            it&apos;s crafting intuitive user interfaces or optimizing server
            performance, I am committed to delivering seamless and efficient
            solutions. With a collaborative mindset and a love for tackling
            challenges head-on, I am poised to make a lasting impact in the
            world of software development.
          </p>
        </div>

        <div>
          <div className="flex md:flex-row  items-center     overflow-x-scroll w-[100%]  md:mx-0 gap-10 my-10 md:my-20 ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-black/80 shadow-black min-w-[280px] shadow-2xl rounded-xl px-8 h-[300px]"
            >
              <div className="flex flex-col space-y-8 h-full w items-center justify-center  ">
                <div className="h-16 w-20">
                  <Image
                    src="/asset/html.svg"
                    alt="Vercel Logo"
                    width={60}
                    height={40}
                  />
                </div>

                <p className="text-gray-500 w-[80%] text-center font-semibold text-[20px]">
                  Web Developement
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-black/80 min-w-[280px] shadow-2xl rounded-xl px-8 h-[300px]"
            >
              <div className="flex flex-col space-y-8 h-full w items-center justify-center  ">
                <div className="h-16 w-20">
                  <Image
                    src="/asset/mobile.svg"
                    alt="Vercel Logo"
                    width={70}
                    height={40}
                  />
                </div>

                <p className="text-gray-500 w-[80%] text-center font-semibold text-[20px]">
                  Mobile Developement
                </p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-black/80 min-w-[280px] shadow-black shadow-2xl rounded-xl px-8 h-[300px]"
            >
              <div className="flex flex-col space-y-8 h-full w items-center justify-center  ">
                <div className="h-16 w-16 flex items-center justify-center py-2 px-2 bg-[#f5f5f5] rounded-full ">
                  <Image
                    src="/asset/design.svg"
                    alt="Vercel Logo"
                    width={40}
                    height={20}
                  />
                </div>

                <p className="text-gray-500 w-[50%] text-center font-semibold text-[20px]">
                  Frontend Development
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-black/80 min-w-[280px] shadow-black shadow-2xl rounded-xl px-8 h-[300px]"
            >
              <div className="flex flex-col space-y-8 h-full w items-center justify-center  ">
                <div className="h-16 w-16 flex items-center justify-center py-2 px-2 bg-[#f5f5f5] rounded-full ">
                  <Image
                    src="/asset/backend.svg"
                    alt="Vercel Logo"
                    width={40}
                    height={20}
                  />
                </div>

                <p className="text-gray-500 w-[50%] text-center font-semibold text-[20px]">
                  Backend Development
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-black/80 min-w-[280px] shadow-black shadow-2xl rounded-xl px-8 h-[300px]"
            >
              <div className="flex flex-col space-y-8 h-full w items-center justify-center  ">
                <div className="h-16 w-16 flex items-center justify-center py-2 px-2 bg-[#f5f5f5] rounded-full ">
                  <Image
                    src="/asset/api.svg"
                    alt="Vercel Logo"
                    width={40}
                    height={20}
                  />
                </div>

                <p className="text-gray-500 w-[50%] text-center font-semibold text-[20px]">
                  Api Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('asset/city1.jpg')",

          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] md:h-[60vh]  h-[60vh] bg-cover bg-no-repeat bg-center overflow-hidden mx-auto relative bg-[#F5F5F6]  md:py-0  "
      >
        <div className="w-full h-full bg-black opacity-60 top-0"></div>
        <div className="md:w-[90%] absolute md:top-20 top-14 mx-auto w-[95%] md:left-[180px] left-2 lg:w-[80%]">
          <div className="flex flex-col items-start w-[60%]">
            <p className="text-gray-400 font-semibold md:text-[20pt] text-[14pt] ">
              MY SKILLS
            </p>
            <h1 className="text-[#f5f5f6] capitalize md:text-[50pt] text-[20pt] font-bold">
              TECHNOLOGIES.
            </h1>
            <div className="flex flex-row md:space-x-10 space-x-6 mt-6 md:mt-10">
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce  ">
                <Image
                  src="/asset/html2.svg"
                  alt="Vercel Logo"
                  width={40}
                  height={40}
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce  ">
                <Image
                  src="/asset/react.svg"
                  alt="Vercel Logo"
                  width={40}
                  height={40}
                  className=" rounded-3xl drop-shadow-2xl animate-spin"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce  ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/next.svg"
                  alt="Vercel Logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/redux.svg"
                  alt="Vercel Logo"
                  className=" rounded-3xl drop-shadow-2xl animate-spin"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={35}
                  height={35}
                  src="/asset/laravel-2.svg"
                  alt="logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
            </div>
            <div className="flex flex-row md:space-x-10 space-x-6 md:mt-10">
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/tailwindcss.svg"
                  alt="Vercel Logo"
                  className="rounded-3xl drop-shadow-2xl animate-spin"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/css.svg"
                  alt="Vercel Logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/js.svg"
                  alt="logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/nestjs.png"
                  alt="logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
              <div className="bouncing-ball bg-[#1E1E1E] mt-10 shadow-2xl  w-[60px] md:w-[80px] inline-flex items-center justify-center h-[60px] md:h-[80px] rounded-[100%] animate-bounce ">
                <Image
                  width={40}
                  height={40}
                  src="/asset/github-icon.svg"
                  alt="logo"
                  className=" rounded-3xl drop-shadow-2xl animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="w-full bg-[#141414] py-10 md:py-20">
        <div className="md:w-[90%] w-[95%] lg:w-[80%] md:h-[80vh]  mx-auto ">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col items-start md:w-[60%]"
          >
            <p className="text-gray-500 md:text-[20pt] text-[14pt] ">
              CASE STUDIES
            </p>
            <h1 className="text-[#f5f5f6] md:text-[50pt] text-[20pt] capitalize font-bold">
              PROJECTS.
            </h1>
            <p className="text-gray-500 md:text-[16pt] text-[12pt] ">
              These projects demonstrate my competence by providing practical
              samples of some of my work, including brief explanations and links
              to code repositories and live demos. They demonstrate my capacity
              to tackle complex problems, adapt to new technology, and
              efficiently manage projects.
            </p>
          </div>

          <div>
            <div className="flex md:flex-row  flex-col md:space-y-0 space-y-2 items-center w-[90%] md:mx-0 mx-auto gap-6 my-12 md:my-20 ">
              <Link
                target="_blank"
                href="https://turkishmedicine-hennydev.vercel.app/"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-black/20 md:w-[18%] w-full border-[2px] border-gray-700 shadow-black relative shadow-2xl rounded-[35px] h-[70px]  md:h-[400px]"
              >
                <Image
                  width={200}
                  height={40}
                  src="/asset/turkey.jpeg"
                  alt="Vercel Logo"
                  className="h-full w-full rounded-[35px] object-cover"
                />
                <div className="bg-[#88d8f7] opacity-40 absolute top-0 w-full h-full rounded-[35px]"></div>
                <div className="text-[#f5f5f6] absolute right-32  bottom-1  md:-right-8 md:bottom-24 md:text-[24pt] text-[16pt] font-semibold md:rotate-90">
                  Medical
                </div>
              </Link>

              <Link
                target="_blank"
                href="https://thrifty-web.vercel.app/"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-black/20 md:w-[18%]  w-full border-[2px] border-gray-700 shadow-black relative shadow-2xl rounded-[35px] h-[70px]  md:h-[400px]"
              >
                <div className="h-full w-full  rounded-[35px] object-contain">
                  <Image
                    width={200}
                    height={40}
                    src="/asset/thrifty.jpeg"
                    alt="Vercel Logo"
                    className="h-full w-full rounded-[35px] object-left-top object-cover"
                  />
                </div>

                <div className="bg-[#161616] opacity-40 absolute top-0 w-full h-full rounded-[35px]"></div>
                <div className="text-[#f5f5f6] absolute right-32  bottom-1  md:-right-16 md:bottom-24 md:text-[24pt] text-[16pt] font-semibold md:rotate-90">
                  E-Commerce
                </div>
              </Link>
              <Link
                href="https://jobseeker.compaira.com/login"
                target="_blank"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-black/20 shadow-black md:w-[40%] relative border-gray-600 border-[2px] shadow-2xl rounded-[35px] h-[300px] md:h-[400px]"
              >
                <Image
                  width={200}
                  height={40}
                  src="/asset/compaira.jpeg"
                  alt="Vercel Logo"
                  className="h-full w-full object-left-top rounded-[35px] object-cover"
                />

                <div className="bg-[#616161] opacity-60 absolute top-0 w-full h-full rounded-[35px]"></div>
                <div className="text-[#f5f5f6] space-y-2 absolute md:left-10 left-4  bottom-10 text-[20pt] font-semibold ">
                  <p className=" text-[24pt">Compaira</p>
                  <p className="text-[14pt]">
                    This is a web application for Job seekers to connect with
                    employers
                  </p>
                  <button className="py-2 text-lg px-3 bg-black text-[#f5f5f6] rounded-xl">
                    Demo
                  </button>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.buytoken.app/"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-black/20 md:w-[18%] w-full border-[2px] border-gray-700 shadow-black relative shadow-2xl rounded-[35px] h-[70px]  md:h-[400px]"
              >
                <Image
                  width={200}
                  height={40}
                  src="/asset/buytoken.jpeg"
                  alt="Vercel Logo"
                  className="h-full w-full rounded-[35px] object-left-top object-cover"
                />
                <div className="bg-[#616161] opacity-40 absolute top-0 w-full h-full rounded-[35px]"></div>
                <div className="text-[#f5f5f6] absolute right-32  bottom-1  md:-right-8 md:bottom-24 md:text-[24pt] text-[16pt] font-semibold md:rotate-90">
                  Utility
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.circo.africa/"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="bg-black/20 md:w-[18%] w-full border-[2px] border-gray-700 shadow-black relative shadow-2xl rounded-[35px] h-[70px]  md:h-[400px]"
              >
                <Image
                  width={200}
                  height={40}
                  src="/asset/circo.jpeg"
                  alt="Vercel Logo"
                  className="h-full w-full rounded-[35px] object-left-top object-cover"
                />
                <div className="bg-[#616161] opacity-40 absolute top-0 w-full h-full rounded-[35px]"></div>
                <div className="text-[#f5f5f6] absolute right-32  bottom-1  md:-right-14 md:bottom-24 md:text-[24pt] text-[16pt] font-semibold md:rotate-90">
                  Social Media
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-[120vh] md:h-[100vh] h-[98vh] bg-[#141414] w-full">
        <div
          style={{
            backgroundImage: "url('asset/bg.jpg')",
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[100%] h-full bg-black rounded-tl-[150px] md:rounded-tl-[250px] bg-cover bg-no-repeat bg-center overflow-hidden  mx-auto relative  md:py-0  "
        >
          <div className="lg:h-[110vh] md:h-[40vh] h-full  absolute md:-bottom-10 -bottom-[470px] right-0">
            <div className="h-full relative">
              <Image
                src="/asset/triangle.png"
                width={1000}
                height={40}
                alt="black-background"
              />
              {/* <div className="opacity-10 absolute top-0 h-full w-full bg-white"></div> */}
            </div>
          </div>

          <div className="flex flex-col   w-[95%] lg:w-[60%] mx-auto md:pt-20 pt-10">
            <p
              data-aos="fade-down"
              className="text-gray-500 md:text-[20pt] lg:text-start  text-center font-semibold text-[14pt] "
            >
              What I&apos;ve done so far
            </p>
            <h1
              data-aos="fade-down"
              className="text-black md:text-[50pt] lg:text-start text-center md:pl-10 lg:pl-0 text-[20pt] font-bold"
            >
              Work Experience.
            </h1>
            <div className="lg:w-[70%] md:w-[95%] relative md:h-[80vh] h-[80vh] justify-between flex lg:justify-center items-center w-[95%] mx-auto  mt-12 ">
              <div className="h-full relative bg-slate-600 w-[3px]">
                <div className="rounded-full absolute top-7 -left-8   md:h-16 md:w-16 h-14 w-14 flex items-center justify-center bg-black/80 border-[4px] border-gray-400 ">
                  <Image
                    src="/asset/react.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="md:w-8 md:h-8 h-6 w-6"
                  />
                </div>
                <div className="rounded-full absolute top-52 -left-8  md:h-16 md:w-16 h-14 w-14 flex items-center justify-center bg-black/80 border-[4px] border-gray-400 ">
                  <Image
                    src="/asset/react.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="md:w-8 md:h-8 w-6 h-6"
                  />
                </div>
                <div className="rounded-full absolute bottom-64 -left-8   md:h-16 md:w-16 h-14 w-14 flex items-center justify-center bg-black/80 border-[4px] border-gray-400 ">
                  <Image
                    src="/asset/react.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="md:w-8 w-6 h-6  md:h-8"
                  />
                </div>
                <div className="rounded-full absolute bottom-16 -left-8  md:h-16 md:w-16 h-14 w-14 flex items-center justify-center bg-black/80 border-[4px] border-gray-400 ">
                  <Image
                    src="/asset/react.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="md:w-8 w-6 h-6 md:h-8"
                  />
                </div>
                <div
                  data-aos="fade-right"
                  className="absolute lg:block hidden right-16 top-8"
                >
                  <div className="py-5 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 w-[450px] ">
                    <p className="tracking-wider   text-[18pt] font-bold">
                      Freelance Engineer
                    </p>
                    <p className="text-gray-500 font-semibold pt-3">
                      TechySuite
                    </p>
                    <div className="absolute -right-5 top-4">
                      <Image
                        src="/asset/right.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="lg:block hidden absolute -right-64  top-8"
                >
                  <p className="text-gray-500 text-[12pt] font-semibold pt-3">
                    October 2023- Present
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="lg:block hidden absolute right-20   top-52"
                >
                  <p className="text-gray-500 text-[12pt] font-semibold pt-3">
                    March 2023- Oct 2023
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="absolute lg:block hidden left-16 top-52"
                >
                  <div className="py-5 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 w-[450px] ">
                    <p className="tracking-wider   text-[18pt] font-bold">
                      Full Stack Engineer
                    </p>
                    <p className="text-gray-500 font-semibold pt-3">
                      Talent365, United Kingdom
                    </p>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="absolute lg:block hidden -right-64 bottom-[279px]"
                >
                  <p className="text-gray-500 text-[14pt] font-semibold pt-3">
                    March 2022- Jan 2022
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="absolute lg:block hidden right-16 bottom-[210px]"
                >
                  <div className="py-5 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 w-[450px] ">
                    <p className="tracking-wider   text-[18pt] font-bold">
                      FullStack Engineer
                    </p>
                    <p className="text-gray-500 font-semibold pt-3">
                      Gilah Global Limited. Lagos, Nigeria
                    </p>
                    <div className="absolute  -right-5 top-4">
                      <Image
                        src="/asset/right.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="absolute block   -left-[500px] bottom-4"
                >
                  <div className="md:py-3  w-[450px] bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4  ">
                    <p className="md:tracking-wider text-[12pt]  md:text-[18pt] font-bold">
                      FullStack Engineer
                    </p>
                    <p className="text-gray-500 md:text-[12pt] text-[10pt]  font-semibold pt-2">
                      Calmerc Global Ltd, Lagos
                    </p>
                    <p className="text-gray-500 md:text-[12pt] text-[10pt]  font-semibold pt-1">
                      March 2021 - Dec 2022
                    </p>
                    <div className="absolute -right-5 top-4">
                      <Image
                        src="/asset/right.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  className="absolute lg:block hidden left-12 bottom-6"
                >
                  <div className="md:py-5 py-4 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl flex items-center justify-center px-4 w-[450px] ">
                    <Link
                      href="https://docs.google.com/document/d/1t9PogkEckEhx8Vw4lgY6b981Al-r8s8iRXf1sT1oHqA/edit?usp=sharing"
                      target="_blank"
                      className="text-white py-4 flex flex-row px-3 rounded bg-black"
                    >
                      <p>MY RESUME</p>

                      <Image
                        src="/asset/download.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[90%]  lg:hidden block h-full">
                <div
                  data-aos="fade-left"
                  className="absolute block w-full  lg:hidden -right-14 top-6"
                >
                  <div className="md:py-5 py-3 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 md:w-[94%] w-[85%] ">
                    <p className="md:tracking-wider text-[12pt]  md:text-[18pt] font-bold">
                      Freelance Full Stack Engineer
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt] font-semibold pt-2">
                      TechySuite
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt] font-semibold pt-1">
                      Oct 2023 -Present
                    </p>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="absolute block w-full  lg:hidden -right-14 top-52"
                >
                  <div className="md:py-5 py-3 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 md:w-[94%] w-[85%] ">
                    <p className="md:tracking-wider text-[12pt]  md:text-[18pt] font-bold">
                      FullStack Engineer
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-2">
                      Talent365, United Kingdom
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-1">
                      March 2023 - Oct 2023
                    </p>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="absolute block w-full  lg:hidden -right-14 bottom-48"
                >
                  <div className="md:py-5 py-3 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 md:w-[94%] w-[85%] ">
                    <p className="md:tracking-wider text-[12pt]  md:text-[18pt] font-bold">
                      FullStack Engineer
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-2">
                      Gilah Global Ltd, Lagos
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-1">
                      March 2022 - January 2022
                    </p>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="absolute block w-full  lg:hidden -right-14 bottom-48"
                >
                  <div className="md:py-5 py-3 bg-[#f5f5f6] text-[#141414] rounded-[12px] shadow-xl relative px-4 md:w-[94%] w-[85%] ">
                    <p className="md:tracking-wider text-[12pt]  md:text-[18pt] font-bold">
                      FullStack Engineer
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-2">
                      Calmerc Global Ltd, Lagos
                    </p>
                    <p className="text-gray-500 md:text-[14pt] text-[10pt]  font-semibold pt-1">
                      March 2021 - Dec 2022
                    </p>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="absolute block w-full  lg:hidden -right-14 bottom-8"
                >
                  <div className="py-5 bg-[#f5f5f6] text-[#141414] rounded-[12px] flex items-center justify-center shadow-xl relative px-4 md:w-[94%] w-[85%] ">
                    <Link
                      href="https://docs.google.com/document/d/1t9PogkEckEhx8Vw4lgY6b981Al-r8s8iRXf1sT1oHqA/edit?usp=sharing"
                      target="_blank"
                      className="text-white py-4 flex flex-row px-3 rounded bg-black"
                    >
                      <p className="md:text-[14pt] text-[10pt] ">MY RESUME</p>

                      <Image
                        src="/asset/download.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="md:w-6 w-5 h-5 md:h-6"
                      />
                    </Link>
                    <div className="absolute -left-5 top-4">
                      <Image
                        src="/asset/left.svg"
                        width={20}
                        height={20}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="w-[100%] bg-[#141414] md:h-[90vh] py-20">
        <div
          data-aos="fade-right"
          className="md:w-[60%] md:mx-44  mx-auto w-[90%] bg-[#2A2A2A] py-6 px-6 rounded-2xl "
        >
          <div className="flex flex-col items-start w-full">
            <p className="text-gray-500 font-semibold md:text-[18pt] text-[14pt] ">
              GET IN TOUCH
            </p>
            <h1 className="text-[#D4D4D8] md:text-[36pt] text-[20pt] pb-10 font-bold">
              CONTACT.
            </h1>
            <div className=" w-full md:text-[14pt] text-[10pt]  pb-6">
              <label className="font-semibold text-[#D4D4D8]">Your Name</label>
              <input
                placeholder="what's your name?"
                className="w-full px-6 placeholder:text-gray-500 mt-3 rounded-xl focus:ring-0 outline-none bg-[#202020] py-4 "
              ></input>
            </div>
            <div className=" w-full pb-6 md:text-[14pt] text-[10pt] ">
              <label className="font-semibold text-[#D4D4D8]">Your Email</label>
              <input
                placeholder="What's your email?"
                className="w-full px-6 mt-3 placeholder:text-gray-500 rounded-xl focus:ring-0 outline-none bg-[#202020] py-4 "
              ></input>
            </div>
            <div className=" w-full pb-6 md:text-[14pt] text-[10pt] ">
              <label className="font-semibold text-[#D4D4D8]">
                Your Message
              </label>
              <textarea
                placeholder="What's your message?"
                className="w-full px-6 mt-3 placeholder:text-gray-500 rounded-xl focus:ring-0 outline-none bg-[#202020] py-4 h-[20vh] "
              ></textarea>
            </div>
            <button className="py-2 text-lg px-3 flex flex-row space-x-2 items-center bg-black/60 text-[#f5f5f6] rounded-xl">
              <p>Send</p>

              <Image
                src="/asset/mail.svg"
                width={20}
                height={20}
                alt=""
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Linkedin from "./icons/linkedin";
import Github from "./icons/github";


export default function About() {

  return (
    <section id="about">
      <div className="bg-gradient-to-b from-transparent via-white to-transparent ">
        <div data-collapsible="true" className="px-6 py-20 md:py-28 relative">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:overlap md:col-span-10 md:col-start-1 md:col-end-10 drop-shadow-2xl rounded-3xl bg-white p-6 pb-20 md:p-12 md:pr-40 lg:pr-52">
                <div className="text">
                  <h1 className="font-bold leading-none text-4xl md:text-5xl mb-7 mt-12 first:mt-0 last:mb-0">About</h1>
                  <div className="italic text-xl">
                    <p className="text-base md:text-lg text-gray-600 mb-7 last:mb-0">Hi, I’m Colin O’Brien, and I started High Fidelity to to make it easier for businesses to create great content on the web. I work with you to solve your specific business problems and then provide a custom solution that meets your needs. I am a developer, digital product designer, and project manager with over 20 years of experience who can help bring your project to life. Review my scope of services below and then <a className="text-secondary-600 hover:underline hover:underline-offset-1" href="#get-in-touch">get in touch</a> to see how I can help!</p>
                  </div>
                </div>
              </div>
              <div className="w-48 md:w-[280px] -mt-14 md:mt-0 mx-auto md:overlap md:col-span-4 md:col-start-9 md:col-end-12 z-10 drop-shadow-md relative">
                <StaticImage
                  src="../images/profile-pic.jpg"
                  alt="Colin OBrien photo"
                  placeholder="blurred"
                  width={300}
                  height={300}
                  className="rounded-lg mx-auto block"
                />
                <div className="absolute bottom-0 right-0 flex">
                  <a href="https://www.linkedin.com/in/colinobrien1/" target="_blank" rel="noreferrer">
                    <div className="block">
                      <div className="sr-only">Colin OBrien LinkedIn</div>
                      <Linkedin className="rounded-sm bg-white fill-linkedin hover:fill-primary ease-in-out duration-200" width={28} />
                    </div>
                  </a>
                  <a href="https://github.com/seafarer/" target="_blank" rel="noreferrer">
                    <div className="block ml-1">
                      <div className="sr-only">Colin OBrien Github</div>
                      <Github className="rounded-sm bg-white fill-github hover:fill-primary ease-in-out duration-200" width={28} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import * as React from "react"
import bkgd from "../images/bkgd.svg"

const heroBkgd = {
  backgroundImage: `url(${bkgd})`,
}

const Hero = () => (
  <section className="relative bg-slate-900 text-white -z-10 clipped pb-12 pt-12">
    <div className="pointer-events-none select-none object-cover bg-cover absolute inset-0 bg-no-repeat" style={heroBkgd}></div>
    <div className="px-6 py-20 md:py-28 relative z-10">
      <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl text-left">
            <h1 className="mb-12 font-bold leading-none text-5xl md:text-7xl"><span className="text-white">High Fidelity</span> develops web applications
            to make content creation a delightful experience for marketers, publishers, and brands of all kinds.
            </h1>
            <a className="inline-block rounded bg-secondary px-5 py-3 text-lg rounded-2xl -skew-x-12 leading-none text-white tracking-wide font-extrabold uppercase" href="#get-in-touch">Get in touch</a>
          </div>
      </div>
    </div>
  </section>
)

export default Hero
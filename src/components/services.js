import * as React from "react"
import Wordpress from "./icons/wordpress";
import ReactLogo from "./icons/react"
import Jamstack from "./icons/jamstack";

export default function Services() {

  return (
    <section className="services" id="services">
      <div className="clipped-trapezoid grid-bkgd px-6 py-28 drop-shadow-lg">
        <div className="mx-auto w-full max-w-6xl">
          <div className="content px-0 md:px-12">
            <h2 className="font-bold leading-none text-4xl md:text-5xl mb-7 mt-12 first:mt-0 last:mb-0 text-white tracking-wide">Services</h2>
            <div className="md:flex">
              <div className="left text-white italic md:pr-28 mb-12 md:mb-0">
                <p className="mb-4">In general, High Fidelity provides services to get your content published on the web. The focus is both front-end user experience and content creator user experience. All of our work is mobile-first, responsive, and focused on performance, security and best practices.</p>
                <ul className="list-disc list-inside leading-loose">
                  <li>Full-stack WordPress development</li>
                  <li>CMS themeing and content modeling</li>
                  <li>JAMstack (React) development</li>
                  <li>Web3 and NFT consulting</li>
                  <li>Digital style guide design & development</li>
                  <li>Performance, security, and SEO auditing</li>
                  <li>User interface design & prototyping</li>
                  <li>Front-end development consulting</li>
                  <li>Digital design systems</li>
                  <li>Website support and maintenance</li>
                  <li>High-performance <a className="underline hover:no-underline" href="https://www.wpshost.net" target="_blank" rel="noreferrer">boutique website hosting</a></li>
                </ul>
              </div>
              <div className="right logos flex flex-col justify-center items-center">
                <div className="mb-12">
                  <Wordpress width={250} />
                </div>
                <div className="mb-12">
                  <ReactLogo width={200} />
                </div>
                <div className="mb-12">
                  <Jamstack width={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
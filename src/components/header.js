import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="px-6 py-4 bg-gradient-to-b from-purple-top to-purple-bottom drop-shadow-menu z-20 fixed inset-x-0 top-0 border-b border-purple-top">
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <h1 className="tracking-wide text-3xl font-bold leading-none italic font-display uppercase text-white">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            <li className="sans tracking-wide text-white italic font-extrabold leading-none uppercase">
              <a href="#about">About</a>
            </li>
            <li className="sans tracking-wide text-white italic font-extrabold leading-none uppercase">
              <a href="#services">Services</a>
            </li>
            <li className="sans tracking-wide text-white italic font-extrabold leading-none uppercase">
              <a href="#get-in-touch">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header

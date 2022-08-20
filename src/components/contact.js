import React from "react"
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'

export default function Contact() {

  let display = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("hfContact");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => (display = true))
      .catch((error) => alert(error));
  };

  console.log(display)

  return (
    <div id="get-in-touch" className="relative bg-gradient-to-b from-transparent to-primary-50">
      <div className="relative mt-12 max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12 md:border-r md:border-gray-200">
          <div className="max-w-lg mx-auto">
            <h2 className="text-4xl font-bold text-primary ">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-400 italic">
              Big or small, or anything in between, High Fidelity wants to help you with strategy, development and design and become your trusted product partner.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (970) 404-0988</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">info@highfidelity.dev</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form id="hfContact" name="high-fidelity-contact" className="grid grid-cols-1 gap-y-6" method="POST" data-netlify="true">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  A little bit about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className={`${display ? "block" : "hidden"} rounded-md bg-green-50 p-4 mt-8 border border-emerald-300}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">Form successfully submitted. We'll be in touch soon!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
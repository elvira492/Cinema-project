import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("xbjnbjne");

  if (state.succeeded) {
    return <p className="text-green-500">Thank you!</p>;
  }

  return (
    <div className="flex flex-col md:flex-row align-items-center">
      {/* Linke Spalte */}
      <div className="flex-1">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mb-8 mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-1xl">
              Contact Information
            </h3>
            <div className="mt-4 mt-2 text-lg leading-8 text-gray-600">
              <p className="mb-2">
                Reservations via email or through the contact form are not
                possible. Corresponding emails will be deleted without response.
              </p>
              <p className="mb-2">
                <strong>Office Opening Hours:</strong>
              </p>
              <p className="mb-2">Daily at 11:00 PM</p>
              <p className="mb-2">
                For all other inquiries regarding your cinema visit, you can
                reach us during opening hours at the following telephone number:{" "}
                <a href="tel:+555554433 ">(555)554433 </a>
              </p>
              <p className="mb-2">
                You can also email us at{" "}
                <a href="mailto:FantasyCinema@gmail.com">
                  FantasyCinema@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-4">
              <button className="w-48 px-4 py-2 bg-gray-900 text-white font-semibold rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                <a href="mailto:FantasyCinema@gmail.com">Email Us</a>
              </button>
              <button className="w-48 ml-4 px-4 py-2 bg-gray-900 text-white font-semibold rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
                <a href="tel:+555554433 ">Call us </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rechte Spalte */}
      <div className="flex-1 mt-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-1xl">
            Please leave us a message
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Complete the form
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <label htmlFor="full-name" className="block mt-4">
            Full Name
          </label>
          <input
            id="full-name"
            type="name"
            name="fullName"
            placeholder="First and Last"
            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300  focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500"
          />
          <ValidationError
            prefix="Full Name"
            field="fullName"
            errors={state.errors}
            className="text-red-500"
          />

          <label htmlFor="email" className="block mt-4">
            E-Mail Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />

          <label htmlFor="telephone" className="block mt-4">
            Phone Number (optional)
          </label>
          <input
            id="telephone"
            type="tel"
            name="telephone"
            placeholder="(555) 555-5555"
            className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Telephone"
            field="telephone"
            errors={state.errors}
            className="text-red-500"
          />

          <label htmlFor="message" className="block mt-4">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-8 mt-1 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {state.submitting ? "Submit..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

/* 1. https://tailwindui.com/components/marketing/sections/contact-sections
npm install @headlessui/react 
2. Form Service: https://formspree.io/forms/xbjnbjne/integration
npm i @formspree/react

text-neutral-800

*/

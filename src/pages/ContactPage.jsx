import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("xbjnbjne");

  if (state.succeeded) {
    return <p className="text-green-500">Thank you!</p>;
  }

  return (
    <div className="color1 flex flex-col md:flex-row md:items-start md:justify-center gap-8 lg:gap-36 p-8 pb-32">
      {/* Left */}
      <div className="max-w-lg md:max-w-sm lg:max-w-lg  md:px-16 rounded-md border border-gray-300 lg:py-28 p-12">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Contact Information
        </h3>
        <div className="mb-4">
          <p>
            Reservations via email or through the contact form are not possible.
            Corresponding emails will be deleted without response.
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>Office Opening Hours:</strong>
          </p>
          <p className="mb-4">Daily at 11:00 PM</p>
          <p className="mb-2">
            For all other inquiries regarding your cinema visit, you can reach
            us during opening hours at the following telephone number:{" "}
            <a href="tel:+555554433 ">(555)554433 </a>
          </p>
          <p className="mb-4">
            You can also email us at{" "}
            <a href="mailto:FantasyCinema@gmail.com">FantasyCinema@gmail.com</a>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-48 px-4 py-2 bg-rose-600 text-white font-semibold rounded-md shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
            <a href="mailto:FantasyCinema@gmail.com">Email Us</a>
          </button>
          <button className="w-48 ml-4 px-4 py-2 bg-neutral-800 bg-rose-600 text-white font-semibold rounded-md shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring focus:ring-green-500 focus:ring-opacity-50">
            <a href="tel:+555554433 ">Call us </a>
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 max-w-lg items-center ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-1xl lg:pb-4">
            Please leave us a message
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Complete the form
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
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
            className="block w-full rounded-md bg-neutral-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
*/

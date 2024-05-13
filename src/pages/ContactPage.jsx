import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactPage() {
  const [state, handleSubmit] = useForm("xbjnbjne");

  if (state.succeeded) {
    return <p className="text-green-500">Thank you!</p>;
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8 lg:gap-36 p-8 md:p-16 h-5/6">
      {/* Left */}
      <div className="max-w-lg md:max-w-sm lg:max-w-lg p-16 md:px-16 rounded-md border border-gray-300 ">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Contact Information
        </h3>
        <div className="mb-4">
          <p className="font-semibold">Opening Hours</p>
          <p>
            Fantasy Cinema is open: Monday – Friday from 11:00 PM onwards
            Saturday – Sunday 15 minutes before the start of the first
            screening. You can find a program overview{" "}
            <a href="/program">here</a>.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Directions to Fantasy Cinema</p>
          <p>
            Fantasy Cinema is located directly at the intersection of
            Hans-Sachs- and Ickstattstraße in the Glockenbachviertel district
            and is easily accessible on foot from the Sendlinger Tor or
            Fraunhoferstraße train stations.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Public Transportation</p>
          <p>
            U1/2: Fraunhoferstraße Station, U3/6: Sendlinger Tor Station Tram
            16/17/18: Müllerstraße Stop By Car Public parking spaces around the
            cinema are very limited. Please consider walking, cycling, or using
            public transportation (MVG).
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 max-w-lg items-center ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-1xl pb-16">
            Please leave us a message
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
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
*/

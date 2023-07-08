import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleCustomerMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const email = form?.email?.value;
    const message = form?.message?.value;
    // console.log({ name, email, message });
  };

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116864.61162476617!2d90.32821362768526!3d23.74669782027271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b950149b4a25%3A0x4f6faba961fb7232!2sHappy%20Pet%20Shop!5e0!3m2!1sen!2sbd!4v1687800039358!5m2!1sen!2sbd"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p class="mt-1">94 New Eskaton Road, Dhaka-1000</p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <Link class="text-indigo-500 leading-relaxed">rehanpetcaretaker@gmail.com</Link>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p class="leading-relaxed">+880 1920-270995</p>
            </div>
          </div>
        </div>
        <form class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={handleCustomerMessage}>
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Leave a message!</h2>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button type="submit" class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Submit
          </button>
          <p class="text-xs text-gray-500 mt-3">Thank you for your kind words! We are here to help and provide valuable information whenever you need it.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;

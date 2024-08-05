import React, { useState } from "react";
import Auth from "../../pages/landingPage/Auth";
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md py-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Chatgram</h1>
          <nav>
            <a
              href="#features"
              className="mx-2 text-gray-700 hover:text-blue-500"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="mx-2 text-gray-700 hover:text-blue-500"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="mx-2 text-gray-700 hover:text-blue-500"
            >
              Contact
            </a>
            <a
              onClick={openModal}
              className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Connect with Friends and Family
            </h2>
            <p className="text-lg mb-6">
              Our app makes it easy to stay in touch with the people who matter
              most.
            </p>{" "}
            <a
              onClick={openModal}
              className="px-6 py-3 bg-white text-blue-500 rounded hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/hero-image.jpg"
              alt="Messaging App"
              className="w-full rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <div className="mb-4 text-blue-500">
                  <i className="fas fa-comments fa-2x"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Real-Time Messaging</h3>
                <p>
                  Experience instant messaging with our real-time chat feature.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <div className="mb-4 text-blue-500">
                  <i className="fas fa-share-square fa-2x"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Media Sharing</h3>
                <p>Share photos, videos, and voice messages easily.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <div className="mb-4 text-blue-500">
                  <i className="fas fa-lock fa-2x"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Secure and Private</h3>
                <p>Your conversations are encrypted and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <p>
                  "This app has changed the way I communicate with my family.
                  It's so easy to use and the features are fantastic!"
                </p>
                <p className="mt-4 text-sm text-gray-600">- User A</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <p>
                  "I love the real-time messaging feature. It feels like I'm
                  having a face-to-face conversation."
                </p>
                <p className="mt-4 text-sm text-gray-600">- User B</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md text-center">
                <p>
                  "The app is secure and private, which is very important to me.
                  Highly recommend!"
                </p>
                <p className="mt-4 text-sm text-gray-600">- User C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Chatgram. All rights reserved.</p>
          <p className="mt-4">
            Contact us:{" "}
            <a href="theseniorman237@gmail.com" className="underline">
              support@messagingapp.com
            </a>
          </p>
        </div>
      </footer>
      {showModal && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center z-50">
          <div onClick={closeModal} className="fixed inset-0 z-40" />
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Auth />
        </div>
      )}
    </div>
  );
};

export default LandingPage;

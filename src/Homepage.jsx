import React from "react";
import { Link } from "react-router-dom";
import PhotoSlider from "./PhotoSlider";
import "./App.css"; // Ensure this import is present for animations
import Privacy from "./Privacy";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
<div
  className="relative text-center min-h-screen  animate-rainbow-wave"
  style={{
    background:
      "radial-gradient(circle at 30% 30%, #ff6ec4, transparent 25%), radial-gradient(circle at 70% 40%, #7873f5, transparent 25%), radial-gradient(circle at 50% 70%, #42e695, transparent 25%), linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #84fab0, #8fd3f4, #fccb90)",
    backgroundBlendMode: "screen",
    backgroundSize: "400% 400%",
  }}
>


      {/* Photo Slider Section */}
      <div className="relative">
         <div className=" bg-gray-100 sm:py-6 text-center">
  <img
    src="/PrideLogo2.jpeg"
    alt="Hartford Pride Center Logo"
    className="mx-auto w-full sm:w-full md:w-96  shadow-md shadow-red-500  transition-transform duration-700 ease-in-out"
  />
</div>
        {/* Overlapping Title */}
        <div className="absolute lg:bottom-[-30px] bottom-[-80px] text-sm sm:text-xl  border-2 border-blue-400 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400/80 to-purple-500/40 font-bold backdrop-blur-md px-6 sm:px-10 py-1 rounded-none shadow-xl w-11/12 sm:w-auto">

<h3>Empowering the community | providing resources | creating safe spaces.</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2">
        {/* Navigation Buttons */}
<div className="mt-28 sm:mt-20 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 text-center">
  <Link
    to="/about"
    className="text-white w-full text-center border-2 border-white px-1 py-2 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105 hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    style={{
      background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
      backgroundSize: "200% 200%",
      transition: "background-position 0.5s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundPosition = "right center")}
    onMouseLeave={(e) => (e.target.style.backgroundPosition = "left center")}
  >
    About Us
  </Link>

  <Link
    to="/contact"
    className="text-white w-full text-center px-1 py-2 border-2 border-white rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105 hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    style={{
      background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
      backgroundSize: "200% 200%",
      transition: "background-position 0.5s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundPosition = "right center")}
    onMouseLeave={(e) => (e.target.style.backgroundPosition = "left center")}
  >
    Contact
  </Link>

  <Link
    to="/services"
    className="text-white w-full text-center px-1 border-2 border-white py-2 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105 hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
    style={{
      background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
      backgroundSize: "200% 200%",
      transition: "background-position 0.5s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundPosition = "right center")}
    onMouseLeave={(e) => (e.target.style.backgroundPosition = "left center")}
  >
    Services
  </Link>
</div>



        {/* Info / Bio Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-4 border-blue-400 border-4 mx-auto my-10 w-11/12 md:w-3/4 lg:w-1/2 text-center space-y-6">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-blue-700 font-bold leading-snug sm:leading-normal px-4 sm:px-6">
            ✨ Welcome! ✨
          </h2>

          <hr className="border-t-4 border-blue-400 w-full my-2" />

        <p className="text-gray-700 text-lg leading-relaxed">
  At the <span className="font-semibold text-blue-700">Hartford Pride Center</span>, 
  we believe every person deserves a space where they can feel seen, supported, and celebrated.  
  Our mission is to uplift LGBTQIA+ individuals through advocacy, education, and community connection.  
  From social programs and resource guides to special events and creative workshops — we’re here to empower, 
  inspire, and unite our diverse community.
</p>

<p className="text-gray-700 text-lg leading-relaxed">
  Together, we’re creating a safer, more inclusive world — one that values authenticity, compassion, and pride.  
  Join us in making Hartford a place where everyone can thrive, be themselves, and shine brightly. 🌈
</p>


          <Link
            to="/contact"
            className="text-white px-6  rounded-full text-lg font-semibold shadow-md transition-all duration-500 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)",
              backgroundSize: "200% 200%",
              transition: "background-position 0.5s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundPosition = "left center")
            }
          >
            Get Started
          </Link>
        </div>
        <section className="bg-gradient-to-br from-purple-900 via-black to-pink-900 text-gray-200 py-6 border-t-4 border-pink-400">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 divide-y divide-gray-700 lg:divide-y-0 lg:divide-x lg:divide-gray-700">
    
    {/* 🌟 Organization Info */}
    <div className="pr-0 lg:pr-6 text-center lg:text-left">
      <h3 className="text-2xl font-bold text-pink-400 border-b-2 border-pink-400 inline-block mb-2">
        Hartford Pride Center 🌈
      </h3>
      <p className="text-sm leading-relaxed text-gray-300">
        Empowering the LGBTQ+ community through connection, creativity, and compassion.  
        We provide safe spaces, advocacy, and programs that celebrate authenticity and love.
      </p>
    </div>

    {/* ⚡ Quick Links */}
    <div className="pt-4 sm:pt-0 lg:px-6 text-center lg:text-left">
      <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        <li><Link to="/about" className="hover:text-pink-400">About</Link></li>
        <li><Link to="/services" className="hover:text-pink-400">Services</Link></li>
        <li><Link to="/events" className="hover:text-pink-400">Events</Link></li>
        <li><Link to="/volunteer" className="hover:text-pink-400">Volunteer</Link></li>
        <li><Link to="/resources" className="hover:text-pink-400">Resources</Link></li>
        <li><Link to="/contact" className="hover:text-pink-400">Contact</Link></li>
      </ul>
    </div>

    {/* 💌 Contact Info */}
    <div className="pt-6 sm:pt-0 lg:pl-6 text-center lg:text-left">
      <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
      <p className="text-sm">📍 Hartford, Connecticut</p>
      <p className="text-sm mt-1">
        📧{" "}
        <a
          href="mailto:info@hartfordpridecenter.org"
          className="hover:text-pink-400 underline"
        >
          info@hartfordpridecenter.org
        </a>
      </p>

      {/* Social Links */}
      <div className="flex justify-center lg:justify-start items-center space-x-4 mt-6 border-t-2 border-pink-400 pt-3">
        <a
          href="https://www.instagram.com/hartfordpride/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/HartfordPrideCenter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaFacebook className="text-2xl" />
        </a>
        <a
          href="mailto:info@hartfordpridecenter.org"
          className="hover:text-pink-400"
        >
          <FaEnvelope className="text-2xl" />
        </a>
      </div>
    </div>
  </div>

  {/* 🌟 Bottom Bar */}
  <div className="mt-8 text-center text-xs text-gray-500">
    <p>
      © {new Date().getFullYear()} Hartford Pride Center — All Rights Reserved.
    </p>
    <Link to="/privacy" className="hover:text-pink-400">
      Privacy Policy
    </Link>
  </div>
</section>

      </div>
    </div>
  );
}

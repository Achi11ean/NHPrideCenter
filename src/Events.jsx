import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRainbow } from "react-icons/fa";

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <FaCalendarAlt className="text-pink-400 text-6xl mx-auto mb-3 drop-shadow-md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Upcoming Events
        </h1>
      </motion.div>

      {/* Message Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl bg-white/10 border border-pink-400 rounded-2xl shadow-2xl p-8 backdrop-blur-sm"
      >
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-4">
          🌈 We’re currently preparing for our next round of community events,
          performances, and celebrations!
        </p>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          In the meantime, check out{" "}
          <a
            href="https://karaoverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-300 font-semibold underline hover:text-pink-200 transition"
          >
            Karaoverse.com
          </a>{" "}
          for live karaoke, drag, and trivia events happening near you!
        </p>
      </motion.div>

      {/* Footer Sparkle / Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 flex flex-col items-center space-y-2"
      >
        <FaRainbow className="text-4xl text-teal-300 animate-pulse" />
        <p className="text-sm text-gray-400 italic">
          "Pride never sleeps — and neither does our community!"
        </p>
      </motion.div>
    </div>
  );
}

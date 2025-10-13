import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaHeart, FaCalendarAlt } from "react-icons/fa";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900 text-white">
      {/* Banner */}
      <section
        className="relative h-80 md:h-96 bg-cover bg-center flex items-center justify-center border-b-4 border-pink-400 shadow-2xl"
        style={{
          backgroundImage:
            "url('https://tcpride.org/wp-content/uploads/2024/02/1-3-1024x1024.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Volunteer With Us
        </motion.h1>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto text-center py-16 px-6 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-300">
          🌈 Together, We Make Change
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">
          Volunteers are the heartbeat of the{" "}
          <span className="font-semibold text-pink-400">
            New Haven Pride Center
          </span>. From event coordination to community outreach, mentorship,
          and creative programming — your energy and compassion help us grow,
          empower, and uplift the LGBTQIA+ community across Connecticut.
        </p>
      </section>

      {/* Volunteer Opportunities */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {[
          {
            title: "Event Support",
            icon: <FaCalendarAlt size={42} />,
            desc: "Help plan, set up, and coordinate events like Pride celebrations and community festivals.",
            color: "from-pink-400 to-rose-500",
          },
          {
            title: "Community Outreach",
            icon: <FaUsers size={42} />,
            desc: "Engage with local schools, partners, and organizations to spread awareness and build connection.",
            color: "from-purple-400 to-indigo-500",
          },
          {
            title: "Creative Arts",
            icon: <FaHeart size={42} />,
            desc: "Use your art, design, or storytelling talents to amplify queer voices through visuals and media.",
            color: "from-teal-400 to-emerald-500",
          },
          {
            title: "Advocacy & Education",
            icon: <FaHandsHelping size={42} />,
            desc: "Support workshops, resource development, and safe-space programs that educate and empower.",
            color: "from-blue-400 to-cyan-500",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 text-center shadow-lg bg-white/10 border border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition`}
          >
            <div
              className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-md`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-pink-200">
              {item.title}
            </h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto my-16 p-8 bg-white/10 border border-pink-400 rounded-2xl shadow-xl backdrop-blur-sm">
        <h3 className="text-2xl font-extrabold text-center mb-6 text-pink-300 underline decoration-wavy">
          Sign Up to Volunteer
        </h3>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {["name", "email", "interest"].map((field) => (
              <div key={field}>
                <label className="block mb-1 font-semibold capitalize text-pink-100">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-purple-900/60 text-white border border-pink-400 focus:ring-2 focus:ring-pink-300"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-semibold text-pink-100">
                Message (optional)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-purple-900/60 text-white border border-pink-400 focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg shadow-lg transition"
            >
              Submit Interest
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <h4 className="text-3xl font-bold text-green-300 mb-4">
              ✅ Thank You!
            </h4>
            <p className="text-lg text-gray-100">
              Your message has been received. Our volunteer coordinator will be
              in touch soon!
            </p>
          </motion.div>
        )}
      </section>

      {/* Footer CTA */}
      <div className="text-center pb-16">
        <p className="text-lg text-gray-300 mb-4">
          Ready to get started? Let’s make New Haven shine together. 🌟
        </p>
        <a
          href="mailto:volunteer@newhavenpridecenter.org"
          className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition"
        >
          Email Our Team
        </a>
      </div>
    </div>
  );
}

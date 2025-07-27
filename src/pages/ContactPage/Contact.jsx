import React, { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setStatus("success");
      else throw new Error("Ошибка отправки");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500
        px-6 py-16
      "
    >
      <div className="absolute inset-0 bg-black opacity-25" />
      <motion.div
        className="relative z-10 max-w-xl w-full bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Get in Touch
        </h2>

        {status === "success" ? (
          <motion.p
            className="text-green-200 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thanks! Your message has been sent 😊
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mpwlralj"
            method="POST"
            className="flex flex-col gap-4"
          >
            <label className="relative">
              <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="
                  w-full pl-12 pr-4 py-3
                  bg-white bg-opacity-80
                  border border-transparent
                  rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-white
                  transition
                "
                required
              />
            </label>

            <label className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="
                  w-full pl-12 pr-4 py-3
                  bg-white bg-opacity-80
                  border border-transparent
                  rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-white
                  transition
                "
                required
              />
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="
                w-full px-4 py-3
                bg-white bg-opacity-80
                border border-transparent
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-white
                transition
              "
              required
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="
                mt-4 flex items-center justify-center gap-2
                bg-white bg-opacity-90 text-indigo-700
                px-6 py-3 rounded-lg font-semibold
                hover:bg-white hover:bg-opacity-100
                focus:outline-none focus:ring-2 focus:ring-white
                transition transform
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>

            {status === "error" && (
              <motion.p
                className="text-red-200 text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Try Again!
              </motion.p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}

'use client';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzgkabo"); // replace with actual ID
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false); // Hide message and show form again
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-black via-[#0e1a42] to-black pt-[150px] text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 text-transparent bg-clip-text">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg">
              Got a project idea, question, or collaboration in mind? Let’s connect!
            </p>
            <div className="hidden md:block">
              <img
                src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02.jpg"
                alt="Contact Illustration"
                className="w-3/4 mt-6"
              />
            </div>
          </div>

          {/* Right Section */}
          {showSuccess ? (
            <div className="text-center text-green-400 font-semibold text-xl bg-white/10 p-10 rounded-xl shadow-xl">
              ✅ Message sent successfully!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl space-y-6 border border-blue-500"
            >
              <div>
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-[#0e1a42] text-white border border-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-[#0e1a42] text-white border border-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm text-gray-200">
                  <FaCommentDots /> Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-1 px-4 py-2 rounded-lg bg-[#0e1a42] text-white border border-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white font-semibold hover:scale-105 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaUsers, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import Footer from "./Footer";
import { useState } from "react";



  

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setTimeout(() => {
        setCopied(null); // Clear the "Copied!" message after 2 seconds
      }, 2000);
    });
  };

  return (
  <>
    <div className="max-w-5xl mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-4 text-center">📬 Contact Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        We’d love to hear from you! Whether it's a question, bug report, collaboration, or feedback — we're all ears at AQUAMETER.
      </p>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition hover:scale-105 cursor-pointer" onClick={() => handleCopy("contact@aquameter.tech")}>
          <FaEnvelope className="w-6 h-6 text-blue-500 mb-2" />
          <h2 className="text-lg font-semibold mb-1">Email</h2>
          <span className="flex items-start gap-2">
          <p className="text-sm">contact@aquameter.tech</p>
          {copied === "contact@aquameter.tech" && (
            <span className="mt-[2px] text-xs text-blue-600 dark:text-green-400 flex items-center justify-center">
                <FaCheckCircle className="mr-1" />
                Copied!
              </span>
            )}
            </span>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition hover:scale-105 cursor-pointer"  onClick={() => handleCopy("9696942692")}>
          <FaPhoneAlt className="w-6 h-6 text-green-500 mb-2" />
          <h2 className="text-lg font-semibold mb-1">Phone</h2>
          <span className="flex items-start gap-2">
          <p className="text-sm">+91 9696942692</p>
          {copied === "9696942692" && (
            <span className="mt-[2px] text-xs text-blue-600 dark:text-green-400 flex items-center justify-center">
                <FaCheckCircle className="mr-1" />
                Copied!
              </span>
            )}
          </span>

        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition hover:scale-105">
          <FaMapMarkerAlt className="w-6 h-6 text-red-500 mb-2" />
          <h2 className="text-lg font-semibold mb-1">Location</h2>
          <p className="text-sm">University of Lucknow, Uttar Pradesh</p>
        </div>
      </div>

      {/* Info Sections */}
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold">Support & Queries</h2>
          </div>
          <p className="text-base">
            For help with features, troubleshooting, or platform feedback — our team typically replies within 24–48 business hours.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-2">
            <FaUsers className="w-5 h-5 text-purple-500" />
            <h2 className="text-xl font-semibold">Partnerships & Media</h2>
          </div>
          <p className="text-base">
            Want to collaborate or feature AQUAMETER in your media? Reach out to{" "}
            <span className="text-blue-500">contact@aquameter.tech</span> — we’re always open to innovative ideas.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-2">
            <FaShieldAlt className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-semibold">Security Concerns</h2>
          </div>
          <p className="text-base">
            Found a vulnerability? Help us keep AQUAMETER safe by reporting it responsibly at{" "}
            <span className="text-blue-500">contact@aquameter.tech</span>.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-2">
            <MdAccessTime className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold">Office Hours</h2>
          </div>
          <ul className="list-disc pl-5">
            <li>Monday – Friday: 10:00 AM – 6:00 PM IST</li>
            <li>Closed on weekends and national holidays</li>
          </ul>
        </section>
      </div>

      <p className="text-center text-lg font-medium mt-16 mb-[-40px]">
        We look forward to connecting with you 💧
      </p>
    </div>
    <Footer />
  </>
)};

export default Contact;

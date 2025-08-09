// import { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from 'emailjs-com';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       className="bg-white shadow-xl rounded-xl p-8 space-y-6 w-full relative z-10 -mt-28"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a message</h2>
//       <p className="text-gray-600 mb-6">We'll get back to you within 24 hours</p>
      
//       <div className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="your.email@example.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="How can we help you?"
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//             className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
//             required
//           ></textarea>
//         </div>
//       </div>
      
//       <button
//         type="submit"
//         className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-medium shadow-md"
//       >
//         Send Message
//       </button>
//     </motion.form>
//   );
// }



















import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage("✅ Your message has been sent!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatusMessage("❌ Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-8 space-y-6 w-full relative z-10 -mt-28"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a message</h2>
      <p className="text-gray-600 mb-6">We'll get back to you within 24 hours</p>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name" // must match {{name}} in EmailJS template
            placeholder="Your name"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email" // must match {{email}} in EmailJS template
            placeholder="your.email@example.com"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message" // must match {{message}} in EmailJS template
            placeholder="How can we help you?"
            rows="5"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-medium shadow-md"
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>

      {statusMessage && (
        <p className="text-center mt-4 text-sm">{statusMessage}</p>
      )}
    </motion.form>
  );
}

// pages/contact.js
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="mb-4 text-center text-gray-200">
        We’d love to hear from you! Fill out the form below or reach out to us directly.
      </p>

      <form className="w-full max-w-lg bg-gradient-to-r from-purple-[#37ABE5] to-cyan-[#37ABE5] shadow-sm border-2 shadow-white rounded px-8 pt-6 pb-8 mb-4 bg-opacity-20 backdrop-blur-[3px]">
        <div className="mb-4">
          <label className="block text-white tracking-wide text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white  tracking-wide  text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-md  tracking-wide  font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-white hover:bg-gray-200 hover:text-purple-600 text-[#707AEC] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white tracking-wider">Contact Information</h2>
        <p className="text-white">Email :  <Link href="mailto:your-email@example.com" className="text-zinc-200 hover:underline">myemail@lioneart.com</Link></p>
        <p className="text-white">Phone :  <span className="text-zinc-300">+00 12345 67890</span></p>
      </div>
    </div>
  );
};

export default Contact;

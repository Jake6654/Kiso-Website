import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Form: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* left: contact info */}
      <div className="space-y-6 text-gray-700">
        {/* email */}
        <p className="flex items-center text-lg">
          <span className="font-semibold mr-2">Email:</span>
          <a
            href="mailto:uvakiso24@gmail.com"
            className="text-blue-600 underline hover:text-blue-900"
          >
            uvakiso24@gmail.com
          </a>
        </p>

        {/* Group name */}
        <p className="text-xl font-medium">
          Korean International Student Organization
        </p>

        {/* address */}
        <div className="space-y-1">
          <p>1827 University Avenue</p>
          <p>Charlottesiville VA 220903</p>
          <p>United States</p>
        </div>

        {/* social icon*/}
        <div className="flex space-x-4 text-2xl text-red-600">
          <a
            href="https://www.instagram.com/uvakiso?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-red-800"
          >
            <FaInstagram />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-800"
          > */}
            <FaYoutube />
          {/* </a> */}
        </div>

        {/* Developer credits */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Developed by:</p>
          <div className="flex flex-col space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Jaehyuk Chang</span>
              <a
                href="https://github.com/Jake6654"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jaehyuk Chang's GitHub"
                className="text-gray-500 hover:text-gray-700"
              >
                <FaGithub />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Steve Jin</span>
              <a
                href="https://github.com/hiimstevejin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Steve Jin's GitHub"
                className="text-gray-500 hover:text-gray-700"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* right: contact form */}
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Your Name:
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message:
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="I would like to ask about the F-1 visa process"
          />
        </div>

        <button
          type="submit"
          className="inline-block bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-blue-700 transition duration-500"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Form;
const Contact = () => {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions or need support? Reach out to us anytime.
      </p>
      <form className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded px-4 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded px-4 py-2 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;

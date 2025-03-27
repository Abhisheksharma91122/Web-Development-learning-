
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
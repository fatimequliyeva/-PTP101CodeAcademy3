const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto py-6 px-6 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} VegeFoods. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

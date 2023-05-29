import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-500">Your Logo</h1>
          <ul className="flex space-x-4">
            <li className="text-gray-600 hover:text-blue-500">Home</li>
            <li className="text-gray-600 hover:text-blue-500">About</li>
            <li className="text-gray-600 hover:text-blue-500">Services</li>
            <li className="text-gray-600 hover:text-blue-500">Contact</li>
          </ul>
        </nav>
      </header>

      <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.midjourney.com/7b61c62b-d782-442e-9ebc-fe34154dfe99/0_2.png')" }}>
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience the Best</h2>
          <p className="text-white text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      
      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum quam sed quam auctor, in placerat mi ultricies.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum quam sed quam auctor, in placerat mi ultricies.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Our Services
            </button>
          </div>
        </div>
      </main>

      

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const LogoPlaceholder: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Image src='/logo.png' alt="Logo" width={200} height={200} />
  </div>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" aria-label="Volver a la página principal de FinanTech">
          <LogoPlaceholder />
        </Link>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">Productos</Link>
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">Nosotros</Link>
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium">Soporte</Link>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="small">
            Sign In
          </Button>
          <Button variant="primary" size="small">
            Sign Up
          </Button>
        </div>
        <div className="md:hidden">
          <button aria-label="Abrir menú de navegación" className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
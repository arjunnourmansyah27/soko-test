import React, { useState } from "react";
import { Link } from "react-router-dom"; // Mengimpor Link dari react-router-dom

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 lg:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/img/logo-sokokutei.webp"
              alt="Sokoku Tei Logo"
              className="w-32"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-base text-[#E86403]">
          <Link to="/" className="font-bold pb-1">
            Beranda
          </Link>
          <Link to="/about" className="hover:text-[#E86403]">
            Tentang Sokoku Tei
          </Link>
          <Link to="/menu" className="hover:text-[#E86403]">
            Menu Kami
          </Link>
          <Link to="/location" className="hover:text-[#E86403]">
            Lokasi
          </Link>
          <Link to="/promo" className="hover:text-[#E86403]">
            Berita & Promo
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <button className="text-[#E86403] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white px-4 pb-4 font-semibold text-[#E86403] space-y-3">
          <Link to="/" className="block font-bold text-[#E86403]">
            Beranda
          </Link>
          <Link to="/about" className="block hover:text-[#E86403]">
          Tentang Sokoku Tei
          </Link>
          <Link to="/menu" className="block hover:text-[#E86403]">
            Menu Kami
          </Link>
          <Link to="/location" className="block hover:text-[#E86403]">
            Lokasi
          </Link>
          <Link to="/promo" className="block hover:text-[#E86403]">
            Berita & Promo
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
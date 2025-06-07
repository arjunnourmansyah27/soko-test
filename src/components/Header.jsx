import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Menambahkan fungsi untuk menutup menu saat memilih link di mobile
  const closeMobileMenu = () => setMobileMenuOpen(false);

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
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-base text-[#363636]">
          <Link
            to="/"
            className={`font-bold pb-1 ${
              location.pathname === "/" ? "text-[#E86403]" : ""
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className={`hover:text-[#E86403] ${
              location.pathname === "/about" ? "text-[#E86403]" : ""
            }`}
          >
            Tentang Sokoku Tei
          </Link>
          <Link
            to="/menu"
            className={`hover:text-[#E86403] ${
              location.pathname === "/menu" ? "text-[#E86403]" : ""
            }`}
          >
            Menu Kami
          </Link>
          <Link
            to="/location"
            className={`hover:text-[#E86403] ${
              location.pathname === "/location" ? "text-[#E86403]" : ""
            }`}
          >
            Lokasi
          </Link>
          <Link
            to="/promo"
            className={`hover:text-[#E86403] ${
              location.pathname === "/promo" ? "text-[#E86403]" : ""
            }`}
          >
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
        <nav
          className="lg:hidden bg-white px-6 py-8 font-semibold text-[#363636] space-y-5 fixed top-0 right-0 h-full w-[70%] transition-transform transform ease-in-out duration-300 z-50"
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Tombol X untuk menutup menu */}
          <div className="flex justify-end">
            <button
              onClick={closeMobileMenu}
              className="text-[#E86403] text-3xl"
            >
              &times;
            </button>
          </div>

          <Link
            to="/"
            className={`block font-bold ${
              location.pathname === "/" ? "text-[#E86403]" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className={`block hover:text-[#E86403] ${
              location.pathname === "/about" ? "text-[#E86403]" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Tentang Sokoku Tei
          </Link>
          <Link
            to="/menu"
            className={`block hover:text-[#E86403] ${
              location.pathname === "/menu" ? "text-[#E86403]" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Menu Kami
          </Link>
          <Link
            to="/location"
            className={`block hover:text-[#E86403] ${
              location.pathname === "/location" ? "text-[#E86403]" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Lokasi
          </Link>
          <Link
            to="/promo"
            className={`block hover:text-[#E86403] ${
              location.pathname === "/promo" ? "text-[#E86403]" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Berita & Promo
          </Link>

          {/* Background bawah menu */}
          <div
            className="absolute bottom-0 left-0 w-full h-52"
            style={{
              backgroundImage: "url('/img/wave.svg')", // Ganti dengan path gambar kamu
              backgroundSize: "cover", // Menyebabkan gambar menutupi seluruh elemen
              backgroundPosition: "center", // Memastikan gambar berada di tengah
              backgroundRepeat: "no-repeat", // Menghindari gambar terulang
            }}
          ></div>
        </nav>
      )}
    </header>
  );
};

export default Header;

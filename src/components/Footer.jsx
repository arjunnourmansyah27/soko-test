import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-[#E86403] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Kolom 1: Logo */}
        <div className="space-y-4">
          <img
            src="/img/sokokutei-white.webp"
            alt="Sokokutei Logo"
            className="w-28 md:w-40"
          />
        </div>

        {/* Kolom 2: PT RAJASAKA FOOD SOLUTION + Alamat */}
        <div className="colum2_footer">
          <p className="font-semibold mb-5 text-[17px]">
            PT RAJASAKA FOOD SOLUTION
          </p>
          <p className="text-[16px]">
            Jl. Perdamaian No. F12, RT.4/RW.6, Tanah Baru, Kecamatan Beji, Kota
            Depok, Jawa Barat 16426
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <a
              href="tel:+6287781965378"
              className="flex items-center space-x-2 hover:underline hover:font-bold"
            >
              <i className="fas fa-phone p-2 bg-white text-[#F17D00] rounded-full mb-2"></i>
              <span>087781965378</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="mailto:rajasakasembadadunia@gmail.com"
              className="flex items-center space-x-2 hover:underline hover:font-bold"
            >
              <i className="fas fa-envelope p-2 bg-white text-[#F17D00] rounded-full"></i>
              <span>rajasakasembadadunia@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Kolom 3: Informasi */}
        <div className="md:ml-16">
          <h4 className="font-semibold mb-4 text-[17px]">INFORMASI</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline hover:font-bold">
                Tentang Sokoku Tei
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline hover:font-bold">
                FAQ
              </Link>
            </li>
            {/* <li>
              <Link to="#" className="hover:underline hover:font-bold">
                Kontak Kami
              </Link>
            </li> */}
            {/* <li>
              <Link to="#" className="hover:underline hover:font-bold">
                Syarat & Ketentuan
              </Link>
            </li> */}
            {/* <li>
              <Link to="#" className="hover:underline hover:font-bold">
                Kebijakan Privasi
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Kolom 4: Tetap Terhubung media sosial dan Pemesanan Online */}
        <div>
          <h4 className="font-semibold mb-4 text-[17px]">TETAP TERHUBUNG</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center space-x-2">
              <a
                href="https://wa.me/6287781965378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline hover:font-bold"
              >
                <i className="fab fa-whatsapp p-2 bg-white text-[#F17D00] rounded-full"></i>
                <span>087781965378</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="https://www.instagram.com/sokokutei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline hover:font-bold"
              >
                <i className="fab fa-instagram p-2 bg-white text-[#F17D00] rounded-full"></i>
                <span>@sokokutei</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a
                href="https://www.tiktok.com/@sokokutei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline hover:font-bold"
              >
                <i className="fab fa-tiktok p-2 bg-white text-[#F17D00] rounded-full"></i>
                <span>@sokokutei</span>
              </a>
            </li>
          </ul>

          <h4 className="font-bold mb-4 text-[17px]">PEMESANAN ONLINE</h4>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.grab.com/id/food/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/ojol/grabfood.svg"
                alt="GrabFood"
                className="w-20 cursor-pointer"
              />
            </a>
            <a
              href="https://www.go-jek.com/gofood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/ojol/gofood.svg"
                alt="GoFood"
                className="w-20 cursor-pointer"
              />
            </a>
            <a
              href="https://shopee.co.id/shopeefood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/ojol/shopeefood.svg"
                alt="ShopeeFood"
                className="w-20 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="border-t border-white/30 mt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-shadow-sm text-white">
          Copyrights © 2025 Sokoku Tei (PT Rajasaka Food Solution), All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

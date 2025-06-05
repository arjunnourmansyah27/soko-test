import React, { useState } from "react";
import promoData from "../data/promoData.json";

const Promo = () => {
  const [activePromo, setActivePromo] = useState(null);

  const openModal = (promo) => setActivePromo(promo);
  const closeModal = () => setActivePromo(null);

  return (
    <section>
      {/* Header */}
      <div className="bg-[#E86403] text-white text-center py-10 relative">
        <div className="absolute inset-0 bg-[url('/img/wave.svg')] bg-repeat opacity-35"></div>
        <h2 className="relative inline-block text-2xl md:text-4xl font-extrabold bg-[url('/img/yellow.webp')] bg-no-repeat bg-cover bg-center py-2 px-8">
          Berita & Promo
        </h2>
        <p className="mt-4 text-sm md:text-lg font-light">
          Ingin tahu berita dan promo terbaru? Pastikan Anda sering mampir ke
          sini
          <br />
          untuk mendapatkan info terbaru tentang penawaran menarik dari Sokoku
          Tei
        </p>
      </div>

      {/* Card Promo */}
      <div className="py-10 px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white">
        {promoData.map((promo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 flex flex-col"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {promo.title}
                </h3>
                {promo.desc && (
                  <p className="text-gray-600 text-sm mb-3">{promo.desc}</p>
                )}
              </div>
              <button
                onClick={() => openModal(promo)}
                className="mt-auto border bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold text-white transition">
                {promo.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activePromo && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full rounded-lg overflow-hidden shadow-xl relative flex flex-col md:flex-row">
            {/* Gambar */}
            <div className="md:w-1/2 w-full">
              <img
                src={activePromo.image}
                alt={activePromo.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="p-6 md:w-1/2 w-full overflow-y-auto max-h-[90vh]">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {activePromo.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {activePromo.detail}
              </p>
            </div>

            {/* Tombol Close */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Promo;

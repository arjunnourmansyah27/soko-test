import React, { useState } from "react";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === "all"
      ? Object.values(productsData).flat()
      : productsData[selectedCategory] || [];

  return (
    <section>
      {/* Header */}
      <div className="bg-[#E86403] relative text-white py-10 md:py-9 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/wave.svg')] bg-repeat opacity-35"></div>
        <h2 className="relative inline-block text-white text-2xl md:text-4xl font-extrabold bg-[url('/img/yellow.webp')] bg-no-repeat bg-cover bg-center py-2 px-12 md:py-4 md:px-20">
          Menu Sokoku Tei
        </h2>
        <p className="mt-4 text-sm md:text-lg text-white font-light">Berikut menu yang kami
          tawarkan untuk berbagai keperluan Anda.
        </p>
        <div className="absolute top-0 right-0 w-24 h-24 bg-[url('/img/cloud-pattern.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-0 left-0 bg-[url('/img/wave2.svg')] bg-no-repeat bg-contain w-10 h-10 md:w-32 md:h-32 opacity-80"></div>
      </div>

      {/* Slider Kategori */}
      <div className="relative w-full overflow-hidden py-6 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={6}
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            className="w-full"
          >
            {categoriesData.map((cat) => (
              <SwiperSlide key={cat.id} className="flex justify-center">
                <div
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center cursor-pointer transition-transform duration-300`}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm md:text-base font-semibold text-gray-700 text-center">
                    {cat.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}

            {/* Panah Navigasi */}
            <div className="swiper-button-prev !text-[#F17D00] !p-2 z-10 " />
            <div className="swiper-button-next !text-[#F17D00] !p-2 z-10" />
          </Swiper>
        </div>
      </div>

      {/* Produk */}
      <div className="bg-white relative text-center py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-gray-500">
            Produk tidak tersedia untuk kategori ini.
          </p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-2xl hover:scale-105 p-6"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#FF7A00]">
                {item.name}
              </h3>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Menu;

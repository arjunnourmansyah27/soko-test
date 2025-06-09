import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/data/images-home.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const navigate = useNavigate();

  return (
    <section>
      {/* Slider Section 480px*/}
      <div className="md:h-[550px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="h-full">
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tentang Kami Section */}
      <div
        className="relative bg-white py-16 px-6 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/img/bg-home/home1.svg')", // motif sushi samar
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}>
        {/* Ornamen kiri */}
        <img
          src="/img/bg-home/ornamen.svg"
          alt="Ornamen"
          className="absolute top-0 left-0 w-40 md:w-56"
        />

        {/* Bulat kanan */}
        <div className="absolute bottom-8 right-8 w-14 h-14 bg-orange-600 rounded-full"></div>

        {/* Tag Tentang Kami */}
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 text-red-600 font-semibold rounded-full px-4 py-2 text-sm">
            Tentang Kami
          </div>
        </div>

        {/* Judul Besar */}
        <h2 className="text-[28px] md:text-3xl font-extrabold leading-snug mb-6">
          SEKALI COBA <span className="text-orange-400">LANGSUNG</span> JATUH
          CINTA
        </h2>

        {/* Paragraf */}
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8">
          Sokoku Tei adalah restoran yang menyajikan perpaduan cita rasa
          autentik Jepang dan Korea. Restoran ini pertama kali dibuka di TMP
          Kalibata pada November 2023 dan kini telah berkembang dengan membuka
          dua cabang lainnya, membuktikan popularitasnya di kalangan pecinta
          kuliner. Dengan suasana hangat yang diperkaya elemen tradisional dari
          kedua budaya, Sokoku Tei menjadi pilihan ideal untuk bersantap bersama
          teman, keluarga, atau rekan bisnis.
        </p>

        {/* Tombol Lihat Video */}
        <a
          href="https://www.instagram.com/reel/DDgJgRXyecT/?igsh=c2tyaTA5NWkwY2hv"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full text-sm"
        >
          LIHAT VIDEO
        </a>
      </div>

      {/* Menu Kami Section */}
      <div
        className="relative bg-white px-6 py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/img/bg-home/wave-home.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Ornamen Lingkaran Orange */}
        <div className="absolute top-[90px] right-[100px] w-24 h-24 rounded-full bg-orange-300 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Konten Kiri */}
          <div className="text-left max-w-xl">
            {/* Tag */}
            <div className="inline-block bg-yellow-400 text-red-600 font-bold px-4 py-2 rounded-full text-sm mb-4">
              Menu Kami
            </div>

            {/* Judul */}
            <h2 className="text-[28px] md:text-3xl font-extrabold text-black leading-tight mb-6">
              NIKMATI MAKANAN <br />
              JEPANG KHAS SOKOKU TEI <br />
            </h2>

            {/* Paragraf */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Hidangan yang kami sajikan memiliki citarasa tersendiri yang tidak
              dapat dijumpai di tempat lain. Dari tangan profesional yang sangat
              mengerti selera anak atau keluarga muda Indonesia, terciptalah
              menu-menu yang otentik khas Sokoku Tei.
            </p>

            {/* Tombol */}
            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full text-sm"
            >
              Lihat Menu
            </button>
          </div>

          {/* Gambar Atas di Mobile, Kanan di Desktop */}
          <div className="w-full max-w-2xl">
            <img
              src="/img/bg-home/produk.svg"
              alt="Menu Utama SOkoku Tei"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* section Lokasi sokoku Tei */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-6 bg-white relative overflow-hidden">
        {/* Background Icon Kanan */}
        <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 opacity-30">
          <img
            src="/img/bg-home/ornamen-loc.svg"
            alt="Icon Background"
            className="w-40"
          />
        </div>

        {/* Ilustrasi Map dan Maskot */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start z-10">
          <img
            src="/img/bg-home/cat-road.png"
            alt="Maskot Map"
            className="max-w-[460px] w-full"
          />
        </div>

        {/* Teks dan Tombol */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 z-10">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <div className="bg-yellow-400 text-red-600 font-bold px-3 py-1 rounded-full text-sm">
              Lokasi
            </div>
          </div>
          <h2 className="text-[28px] md:text-3xl font-extrabold text-black mb-4">
            KAMI SELALU DEKAT
          </h2>
          <p className="text-gray-500 mb-6 text-base md:text-lg">
            Cari cita rasa Jepang asli? Yuk, buruan mampir ke Sokoku Tei
            terdekat di kota Anda dan rasakan sensasi makan yang tak terlupakan!
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/location")}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300"
            >
              Lihat Lokasi
            </button>
          </div>
        </div>
      </div>

      {/* Testimoni Section */}
      <div
        className="relative bg-white px-6 py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/img/bg-home/wave-home.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Ornamen Lingkaran Orange */}
        <div className="absolute top-[90px] right-[100px] w-24 h-24 rounded-full bg-orange-300 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Konten Kiri */}
          <div className="text-left max-w-xl">
            {/* Tag */}
            <div className="inline-block bg-yellow-400 text-red-600 font-bold px-4 py-2 rounded-full text-sm mb-4">
              Testimoni Food Vlogger
            </div>

            {/* Judul */}
            <h2 className="text-[28px] md:text-3xl font-extrabold text-black leading-tight mb-6">
              TESTIMONI <br />
              MAKANAN SOKOKU TEI <br />
            </h2>

            {/* Paragraf */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Hidangan yang kami sajikan memiliki citarasa tersendiri yang tidak
              dapat dijumpai di tempat lain. Dari tangan profesional yang sangat
              mengerti selera anak atau keluarga muda Indonesia, terciptalah
              menu-menu yang otentik khas Sokoku Tei.
            </p>
          </div>

          {/* Gambar Atas di Mobile, Kanan di Desktop */}
          <div className="w-full max-w-2xl">
            <img
              src="/img/bg-home/testimoni.svg"
              alt="Menu Utama Sokoku Tei"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
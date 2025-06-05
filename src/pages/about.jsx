import React from "react";

const About = () => {
  return (
    <section id="tentang" className="relative">
      {/* Section orange Background Pattern */}
      <div className="bg-[#E86403] relative text-white py-10 md:py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/wave.svg')] bg-repeat opacity-35"></div>
        <h2 className="relative inline-block text-white text-2xl md:text-4xl font-extrabold bg-[url('/img/yellow.webp')] bg-no-repeat bg-cover bg-center py-2 px-8 md:py-4 md:px-16">
          Tentang Sokoku Tei
        </h2>

        <div className="absolute top-0 right-0 w-24 h-24 bg-[url('/img/cloud-pattern.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-0 left-0 bg-[url('/img/wave2.svg')] bg-no-repeat bg-contain w-10 h-10 md:w-32 md:h-32 opacity-80"></div>
      </div>

      {/* Section Kebahagiaan Dalam Setiap Gigitan */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-8">
        <img
          src="/img/new-maskot.svg"
          alt="Sokoku Tei Mascot"
          className="w-full md:w-3/4 max-w-xl"
        />
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-[28px] md:text-4xl text-[#E86403] font-extrabold">
            KEBAHAGIAAN <span className="text-black">DALAM</span> <br />
            <span className="text-black">SETIAP GIGITAN</span>
          </h3>

          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Sokoku Tei adalah restoran yang menyajikan perpaduan cita rasa
            autentik Jepang dan Korea. Restoran ini pertama kali dibuka di TMP
            Kalibata pada November 2023 dan kini telah berkembang dengan membuka
            dua cabang lainnya, membuktikan popularitasnya di kalangan pecinta
            kuliner. Dengan suasana hangat yang diperkaya elemen tradisional
            dari kedua budaya, Sokoku Tei menjadi pilihan ideal untuk bersantap
            bersama teman, keluarga, atau rekan bisnis. Setiap hidangan, mulai
            dari ramen Jepang hingga topokki Korea, mencerminkan kekayaan
            warisan kuliner kedua negara. Sokoku Tei berkomitmen untuk selalu
            menyajikan makanan berkualitas tinggi dengan rasa otentik. Staf yang
            ramah dan profesional siap melayani tamu dengan sepenuh hati,
            menjamin pengalaman bersantap yang istimewa dan nyaman di setiap
            kunjungan.
            <br />
          </p>
        </div>
      </div>

      {/* Sejarah Cabang Sokoku Tei */}
      <div className="bg-white flex flex-col md:flex-row-reverse items-center justify-center px-6 py-16 gap-8">
        <img
          src="/img/cabang.svg"
          alt="Sertifikasi Halal"
          className="w-full md:w-3/5 max-w-md"
        />
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-[#E86403] text-2xl md:text-3xl font-extrabold">
            MAKANAN JEPANG & KOREA <span className="text-black">KEKINIAN</span>
            <span className="text-black"> DENGAN HARGA TERJANGKAU</span>
          </h3>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Sokoku Tei hadir sebagai destinasi kuliner yang menyajikan hidangan
            Jepang dan Korea autentik dengan sentuhan modern, tanpa menguras
            kantong. Dengan konsep yang menyasar semua kalangan, restoran ini
            menawarkan menu lezat seperti ramen, donburi, katsu, dan tteokbokki,
            yang cocok untuk dinikmati bersama teman, keluarga, atau pasangan.
            Harga yang bersahabat menjadikan Sokoku Tei pilihan tepat bagi Anda
            yang ingin menikmati cita rasa Asia Timur tanpa perlu merogoh kocek
            dalam-dalam.
            <br />
          </p>
        </div>
      </div>

      {/* Wujudkan Momen Bersantap Yang Berkesan Section */}
      <div className="bg-[url('/img/bg-about.svg')] bg-no-repeat bg-cover py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            RASAKAN KEHANGATAN
            <br /> DALAM SETIAP SUAPAN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img src="/img/img-abt/icon-1.png" className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Menu Beragam
              </h3>
              <p className="text-gray-600 font-extralight">
                Selain Ramen, kami menghadirkan beragam menu makanan
                Jepang&Korea yang menggugah selera, antara lain katsu yang
                menjadi salah satu menu best-seller kami. Di Sokoku Tei, selalu
                ada makanan favorit untuk semua orang.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/img-abt/icon-2.png"
                  alt="Ciptakan Keceriaan"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ciptakan Keceriaan Bersama Kami
              </h3>
              <p className="text-gray-600 font-extralight">
                Dijamin, momen bersantap bersama teman, keluarga, atau pasangan
                akan semakin ceria dan berkesan. Nikmati hidangan Jepang dan
                Korea yang lezat, halal, dan aman, sambil menciptakan kenangan
                indah bersama orang-orang terkasih.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <img
                  src="/img/img-abt/icon-3.png"
                  alt="Pelayanan Sehangat Ichikuma"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kehangatan dalam Setiap Layanan
              </h3>
              <p className="text-gray-600 font-extralight">
                Kami percaya bahwa setiap pelanggan adalah bagian dari keluarga
                besar kami. Oleh karena itu, kami berkomitmen untuk memberikan
                pelayanan yang sigap, ramah, dan penuh perhatian, memastikan
                setiap kunjungan Anda menjadi pengalaman yang menyenangkan dan
                berkesan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

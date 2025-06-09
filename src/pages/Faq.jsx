import React, { useState, useEffect } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  // Fetch FAQ data from the JSON file
  useEffect(() => {
    fetch("/data/faq-data.json")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  // Toggle accordion functionality
  const toggleAccordion = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  return (
    <div>
      {/* Bagian Header */}
      <div className="bg-[#E86403] relative text-white py-10 md:py-9 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/wave.svg')] bg-repeat opacity-35"></div>
        <h2 className="relative inline-block text-white text-2xl md:text-4xl font-extrabold bg-[url('/img/yellow.webp')] bg-no-repeat bg-cover bg-center py-2 px-32 md:py-4 md:px-52">
          F A Q
        </h2>
        <p className="mt-4 text-sm md:text-lg text-white font-light">
          Temukan jawaban atas pertanyaan yang sering diajukan mengenai layanan,
          produk, pemesanan, dan lainnya.
        </p>
        <div className="absolute top-0 right-0 w-24 h-24 bg-[url('/img/cloud-pattern.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-0 left-0 bg-[url('/img/wave2.svg')] bg-no-repeat bg-contain w-10 h-10 md:w-32 md:h-32 opacity-80"></div>
      </div>

      {/* Bagian FAQ */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-orange-200 pb-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200 transition rounded-lg"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-gray-700 text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    faq.isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="#F17D00"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {faq.isOpen && (
                <div className="px-4 pb-4">
                  <div
                    className="text-gray-600 mt-2"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
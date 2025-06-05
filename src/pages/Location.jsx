import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Mengganti ikon default Leaflet dengan ikon kustom
const customIcon = new L.Icon({
  iconUrl: "/img/lok.png", // Path relatif ke ikon yang ada di folder public/img
  iconSize: [62, 62], // Ukuran ikon (lebar x tinggi)
  iconAnchor: [16, 32], // Titik jangkar ikon (tengah bawah)
  popupAnchor: [0, -32], // Posisi popup relatif terhadap ikon
});

const Location = () => {
  const [outlets, setOutlets] = useState([]);
  const [loading, setLoading] = useState(true);
  const mapCenter = [-6.2, 106.85]; // Jakarta

  useEffect(() => {
    const fetchOutlets = async () => {
      try {
        const response = await fetch("/src/data/outlets.json");
        const data = await response.json();
        setOutlets(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchOutlets();
  }, []);

  return (
    <section>
      {/* Header */}
      <div className="bg-[#E86403] relative text-white py-10 md:py-9 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/wave.svg')] bg-repeat opacity-35"></div>
        <h2 className="relative inline-block text-white text-2xl md:text-4xl font-extrabold bg-[url('/img/yellow.webp')] bg-no-repeat bg-cover bg-center py-2 px-32 md:py-4 md:px-44">
          Outlet
        </h2>
        <p className="mt-4 text-sm md:text-lg text-white font-light">
          Temukan kami di lokasi yang Anda inginkan.
          <br />
          Apapun kebutuhan Anda, kami siap melayani Anda. Berikut menu yang kami
          tawarkan untuk berbagai keperluan Anda.
        </p>
        <div className="absolute top-0 right-0 w-24 h-24 bg-[url('/img/cloud-pattern.svg')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-0 left-0 bg-[url('/img/wave2.svg')] bg-no-repeat bg-contain w-10 h-10 md:w-32 md:h-32 opacity-80"></div>
      </div>

      {/* Map & Outlet Info */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div>Loading... tunggu sebentar yaa</div>
        ) : (
          <>
            <MapContainer
              center={mapCenter}
              zoom={11}
              scrollWheelZoom={true}
              style={{ height: "300px", width: "100%", zIndex: 0 }}
              className="rounded shadow-md"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {outlets.map((outlet) => (
                <Marker
                  key={outlet.id}
                  position={[outlet.lat, outlet.lng]}
                  icon={customIcon} // Menggunakan ikon kustom
                >
                  <Popup>{outlet.name}</Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* card outlet */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-14 md:mb-16 mt-10">
              {outlets.map((outlet) => (
                <div
                  key={outlet.id}
                  className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#F17D00] mb-2">
                    {outlet.name}
                  </h3>
                  <p className="text-sm text-gray-700">{outlet.address}</p>

                  {/* <div className="flex items-center mt-3 text-sm text-gray-800">
                    <i className="fas fa-phone-alt text-[#F17D00] mr-2"></i>
                    <span>{outlet.phone}</span>
                  </div> */}

                  <a
                    href={outlet.map_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-green-500 text-white text-sm rounded-full font-semibold hover:bg-green-600 transition duration-300"
                  >
                    <i className="fas fa-map-marker-alt mr-2"></i>Lihat Peta
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Location;
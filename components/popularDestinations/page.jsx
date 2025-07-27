import React from "react";

const PopularDestinations = () => {
  const popularDestinations = [
    {
      title: "Vožnje po Nišu i okolini",
      description: "Brzi taxi prevoz u Nišu i okolini",
      icon: "🏙️",
      keywords: ["taxi niš centar", "taksi niš", "prvi taxi niš", "taxi vožnje niš"]
    },
    {
      title: "Taxi Aerodrom",
      description: "Prevoz do svih aerodroma",
      icon: "✈️",
      keywords: ["taxi aerodrom niš", "taksi aerodrom", "prvi taxi aerodrom"]
    },
    {
      title: "Taxi Beograd",
      description: "Prevoz od Niša do Beograda",
      icon: "🏛️",
      keywords: ["taxi beograd niš", "taksi beograd", "prvi taxi beograd"]
    },
    {
      title: "Taxi Banje",
      description: "Prevoz do banja i planina",
      icon: "🏔️",
      keywords: ["taxi banje niš", "taksi banje", "prvi taxi banje"]
    },
    {
      title: "Taxi 24/7",
      description: "Dostupni 24 sata dnevno",
      icon: "🕐",
      keywords: ["taxi 24/7 niš", "taksi 24/7", "prvi taxi 24/7"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Popularne <span className="text-cool-green">taxi destinacije</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Cool Taxi Niš - prvi taxi koji stiže na poziv. Pouzdan partner za sve vaše putovanja. Brz, siguran i ekološki prevoz 24/7.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {popularDestinations.slice(0, 3).map((dest, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{dest.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">
                  {dest.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {dest.description}
                </p>

              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {popularDestinations.slice(3).map((dest, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4 text-center">{dest.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">
                  {dest.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {dest.description}
                </p>

              </div>
            ))}
          </div>

    
        </div>
      </div>

      {/* Strukturirani podaci za SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Popularne taxi destinacije iz Niša",
            "description": "Cool Taxi Niš - prvi taxi koji stiže na poziv. Pouzdan taxi prevoz do svih destinacija. Brz, siguran i ekološki prevoz 24/7.",
            "itemListElement": popularDestinations.map((dest, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": dest.title,
                "description": dest.description,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Cool Taxi Niš"
                }
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default PopularDestinations; 
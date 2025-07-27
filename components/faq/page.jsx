"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Koje su cene taxi vožnje u Nišu?",
      answer: "Cene taxi vožnje u Nišu - start 150 RSD, 70 RSD po kilometru. Za detaljne cene do različitih destinacija pozovite nas telefonom."
    },
    {
      question: "Da li Cool Taxi radi 24/7?",
      answer: "Da, Cool Taxi Niš radi 24 sata dnevno, 7 dana u nedelji. Možete nas pozvati u bilo koje doba dana i noći i uvek smo prvi taxi na adresi ."
    },
    {
      question: "Koji su brojevi za poziv Cool Taxi Niš?",
      answer: "Možete nas pozvati na sledeće brojeve: 19711, 065/97 197 11 (MTS), 069/197 11 11 (Yettel), 060/32 197 11 (A1) ili putem Viber aplikacije."
    },
    {
      question: "Da li imate aplikaciju za naručivanje?",
      answer: "Da, Cool Taxi Niš ima svoju mobilnu aplikaciju dostupnu na Google Play Store i App Store. Možete je preuzeti i naručiti vožnju direktno iz aplikacije."
    },
    {
      question: "Da li vozite do aerodroma?",
      answer: "Da, Cool Taxi Niš vozi do svih aerodroma u regionu. Aerodrom Beograd, aerodrom Skoplje, aerodrom Sofija"
    },
    {
      question: "Koja vozila koristite?",
      answer: "Cool Taxi Niš koristi isključivo hibridna i električna vozila novije proizvodnje, što osigurava udobnu, tihu i ekološki odgovornu vožnju."
    },
    {
      question: "Da li naplaćujete prtljag?",
      answer: "Ne, Cool Taxi Niš ne naplaćuje prtljag. Možete nositi svoj prtljag bez dodatnih troškova."
    },
    {
      question: "Da li možete rezervisati vožnju unapred?",
      answer: "Da, možete rezervisati vožnju unapred pozivom ili putem naše mobilne aplikacije."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12">
          Često postavljena <span className="text-cool-green">pitanja</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-100 p-6 text-left rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-cool-green"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-cool-green text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`bg-white mt-2 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-gray-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strukturirani podaci za FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQ; 
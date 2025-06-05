"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "RAW RECORDS",
      content:
        "Bienvenue dans l'univers de RAW RECORDS. Un label indépendant, brut, 100% porté par la commu. On révèle les talents sans major, sans filtre, sans barrière.",
      icon: "fa-record-vinyl",
      image: "/images/accueil.png",
      showImage: true,
      showIcon: true,
    },
    {
      title: "CONCEPT RÉSUMÉ",
      content:
        "Label 2.0 collaboratif. Les artistes envoient leurs sons. La commu vote. Le meilleur est propulsé : prod, clip, coaching, sans contrat. Chaque mois un nouveau talent est mis en avant",
      icon: "fa-bullseye",
      showImage: false,
      showIcon: true,
    },
    {
        title: "LE CONCEPT DÉTAILLÉ",
        isFeatureDetail: true,
        icon: "fa-lightbulb",
        content: [
            {
                title: "1. SOUMISSION",
                description: "Les artistes indépendants soumettent leurs sons.",
                icon: "fa-music",
                key: "soumission",
            },
            {
                title: "2. VOTE",
                description: "La communauté vote pour son favori.",
                icon: "fa-vote-yea",
                key: "vote",
            },
            {
                title: "3. PRODUCTION",
                description: "Le gagnant reçoit prod, clip, coaching express.",
                icon: "fa-headphones",
                key: "production",
            },
            {
                title: "4. PROMOTION",
                description: "L’artiste est mis en avant par Inox et la commu.",
                icon: "fa-bullhorn",
                key: "promotion",
            },
        ],
    },

    {
      title: "SYSTÈME DE VOTE",
      content:
        "Un vote=une voix. Chaque semaine tu peux voter pour l'artiste de ton choix. Un seul vote par semaine. Pas de spam possible, que de vrais soutiens",
      icon: "fa-vote-yea",
      showImage: false,
      showIcon: true,
    },
      {
        title: "RAW POINTS",
        isRewardsDetail: true,
        icon: "fa-star",
        showIcon: true,
        content: [
          {
            title: "🔥 ACTIONS QUOTIDIENNES",
            items: [
              "📣 Partage sur Insta/TikTok → +10 pts",
              "🎧 Écoute sur Spotify → +10 pts", 
              "📺 Regarde un clip YouTube → +10 pts",
              "🗳️ Vote pour un artiste → +20 pts",
              "🎟️ Achète un badge/NFT → +50 pts",
              "🎤 Participe à un défi musical → +100 pts",
              "🛍️ Achète un badge / merch → +100 pts"
            ]
          }
        ]
      },


        {
          title: "RÉCOMPENSES RAW",
          isRewardsDetail: true,
          icon: "fa-gift",
          showIcon: true,
          content: [
            {
              title: "CATALOGUE DE RÉCOMPENSES",
              items: [
                "🎫 Billet RAW LIVE = 100 pts",
                "👕 T-shirt RAW LIMITED = 200 pts",
                "📞 Appel vocal avec un artiste = 300 pts",
                "🎹 Prod exclusive ou session studio = 500 pts"
              ]
            }
          ]
        },


    {
      title: "POURQUOI ÇA TUE ?",
      isFeatureDetail: true,
      icon: "fa-fire",
      content: [
        {
          title: "PAS UN LABEL CLASSIQUE",
          description:
            "Oublie les contrats qui t'enferment. Ici c'est RAW, sans filtre, sans contrainte.",
          icon: "fa-handshake-slash",
          key: "different",
        },
        {
          title: "ARTISTE 100% LIBRE",
          description:
            "Garde tes droits, ton identité, ta liberté. On te boost sans t'enchainer.",
          icon: "fa-dove",
          key: "freedom",
        },
        {
          title: "LA COMMU AUX COMMANDES",
          description:
            "Vous votez, vous décidez. Chaque mois, un nouveau talent émerge grâce à vous.",
          icon: "fa-users",
          key: "community",
        },
      ],
    },    
    {
      title: "ON CHERCHE DES ALLIÉS",
      content:
        "On a le concept, l'énergie, la vision. Avec un coup de pouce, RAW RECORDS change les règles. Vous venez ?",
      icon: "fa-handshake-angle",
      showImage: false,
      showIcon: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];
  const isConceptDetail = slide.isConceptDetail;
  const isFeatureDetail = slide.isFeatureDetail;
  const isImageSlide = slide.showImage;
  const showIcon = slide.showIcon;

  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl h-auto bg-[#1E1E1E] rounded-2xl p-6 text-white shadow-2xl flex flex-col justify-between"
        >
          {/* Pagination */}
          <div className="absolute top-2 right-4 text-xs font-mono text-gray-400">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Contenu central */}
          <div className="flex flex-col items-center text-center gap-4">
            {slide.isRewardsDetail ? (
              <>
                  {showIcon && (
                      <i className={`fas ${slide.icon} text-4xl text-red-500`} />
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug">{slide.title}</h2>

                  <div className="w-full flex flex-col gap-6">
                      {slide.content.map((section, index) => (
                          <div
                              key={index}
                              className="bg-[#2A2A2A] p-4 rounded-xl shadow-inner w-full text-left"
                          >
                              <h3 className="text-white font-semibold text-lg mb-2 text-center uppercase tracking-wide">

                                  {section.title}
                              </h3>
                              <ul className="text-[15px] text-gray-300 list-none text-center space-y-2">
                                  {section.items.map((item, i) => (
                                      <li key={i}>{item}</li>
                                  ))}
                              </ul>
                          </div>
                      ))}
                  </div>
              </>
            ) : isFeatureDetail ? (

              <>
                <i className={`fas ${slide.icon} text-4xl text-red-500`} />
                <h2 className="text-xl md:text-2xl font-bold">{slide.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 w-full">
                  {slide.content.map((item) => (
                    <div
                      key={item.key}
                      className="flex flex-col items-center bg-[#2A2A2A] rounded-xl p-4 shadow-inner text-sm transition hover:scale-105 duration-300"
                    >
                      <i className={`fas ${item.icon} text-xl text-red-400 mb-1`} />
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-base md:text-[17px] text-gray-300 leading-relaxed text-center"> {item.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : isConceptDetail ? (
              <>
                <i className={`fas ${slide.icon} text-4xl text-red-500`} />
                <h2 className="text-xl md:text-2xl font-bold">{slide.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 w-full">
                  {slide.content.map((step) => (
                    <div
                      key={step.key}
                      className="flex flex-col items-center bg-[#2A2A2A] rounded-xl p-4 shadow-inner text-sm transition hover:scale-105 duration-300"
                    >
                      <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-3 border border-gray-600">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <i className={`fas ${step.icon} text-xl text-red-400 mb-1`} />
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-300 text-center">{step.description}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {isImageSlide && (
                  <img
                    src={slide.image}
                    alt="Slide visuel"
                    className="w-full h-[200px] object-cover rounded-lg border border-gray-700 shadow-md"
                  />
                )}
                {showIcon && (
                  <i className={`fas ${slide.icon} text-4xl text-red-500`} />
                )}
                <h2 className="text-xl md:text-2xl font-bold">{slide.title}</h2>
                <p
                  className={`${
                    ["RAW RECORDS", "CONCEPT RÉSUMÉ", "SYSTÈME DE VOTE", "ON CHERCHE DES ALLIÉS"].includes(slide.title)
                      ? "text-base md:text-[17px]"
                      : "text-sm"
                  } text-gray-300 leading-relaxed max-w-xl text-center`}
                >
                  {slide.content}
                </p>

              </>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={prevSlide}
              className="text-red-500 font-semibold hover:underline transition-transform hover:scale-105"
            >
              ⬅ Précédent
            </button>
            <button
              onClick={nextSlide}
              className="text-red-500 font-semibold hover:underline transition-transform hover:scale-105"
            >
              Suivant ➡
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

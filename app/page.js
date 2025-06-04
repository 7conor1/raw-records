
"use client";

import { motion } from "framer-motion";
import Pitch from "@/components/Pitch";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Home() {
  return (
    <>
      {/* BACKGROUND FIXED GLOBALEMENT */}
      <div className="fixed inset-0 z-0">
        <img
          src="/glitch-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENU PAR-DESSUS LE FOND */}
      <main className="relative z-10">

        {/* HERO */}
        <div className="min-h-screen text-white px-6 py-20 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-extrabold tracking-wider text-red-600"
          >
            RAW <br className="md:hidden" /> RECORDS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl max-w-2xl mt-6"
          >
            Le <strong>label 2.0</strong> qui propulse les <strong>talents bruts</strong>, choisis <strong>par la communauté</strong>. Zéro contrat. Zéro barrière. 100% son, défi, et magie collective.
          </motion.p>

          {/* PITCH INTERACTIF */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 w-full max-w-4xl z-10"
          >
            <Pitch />
          </motion.div>

          {/* BOUTON CTA */}
          <motion.a
            href="#rejoindre"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition flex items-center gap-2 shadow-lg"
          >
            🚀 Je veux propulser mon son
          </motion.a>
        </div>


        {/* COMMENT ÇA MARCHE */}
        <section className="bg-black/80 backdrop-blur-sm text-white py-20 px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">🎯 Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎵",
                title: "1. Balance ton son",
                desc: "Chaque mois, tu peux envoyer ta démo. Pas de filtre, pas de piston. Juste ton talent.",
              },
              {
                icon: "🗳️",
                title: "2. Le public décide",
                desc: "La commu vote pour son son préféré. Si t’es choisi, t’es mis en lumière.",
              },
              {
                icon: "🚀",
                title: "3. On te propulse",
                desc: "Studio, clip, coaching, visibilité XXL. Avec Inox. Sans contrat. En 48h chrono.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f0f]/90 border border-neutral-800 p-6 rounded-2xl shadow-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORMULAIRE */}
        <section
          id="rejoindre"
          className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#1f1f1f] text-white py-20 px-6 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-red-500">
            🎤 Tu veux participer ?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-gray-300">
            Envoie-nous ta démo + ton Insta. Si la vibe est là, on te capte. On s'occupe du reste.
          </p>
          <form className="w-full max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Nom d'artiste"
              className="w-full px-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Lien de ta démo (SoundCloud, YouTube…)"
              className="w-full px-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Ton Insta (facultatif)"
              className="w-full px-4 py-3 rounded-lg bg-[#111] text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              🔥 Envoyer ma démo
            </button>
          </form>
        </section>

        {/* COMPTEUR AMÉLIORÉ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center text-white bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#1f1f1f] py-12 px-4 rounded-xl shadow-xl max-w-2xl mx-auto"
        >
          <h3 className="text-5xl font-bold tracking-wide mb-2">
            +<span className="text-red-500">450</span> candidatures envoyées
          </h3>
          <p className="text-lg text-gray-300">et des milliers de votes chaque mois</p>
        </motion.div>

        {/* ARTISTES EN VEDETTE */}
        <section className="bg-[#0f0f0f]/80 backdrop-blur-sm text-white py-20 px-6 mt-16 border-t border-[#1f1f1f]">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-500">
            🌟 Ils ont explosé avec nous
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {artistes.map((artist, i) => (
              <div
                key={i}
                className="bg-[#121212]/90 border border-[#1f1f1f] p-6 rounded-xl shadow-md text-center transition hover:scale-105 duration-300"
              >
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border border-red-600"
                />
                <h3 className="text-xl font-semibold text-white">{artist.name}</h3>
                <p className="text-gray-400 text-sm mt-2 italic">"{artist.quote}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

// Juste avant ce return (dans ton composant)
const artistes = [
  {
    name: "Luna R",
    img: "/artists/luna.jpg",
    quote: "Grâce à RAW RECORDS, j’ai pu sortir mon 1er clip en 48h. Lourd !",
  },
  {
    name: "SKYZ",
    img: "/artists/skyz.jpg",
    quote: "Inox a partagé mon son, ma vie a changé en une semaine !",
  },
  {
    name: "Yannis D",
    img: "/artists/yannis.jpg",
    quote: "On m’a coaché, produit et shooté sans signer aucun contrat.",
  },
];


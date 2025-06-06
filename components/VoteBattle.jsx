"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function VoteBattleV2() {
  const [votes, setVotes] = useState({
    luna: 57,
    skyz: 43,
    yannis: 25,
  });
  const [showProgress, setShowProgress] = useState(false);

  const total = votes.luna + votes.skyz + votes.yannis;

  const handleVote = (artist) => {
    setVotes((prev) => ({
      ...prev,
      [artist]: prev[artist] + 1,
    }));
  };

  return (
    <section className="bg-[#0f0f0f]/80 backdrop-blur-md text-white py-20 px-6 border-t border-[#1f1f1f]">
      <div className="text-center mb-10">
        <i className="fas fa-bolt text-yellow-500 text-4xl animate-pulse mb-2" />
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
          Battle RAW
        </h2>
        <p className="text-gray-400 mt-2">Qui mérite le spotlight cette semaine ?</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* ARTIST 1 */}
        <div className="battle-card bg-gradient-to-b from-[#2A2A2A] to-[#222] rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Luna R</h3>
          <div className="aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Luna R"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-500">
              {Math.round((votes.luna / total) * 100)}%
            </div>
            <button
              onClick={() => handleVote("luna")}
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              VOTER
            </button>
          </div>
        </div>

        {/* ARTIST 2 */}
        <div className="battle-card bg-gradient-to-b from-[#2A2A2A] to-[#222] rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">SKYZ</h3>
          <div className="aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="SKYZ"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-yellow-400">
              {Math.round((votes.skyz / total) * 100)}%
            </div>
            <button
              onClick={() => handleVote("skyz")}
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              VOTER
            </button>
          </div>
        </div>

        {/* ARTIST 3 */}
        <div className="battle-card bg-gradient-to-b from-[#2A2A2A] to-[#222] rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Yannis D</h3>
          <div className="aspect-video mb-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="Yannis D"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-green-400">
              {Math.round((votes.yannis / total) * 100)}%
            </div>
            <button
              onClick={() => handleVote("yannis")}
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-red-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              VOTER
            </button>
          </div>
        </div>
      </div>

      {/* Toggle visualisation button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowProgress((prev) => !prev)}
          className="text-sm text-yellow-400 underline hover:text-yellow-300"
        >
          {showProgress ? "Masquer l'évolution des votes" : "Voir l'évolution des votes"}
        </button>
      </div>

      {/* Vote progress */}
      {showProgress && (
        <div className="mt-10 max-w-2xl mx-auto space-y-6">
          {["luna", "skyz", "yannis"].map((artistKey, i) => {
            const artist = {
              luna: { name: "Luna R", color: "#e50914" },
              skyz: { name: "SKYZ", color: "#facc15" },
              yannis: { name: "Yannis D", color: "#4ade80" },
            }[artistKey];
            const percent = total > 0 ? (votes[artistKey] / total) * 100 : 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4 bg-[#1c1c1c] p-4 rounded-xl shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold border-2 border-red-500">
                  {artist.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">{artist.name}</span>
                    <span className="text-gray-400">
                      {votes[artistKey]} votes ({Math.round(percent)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/30 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: artist.color,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}

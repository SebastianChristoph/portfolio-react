// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Erster Child: Beispielsweise ein Willkommensbereich */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Willkommen!</h1>
          <p className="text-lg">Entdecke meine Projekte und Skills.</p>
        </div>
      </div>

      {/* Zweiter Child: Enthält die 2 Call-to-Action Buttons */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Aktion 1
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Aktion 2
          </button>
        </div>
      </div>

      {/* Dritter Child: Alternativ weitere Inhalte */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Jetzt durchstarten!</h2>
          <p className="text-lg">Lass uns gemeinsam etwas bewegen.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

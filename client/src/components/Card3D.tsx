import { useState } from "react";
import { Copy } from "lucide-react";

interface Card3DProps {
  cardNumber: string;
  holderName: string;
  balance: number;
  lastUsed: string;
}

export default function Card3D({
  cardNumber,
  holderName,
  balance,
  lastUsed,
}: Card3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rotateX = mousePosition.y * 5;
  const rotateY = mousePosition.x * 5;

  return (
    <div
      className="perspective w-full max-w-md mx-auto cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-64 transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isFlipped ? "rotateY(180deg)" : ""
          }`,
        }}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl shadow-glow-lg p-8 text-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex flex-col justify-between h-full">
            {/* Top Section */}
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-blue-200 text-xs mb-1">TARJETA DE TRANSPORTE</p>
                  <h2 className="text-2xl font-bold">TransitCard</h2>
                </div>
                <div className="text-right">
                  <p className="text-blue-200 text-xs">Quinta Región</p>
                  <p className="text-lg font-semibold">Activa</p>
                </div>
              </div>

              {/* Holder Name */}
              <div>
                <p className="text-blue-200 text-xs mb-1">TITULAR</p>
                <p className="text-xl font-semibold">{holderName}</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div>
              {/* Card Number */}
              <div className="mb-4 flex items-center justify-between bg-blue-800 bg-opacity-50 rounded px-3 py-2 group cursor-pointer hover:bg-opacity-70 transition-all">
                <p className="font-mono text-sm">{cardNumber}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy();
                  }}
                  className={`ml-2 p-1 rounded transition-all transform hover:scale-110 ${
                    copied ? "bg-green-500" : "hover:bg-blue-700"
                  }`}
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Expiry and Last Used */}
              <div className="flex justify-between text-xs text-blue-200">
                <div>
                  <p>VÁLIDA HASTA</p>
                  <p className="font-semibold">12/2026</p>
                </div>
                <div>
                  <p>ÚLTIMA TRANSACCIÓN</p>
                  <p className="font-semibold">{lastUsed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-glow-lg p-8 text-white flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full bg-black/30 rounded p-4 mb-4">
            <p className="text-blue-200 text-xs mb-2">CVV</p>
            <p className="text-2xl font-bold tracking-widest">•••</p>
          </div>
          <p className="text-center text-blue-100 text-sm">
            Haz clic para ver el frente de la tarjeta
          </p>
          <div className="mt-6 text-center">
            <p className="text-blue-200 text-xs">SALDO DISPONIBLE</p>
            <p className="text-3xl font-bold text-green-400">
              ${balance.toLocaleString("es-CL")}
            </p>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <p className="text-center text-gray-600 text-xs mt-4">
        Haz clic o mueve el mouse para interactuar
      </p>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Card3D from "@/components/Card3D";

export default function Card() {
  const [, setLocation] = useLocation();

  const cardData = {
    id: "TRX-5R-2024-001847",
    balance: 10000,
    holderName: "Usuario Demo",
    lastUsed: "Hoy a las 14:32",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="ghost"
            className="text-white hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Mi Tarjeta</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-2xl mx-auto">
        {/* 3D Card Component */}
        <div className="mb-8 animate-slide-in-up">
          <Card3D
            cardNumber={cardData.id}
            holderName={cardData.holderName}
            balance={cardData.balance}
            lastUsed={cardData.lastUsed}
          />
        </div>

        {/* Balance Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-gray-600 text-sm mb-2">Saldo Disponible</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-green-600">
              ${cardData.balance.toLocaleString("es-CL")}
            </span>
            <span className="text-gray-600">CLP</span>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Última actualización: Hace 2 minutos
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 stagger-item" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-xs mb-1">ESTADO</p>
            <p className="text-lg font-semibold text-green-600">Activa</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
            <p className="text-gray-600 text-xs mb-1">TIPO DE TARJETA</p>
            <p className="text-lg font-semibold text-blue-600">Transporte Público</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6 animate-slide-in-up" style={{ animationDelay: "0.35s" }}>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">💡 Tip:</span> Haz clic o mueve el mouse sobre tu tarjeta para ver más detalles.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => setLocation("/recharge")}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
          >
            Recargar Saldo
          </Button>
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="outline"
            className="flex-1 py-6 text-lg font-semibold"
          >
            Volver
          </Button>
        </div>
      </div>
    </div>
  );
}

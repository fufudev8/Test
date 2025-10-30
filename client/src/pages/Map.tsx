import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, MapPin, Bus } from "lucide-react";
import { useState } from "react";

export default function Map() {
  const [, setLocation] = useLocation();
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const routes = [
    {
      id: "route-1",
      number: "101",
      name: "Valparaíso - Viña del Mar",
      color: "bg-red-500",
      stops: ["Centro", "Puerto", "Playa Ancha", "Viña del Mar"],
      status: "En servicio",
    },
    {
      id: "route-2",
      number: "202",
      name: "Valparaíso - Quilpué",
      color: "bg-blue-500",
      stops: ["Centro", "Barrio Puerto", "Quilpué Centro"],
      status: "En servicio",
    },
    {
      id: "route-3",
      number: "303",
      name: "Viña del Mar - Villa Alemana",
      color: "bg-green-500",
      stops: ["Viña Centro", "Reñaca", "Villa Alemana"],
      status: "En servicio",
    },
    {
      id: "route-4",
      number: "404",
      name: "Valparaíso - Limache",
      color: "bg-yellow-500",
      stops: ["Centro", "Barrio Histórico", "Limache"],
      status: "En servicio",
    },
    {
      id: "route-5",
      number: "505",
      name: "Viña del Mar - Concón",
      color: "bg-purple-500",
      stops: ["Viña Centro", "Reñaca", "Concón"],
      status: "En servicio",
    },
    {
      id: "route-6",
      number: "606",
      name: "Quilpué - Villa Alemana",
      color: "bg-pink-500",
      stops: ["Quilpué Centro", "Villa Alemana Centro"],
      status: "En servicio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
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
          <h1 className="text-2xl font-bold">Mapa de Rutas</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Map Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 h-96 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-50" />
              <p className="text-gray-600 font-semibold">
                Mapa de la Quinta Región
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Valparaíso, Viña del Mar, Quilpué, Villa Alemana, Limache y Concón
              </p>
            </div>
          </div>

          {/* Decorative route lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
            <line x1="20%" y1="20%" x2="80%" y2="40%" stroke="#3b82f6" strokeWidth="2" opacity="0.3" />
            <line x1="20%" y1="40%" x2="80%" y2="60%" stroke="#ef4444" strokeWidth="2" opacity="0.3" />
            <line x1="30%" y1="60%" x2="70%" y2="80%" stroke="#10b981" strokeWidth="2" opacity="0.3" />
            <circle cx="20%" cy="20%" r="4" fill="#3b82f6" />
            <circle cx="80%" cy="40%" r="4" fill="#3b82f6" />
            <circle cx="80%" cy="60%" r="4" fill="#ef4444" />
            <circle cx="70%" cy="80%" r="4" fill="#10b981" />
          </svg>
        </div>

        {/* Routes List */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Bus className="w-5 h-5" />
            Rutas Disponibles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() =>
                  setSelectedRoute(selectedRoute === route.id ? null : route.id)
                }
                className={`p-4 rounded-xl transition-all text-left border-2 ${
                  selectedRoute === route.id
                    ? "border-blue-600 bg-blue-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className={`${route.color} text-white font-bold rounded-lg px-3 py-1 text-sm`}>
                    {route.number}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{route.name}</p>
                    <p className="text-xs text-green-600 font-semibold">
                      {route.status}
                    </p>
                  </div>
                </div>

                {selectedRoute === route.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      Paradas:
                    </p>
                    <div className="space-y-1">
                      {route.stops.map((stop, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <MapPin className="w-3 h-3 text-blue-600" />
                          <span className="text-gray-700">{stop}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Información:</span> Todas las rutas
            mostradas están operativas en la Quinta Región. Haz clic en una ruta
            para ver sus paradas.
          </p>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Leyenda</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {routes.slice(0, 3).map((route) => (
              <div key={route.id} className="flex items-center gap-2">
                <div className={`${route.color} w-4 h-4 rounded`} />
                <span className="text-sm text-gray-700">Ruta {route.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => setLocation("/dashboard")}
          variant="outline"
          className="w-full py-6 text-lg font-semibold"
        >
          Volver al Menú
        </Button>
      </div>
    </div>
  );
}

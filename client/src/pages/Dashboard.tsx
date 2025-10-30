import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CreditCard, Plus, Map, History, LogOut, MapPin, User, Gift, HelpCircle, Bell, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [showNotification, setShowNotification] = useState(true);

  const menuItems = [
    {
      id: "card",
      title: "Mi Tarjeta",
      description: "Ver saldo y datos",
      icon: CreditCard,
      color: "from-blue-500 to-blue-600",
      path: "/card",
    },
    {
      id: "recharge",
      title: "Recargar Saldo",
      description: "Agregar fondos",
      icon: Plus,
      color: "from-green-500 to-green-600",
      path: "/recharge",
    },
    {
      id: "map",
      title: "Mapa de Rutas",
      description: "Ver recorridos",
      icon: Map,
      color: "from-purple-500 to-purple-600",
      path: "/map",
    },
    {
      id: "history",
      title: "Historial",
      description: "Transacciones",
      icon: History,
      color: "from-orange-500 to-orange-600",
      path: "/history",
    },
    {
      id: "promotions",
      title: "Promociones",
      description: "Ofertas especiales",
      icon: Gift,
      color: "from-pink-500 to-pink-600",
      path: "/promotions",
    },
    {
      id: "statistics",
      title: "Estadísticas",
      description: "Análisis de gasto",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
      path: "/statistics",
    },
    {
      id: "help",
      title: "Ayuda",
      description: "Centro de soporte",
      icon: HelpCircle,
      color: "from-cyan-500 to-cyan-600",
      path: "/help",
    },
  ];

  const handleLogout = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
      {/* Notification Banner */}
      {showNotification && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 animate-slide-in-down">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 animate-bounce-subtle" />
              <span className="text-sm font-semibold">¡Recarga $20.000 y obtén $5.000 extra!</span>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TransitApp</h1>
              <p className="text-blue-100 text-sm">Quinta Región</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setLocation("/profile")}
              variant="ghost"
              className="text-white hover:bg-blue-700 gap-2"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Perfil</span>
            </Button>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-white hover:bg-blue-700 gap-2"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Salir</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8 animate-slide-in-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Menú Principal</h2>
          <p className="text-gray-600">Selecciona una opción para continuar</p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setLocation(item.path)}
                className="stagger-item group relative bg-white rounded-xl shadow-md hover:shadow-glow-lg transition-all duration-300 p-6 text-left border-2 border-transparent hover:border-blue-600 transform hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg shadow-md group-hover:shadow-glow transition-all`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                    →
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="stagger-item bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all" style={{ animationDelay: "0.48s" }}>
            <p className="text-blue-100 text-sm mb-2">Saldo Actual</p>
            <p className="text-3xl font-bold">$10.000</p>
          </div>
          <div className="stagger-item bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all" style={{ animationDelay: "0.56s" }}>
            <p className="text-green-100 text-sm mb-2">Viajes Este Mes</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="stagger-item bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all" style={{ animationDelay: "0.64s" }}>
            <p className="text-purple-100 text-sm mb-2">Ahorrado</p>
            <p className="text-3xl font-bold">$2.400</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-lg animate-slide-in-up">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">📱 Tip:</span> Descarga nuestro app móvil para acceso más rápido. 
            <span className="font-semibold text-blue-600 ml-2">Disponible próximamente</span>
          </p>
        </div>
      </div>
    </div>
  );
}

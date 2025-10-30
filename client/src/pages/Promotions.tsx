import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Zap, Gift, TrendingUp, Clock } from "lucide-react";
import { toast } from "sonner";

export default function Promotions() {
  const [, setLocation] = useLocation();

  const promotions = [
    {
      id: 1,
      title: "Recarga Doble",
      description: "Recarga $20.000 y obtén $5.000 extra",
      discount: "+25%",
      icon: Zap,
      color: "from-yellow-400 to-yellow-600",
      valid: "Hasta 31 de octubre",
      badge: "HOT",
    },
    {
      id: 2,
      title: "Viernes de Descuento",
      description: "Todos los viajes con 15% de descuento",
      discount: "-15%",
      icon: TrendingUp,
      color: "from-green-400 to-green-600",
      valid: "Todos los viernes",
      badge: "SEMANAL",
    },
    {
      id: 3,
      title: "Bienvenida",
      description: "Recarga inicial con 20% de bonificación",
      discount: "+20%",
      icon: Gift,
      color: "from-pink-400 to-pink-600",
      valid: "Primera recarga",
      badge: "NUEVO",
    },
    {
      id: 4,
      title: "Hora Punta",
      description: "Viajes en horario valle con descuento",
      discount: "-10%",
      icon: Clock,
      color: "from-blue-400 to-blue-600",
      valid: "Lunes a viernes 10-14 hrs",
      badge: "DIARIO",
    },
  ];

  const handleClaimPromotion = (title: string) => {
    toast.success(`Promoción "${title}" activada`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="ghost"
            className="text-white hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Promociones y Ofertas</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 mb-8 animate-slide-in-down">
          <h2 className="text-2xl font-bold mb-2">¡Ofertas Especiales!</h2>
          <p>Disfruta de descuentos y bonificaciones en tus recargas y viajes</p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {promotions.map((promo, idx) => {
            const Icon = promo.icon;
            return (
              <div
                key={promo.id}
                className="stagger-item bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${promo.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-2 right-2 bg-black/30 px-3 py-1 rounded-full text-xs font-bold">
                    {promo.badge}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{promo.title}</h3>
                      <p className="text-white/90 text-sm">{promo.description}</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">Descuento/Bonificación</p>
                    <p className="text-3xl font-bold text-blue-600">{promo.discount}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {promo.valid}
                  </p>
                  <Button
                    onClick={() => handleClaimPromotion(promo.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
                  >
                    Reclamar Oferta
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Cómo Funcionan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center stagger-item">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Selecciona</h3>
              <p className="text-gray-600 text-sm">Elige la promoción que deseas</p>
            </div>
            <div className="text-center stagger-item">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Activa</h3>
              <p className="text-gray-600 text-sm">Haz clic en "Reclamar Oferta"</p>
            </div>
            <div className="text-center stagger-item">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Disfruta</h3>
              <p className="text-gray-600 text-sm">Usa el descuento automáticamente</p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Términos:</span> Las promociones son válidas según las fechas indicadas. 
            Solo una promoción puede estar activa a la vez. Consulta los términos completos en Ayuda.
          </p>
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

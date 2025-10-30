import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Smartphone, MapPin, Zap, Shield, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simular carga
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setLocation("/dashboard");
  };

  const features = [
    {
      icon: Smartphone,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva y moderna",
    },
    {
      icon: Shield,
      title: "Seguro",
      description: "Transacciones protegidas",
    },
    {
      icon: Zap,
      title: "Rápido",
      description: "Recargas instantáneas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          {/* Logo Section */}
          <div className="mb-8 animate-slide-in-down">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-glow-lg mb-4 hover:shadow-glow-lg transition-all transform hover:scale-110">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white text-center mb-2">TransitApp</h1>
            <p className="text-blue-100 text-center text-lg">Transporte Público - Quinta Región</p>
          </div>

          {/* Main Card */}
          <div className="w-full max-w-md mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20 hover:border-white/40 transition-all">
              {/* Welcome Text */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Bienvenido</h2>
                <p className="text-blue-100">Gestiona tu tarjeta de transporte de forma fácil y segura</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="stagger-item text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                      style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                    >
                      <Icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                      <p className="text-xs text-blue-100 font-semibold">{feature.title}</p>
                    </div>
                  );
                })}
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-glow flex items-center justify-center gap-2 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-rotate-slow"></div>
                    <span>Iniciando sesión...</span>
                  </>
                ) : (
                  <>
                    <span>Iniciar Sesión</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Info Text */}
              <p className="text-center text-xs text-blue-200 mt-6">
                Este es un prototipo de demostración. Sin credenciales requeridas.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="w-full max-w-md animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm">Recargas Instantáneas</p>
                    <p className="text-blue-100 text-xs">Múltiples métodos de pago disponibles</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm">Promociones Especiales</p>
                    <p className="text-blue-100 text-xs">Descuentos y ofertas exclusivas</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold text-sm">100% Seguro</p>
                    <p className="text-blue-100 text-xs">Encriptación de nivel bancario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6 text-blue-200 text-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p>© 2024 TransitApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}

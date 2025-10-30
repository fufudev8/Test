import { useEffect } from "react";
import { useLocation } from "wouter";
import { MapPin } from "lucide-react";

export default function Splash() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-glow-lg mx-auto mb-6 animate-float">
            <MapPin className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-2 animate-slide-in-up">
          TransitApp
        </h1>
        <p className="text-blue-100 text-lg mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          Transporte Público - Quinta Región
        </p>

        {/* Loading Indicator */}
        <div className="flex justify-center gap-2 mb-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>

        {/* Loading Text */}
        <p className="text-blue-200 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Cargando aplicación...
        </p>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 animate-shrink-width"
          style={{ animationDuration: "3000ms" }}
        ></div>
      </div>
    </div>
  );
}

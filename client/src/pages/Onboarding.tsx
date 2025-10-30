import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronRight, CreditCard, MapPin, TrendingUp, Bell } from "lucide-react";
import { useState } from "react";

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: CreditCard,
      title: "Tu Tarjeta Digital",
      description: "Visualiza tu saldo y código de identificación en tiempo real",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Mapa de Rutas",
      description: "Explora todas las rutas de micros disponibles en la región",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Estadísticas",
      description: "Analiza tu gasto y actividad de viajes mensualmente",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Bell,
      title: "Promociones",
      description: "Recibe ofertas especiales y descuentos exclusivos",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const currentFeature = steps[currentStep];
  const CurrentIcon = currentFeature.icon;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLocation("/dashboard");
    }
  };

  const handleSkip = () => {
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      {/* Container */}
      <div className="w-full max-w-md">
        {/* Feature Display */}
        <div className="mb-8 animate-scale-in">
          <div
            className={`bg-gradient-to-br ${currentFeature.color} rounded-3xl shadow-glow-lg p-12 flex items-center justify-center min-h-64 mb-6 transform transition-all duration-500`}
          >
            <CurrentIcon className="w-24 h-24 text-white animate-float" />
          </div>

          {/* Content */}
          <div className="text-center mb-8 animate-slide-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              {currentFeature.title}
            </h2>
            <p className="text-gray-600 text-lg">{currentFeature.description}</p>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentStep
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Step Counter */}
          <p className="text-center text-gray-600 text-sm mb-8">
            Paso {currentStep + 1} de {steps.length}
          </p>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold gap-2 group"
            >
              {currentStep === steps.length - 1 ? "Comenzar" : "Siguiente"}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleSkip}
              variant="outline"
              className="w-full py-6 text-lg font-semibold"
            >
              Omitir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

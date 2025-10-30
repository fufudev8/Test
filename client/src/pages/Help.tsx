import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, ChevronDown, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [, setLocation] = useLocation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "¿Cómo recargo mi tarjeta?",
      answer:
        "Puedes recargar tu tarjeta desde la sección 'Recargar Saldo' usando MercadoPago, débito o crédito. Solo ingresa el monto y elige tu método de pago preferido.",
    },
    {
      id: 2,
      question: "¿Cuál es el saldo mínimo para viajar?",
      answer:
        "El saldo mínimo para realizar un viaje es de $1.200. Si tu saldo es menor, deberás recargar tu tarjeta antes de viajar.",
    },
    {
      id: 3,
      question: "¿Puedo transferir saldo a otra tarjeta?",
      answer:
        "No, el saldo es personal y no puede ser transferido. Sin embargo, puedes compartir tu tarjeta con familiares si lo deseas.",
    },
    {
      id: 4,
      question: "¿Qué hago si pierdo mi tarjeta?",
      answer:
        "Si pierdes tu tarjeta, contacta inmediatamente a nuestro soporte. Podemos bloquear tu tarjeta y emitir una nueva con el mismo saldo.",
    },
    {
      id: 5,
      question: "¿Cuánto tiempo tarda la recarga?",
      answer:
        "Las recargas son instantáneas. Tu saldo se actualiza inmediatamente después de completar el pago.",
    },
    {
      id: 6,
      question: "¿Hay límite de recarga?",
      answer:
        "Puedes recargar hasta $500.000 por transacción. Si necesitas más, puedes hacer múltiples recargas.",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Llamar",
      description: "+56 2 1234 5678",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "soporte@transitapp.cl",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      description: "Disponible 24/7",
      color: "from-purple-400 to-purple-600",
    },
  ];

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
          <h1 className="text-2xl font-bold">Centro de Ayuda</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className={`stagger-item bg-gradient-to-br ${method.color} text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all cursor-pointer transform hover:scale-105`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon className="w-8 h-8 mb-3" />
                <h3 className="font-bold mb-1">{method.title}</h3>
                <p className="text-white/90 text-sm">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.id}
                className="stagger-item border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 transition-colors"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                  className="w-full flex items-center justify-between p-4 hover:bg-blue-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-4 pb-4 border-t border-gray-200 bg-blue-50 animate-slide-in-down">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8 animate-slide-in-up">
          <h3 className="font-bold text-gray-800 mb-3">💡 Consejos Útiles</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Recarga tu tarjeta regularmente para evitar quedarte sin saldo</li>
            <li>• Revisa tu historial mensualmente para controlar tus gastos</li>
            <li>• Aprovecha las promociones especiales para ahorrar dinero</li>
            <li>• Mantén tu información de contacto actualizada</li>
            <li>• Reporta cualquier transacción sospechosa inmediatamente</li>
          </ul>
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

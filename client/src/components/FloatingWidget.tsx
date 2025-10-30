import { useState } from "react";
import { X, Plus, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const actions = [
    {
      icon: HelpCircle,
      label: "Ayuda",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => setLocation("/help"),
    },
    {
      icon: Phone,
      label: "Llamar",
      color: "bg-green-500 hover:bg-green-600",
      action: () => alert("Llamando a soporte..."),
    },
    {
      icon: MessageCircle,
      label: "Chat",
      color: "bg-purple-500 hover:bg-purple-600",
      action: () => alert("Abriendo chat de soporte..."),
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Action Buttons */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-4">
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  action.action();
                  setIsOpen(false);
                }}
                className={`${action.color} text-white p-4 rounded-full shadow-lg hover:shadow-glow-lg transition-all transform hover:scale-110 animate-scale-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                title={action.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
        } text-white p-4 rounded-full shadow-glow-lg hover:shadow-glow-lg transition-all transform hover:scale-110`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
    </div>
  );
}

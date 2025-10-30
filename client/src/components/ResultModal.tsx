import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface ResultModalProps {
  type: "success" | "error" | "warning";
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

export default function ResultModal({
  type,
  title,
  message,
  duration = 3000,
  onClose,
}: ResultModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeConfig = {
    success: {
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    error: {
      icon: XCircle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    warning: {
      icon: AlertCircle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
      ></div>

      {/* Modal */}
      <div
        className={`relative ${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-8 shadow-glow-lg max-w-sm w-full animate-scale-in`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon className={`w-16 h-16 ${config.color} animate-bounce-subtle`} />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-center mb-6">{message}</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className={`h-full ${
              type === "success"
                ? "bg-green-500"
                : type === "error"
                ? "bg-red-500"
                : "bg-yellow-500"
            } animate-shrink-width`}
            style={{ animationDuration: `${duration}ms` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

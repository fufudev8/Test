import { Bell, X } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingNotificationProps {
  title: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
  onClose?: () => void;
}

export default function FloatingNotification({
  title,
  message,
  type = "info",
  duration = 5000,
  onClose,
}: FloatingNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    info: "from-blue-500 to-blue-600",
    success: "from-green-500 to-green-600",
    warning: "from-yellow-500 to-yellow-600",
    error: "from-red-500 to-red-600",
  };

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in-right">
      <div
        className={`bg-gradient-to-r ${typeStyles[type]} text-white rounded-2xl shadow-glow-lg p-4 max-w-sm flex items-start gap-4 backdrop-blur-md border border-white/20`}
      >
        <div className="flex-shrink-0">
          <Bell className="w-6 h-6 animate-bounce-subtle" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm mb-1">{title}</h3>
          <p className="text-sm text-white/90">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

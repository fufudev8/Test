import { useLocation } from "wouter";
import { CreditCard, Map, History, Home, User } from "lucide-react";

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

export default function BottomNav() {
  const [location, setLocation] = useLocation();

  const navItems: NavItem[] = [
    { id: "card", icon: <CreditCard className="w-6 h-6" />, label: "Tarjeta", path: "/card" },
    { id: "map", icon: <Map className="w-6 h-6" />, label: "Rutas", path: "/map" },
    { id: "home", icon: <Home className="w-6 h-6" />, label: "Inicio", path: "/dashboard" },
    { id: "history", icon: <History className="w-6 h-6" />, label: "Historial", path: "/history" },
    { id: "profile", icon: <User className="w-6 h-6" />, label: "Perfil", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <button
                key={item.id}
                onClick={() => setLocation(item.path)}
                className={`flex-1 py-4 px-2 flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`}
              >
                <div className={`transition-all ${isActive ? "scale-110" : "scale-100"}`}>
                  {item.icon}
                </div>
                <span className="text-xs font-semibold">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

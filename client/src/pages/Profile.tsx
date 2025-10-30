import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Edit2, Bell, Lock, HelpCircle, LogOut, User, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [, setLocation] = useLocation();
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = {
    name: "Usuario Demo",
    email: "usuario@example.com",
    phone: "+56 9 1234 5678",
    joinDate: "Enero 2024",
    trips: 156,
    totalSpent: 187200,
  };

  const handleLogout = () => {
    toast.success("Sesión cerrada correctamente");
    setTimeout(() => setLocation("/"), 1000);
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
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6 animate-slide-in-up">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-glow">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{userInfo.name}</h2>
                <p className="text-gray-600">Miembro desde {userInfo.joinDate}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              className="gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Editar
            </Button>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 stagger-item">
              <p className="text-gray-600 text-sm mb-1">Viajes Realizados</p>
              <p className="text-2xl font-bold text-blue-600">{userInfo.trips}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 stagger-item">
              <p className="text-gray-600 text-sm mb-1">Gasto Total</p>
              <p className="text-2xl font-bold text-green-600">
                ${userInfo.totalSpent.toLocaleString("es-CL")}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Información de Contacto</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-800">{userInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Teléfono</p>
                <p className="font-semibold text-gray-800">{userInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Configuración</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Notificaciones</span>
              </div>
              <span className="text-gray-500">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Seguridad</span>
              </div>
              <span className="text-gray-500">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Ayuda y Soporte</span>
              </div>
              <span className="text-gray-500">→</span>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex gap-4 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="outline"
            className="flex-1 py-6 text-lg font-semibold"
          >
            Volver
          </Button>
          <Button
            onClick={handleLogout}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold gap-2"
          >
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
}

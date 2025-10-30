import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Download, Filter } from "lucide-react";
import { useState } from "react";

export default function History() {
  const [, setLocation] = useLocation();
  const [filterType, setFilterType] = useState<string>("all");

  const transactions = [
    {
      id: 1,
      date: "2024-10-29",
      time: "14:32",
      type: "Viaje",
      description: "Micro Ruta 101 - Valparaíso",
      amount: -1200,
      balance: 8800,
      icon: "🚌",
    },
    {
      id: 2,
      date: "2024-10-29",
      time: "10:15",
      type: "Viaje",
      description: "Micro Ruta 202 - Quilpué",
      amount: -1200,
      balance: 10000,
      icon: "🚌",
    },
    {
      id: 3,
      date: "2024-10-28",
      time: "16:45",
      type: "Recarga",
      description: "Recarga por MercadoPago",
      amount: 20000,
      balance: 11200,
      icon: "💳",
    },
    {
      id: 4,
      date: "2024-10-28",
      time: "09:20",
      type: "Viaje",
      description: "Micro Ruta 303 - Viña del Mar",
      amount: -1200,
      balance: -8800,
      icon: "🚌",
    },
    {
      id: 5,
      date: "2024-10-27",
      time: "15:30",
      type: "Viaje",
      description: "Micro Ruta 101 - Valparaíso",
      amount: -1200,
      balance: -7600,
      icon: "🚌",
    },
    {
      id: 6,
      date: "2024-10-27",
      time: "12:10",
      type: "Recarga",
      description: "Recarga por Débito",
      amount: 10000,
      balance: -6400,
      icon: "💳",
    },
    {
      id: 7,
      date: "2024-10-26",
      time: "18:00",
      type: "Viaje",
      description: "Micro Ruta 505 - Concón",
      amount: -1200,
      balance: -16400,
      icon: "🚌",
    },
    {
      id: 8,
      date: "2024-10-26",
      time: "08:30",
      type: "Viaje",
      description: "Micro Ruta 404 - Limache",
      amount: -1200,
      balance: -15200,
      icon: "🚌",
    },
    {
      id: 9,
      date: "2024-10-25",
      time: "14:15",
      type: "Recarga",
      description: "Recarga por Crédito",
      amount: 50000,
      balance: -13200,
      icon: "💳",
    },
  ];

  const filteredTransactions =
    filterType === "all"
      ? transactions
      : transactions.filter((t) => t.type === filterType);

  const totalSpent = transactions
    .filter((t) => t.type === "Viaje")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const totalRecharged = transactions
    .filter((t) => t.type === "Recarga")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="ghost"
            className="text-white hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">Historial</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 stagger-item">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Total Gastado</p>
            <p className="text-3xl font-bold text-red-600">
              -${totalSpent.toLocaleString("es-CL")}
            </p>
            <p className="text-xs text-gray-500 mt-2">En viajes</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Total Recargado</p>
            <p className="text-3xl font-bold text-green-600">
              +${totalRecharged.toLocaleString("es-CL")}
            </p>
            <p className="text-xs text-gray-500 mt-2">Recargas realizadas</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-sm mb-2">Transacciones</p>
            <p className="text-3xl font-bold text-blue-600">
              {transactions.length}
            </p>
            <p className="text-xs text-gray-500 mt-2">Últimos 30 días</p>
          </div>
        </div>

        {/* Filter and Export */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={() => setFilterType("all")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filterType === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setFilterType("Viaje")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filterType === "Viaje"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Viajes
              </button>
              <button
                onClick={() => setFilterType("Recarga")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filterType === "Recarga"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Recargas
              </button>
            </div>
            <Button
              variant="outline"
              className="gap-2 w-full md:w-auto"
            >
              <Download className="w-4 h-4" />
              Descargar
            </Button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-3 mb-6 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl">{transaction.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} a las {transaction.time}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`text-lg font-bold ${
                      transaction.amount > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    ${Math.abs(transaction.amount).toLocaleString("es-CL")}
                  </p>
                  <p className="text-xs text-gray-500">
                    Saldo: ${Math.abs(transaction.balance).toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Nota:</span> El historial mostrado es
            ficticios para este prototipo. Los datos reales se sincronizarán con
            tu tarjeta de transporte.
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

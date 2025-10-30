import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, TrendingUp, Calendar, BarChart3 } from "lucide-react";

export default function Statistics() {
  const [, setLocation] = useLocation();

  const monthlyData = [
    { month: "Enero", spent: 45000, trips: 38 },
    { month: "Febrero", spent: 52000, trips: 42 },
    { month: "Marzo", spent: 48000, trips: 40 },
    { month: "Abril", spent: 61000, trips: 51 },
    { month: "Mayo", spent: 55000, trips: 46 },
    { month: "Junio", spent: 67000, trips: 56 },
  ];

  const maxSpent = Math.max(...monthlyData.map((d) => d.spent));
  const maxTrips = Math.max(...monthlyData.map((d) => d.trips));

  const totalSpent = monthlyData.reduce((sum, d) => sum + d.spent, 0);
  const totalTrips = monthlyData.reduce((sum, d) => sum + d.trips, 0);
  const averageSpent = Math.round(totalSpent / monthlyData.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100">
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
          <h1 className="text-2xl font-bold">Estadísticas</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="stagger-item bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all">
            <p className="text-blue-100 text-sm mb-2">Gasto Total</p>
            <p className="text-3xl font-bold">${totalSpent.toLocaleString("es-CL")}</p>
            <p className="text-xs text-blue-200 mt-2">Últimos 6 meses</p>
          </div>

          <div className="stagger-item bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all" style={{ animationDelay: "0.1s" }}>
            <p className="text-green-100 text-sm mb-2">Total de Viajes</p>
            <p className="text-3xl font-bold">{totalTrips}</p>
            <p className="text-xs text-green-200 mt-2">Últimos 6 meses</p>
          </div>

          <div className="stagger-item bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6 hover:shadow-glow-lg transition-all" style={{ animationDelay: "0.2s" }}>
            <p className="text-purple-100 text-sm mb-2">Promedio Mensual</p>
            <p className="text-3xl font-bold">${averageSpent.toLocaleString("es-CL")}</p>
            <p className="text-xs text-purple-200 mt-2">Por mes</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Gasto Mensual
          </h2>

          {/* Bar Chart */}
          <div className="mb-8">
            <div className="flex items-end justify-between gap-2 h-64 mb-4">
              {monthlyData.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center group">
                  <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden hover:bg-gray-200 transition-colors">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-500 hover:from-blue-700 hover:to-blue-500"
                      style={{
                        height: `${(data.spent / maxSpent) * 100}%`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold">
                          ${(data.spent / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-semibold">{data.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded" />
              <span className="text-sm text-gray-600">Gasto en Pesos</span>
            </div>
          </div>
        </div>

        {/* Trips Chart */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Viajes Realizados
          </h2>

          {/* Line Chart Simulation */}
          <div className="flex items-end justify-between gap-2 h-48 mb-4">
            {monthlyData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center group">
                <div className="w-full bg-gray-100 rounded-full relative overflow-hidden hover:bg-gray-200 transition-colors">
                  <div
                    className="w-full bg-gradient-to-t from-green-600 to-green-400 transition-all duration-500 hover:from-green-700 hover:to-green-500"
                    style={{
                      height: `${(data.trips / maxTrips) * 100}%`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold">{data.trips}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2 font-semibold">{data.month}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">📊 Insight:</span> Tu gasto promedio es ${averageSpent.toLocaleString("es-CL")} al mes.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">🚌 Actividad:</span> Realizas un promedio de {Math.round(totalTrips / monthlyData.length)} viajes mensuales.
            </p>
          </div>
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

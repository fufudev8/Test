import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, CreditCard, Smartphone, Wallet } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Recharge() {
  const [, setLocation] = useLocation();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const paymentMethods = [
    {
      id: "mercadopago",
      name: "MercadoPago",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      description: "Pago rápido y seguro",
    },
    {
      id: "debit",
      name: "Tarjeta de Débito",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      description: "Débito directo de tu cuenta",
    },
    {
      id: "credit",
      name: "Tarjeta de Crédito",
      icon: Wallet,
      color: "from-purple-500 to-purple-600",
      description: "Crédito con cuotas disponibles",
    },
  ];

  const quickAmounts = [5000, 10000, 20000, 50000];

  const handleRecharge = async () => {
    if (!selectedMethod || !amount) {
      toast.error("Selecciona un método de pago y un monto");
      return;
    }

    setLoading(true);
    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);

    toast.success(
      `Recarga de $${parseInt(amount).toLocaleString("es-CL")} procesada exitosamente`
    );
    setTimeout(() => setLocation("/card"), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
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
          <h1 className="text-2xl font-bold">Recargar Saldo</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-2xl mx-auto">
        {/* Current Balance */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up">
          <p className="text-gray-600 text-sm mb-2">Saldo Actual</p>
          <p className="text-4xl font-bold text-blue-600">$10.000</p>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
          <label className="block text-sm font-semibold text-gray-800 mb-3">
            Monto a Recargar
          </label>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ingresa el monto"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <span className="flex items-center px-4 text-gray-600 font-semibold">
              CLP
            </span>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {quickAmounts.map((quickAmount) => (
              <button
                key={quickAmount}
                onClick={() => setAmount(quickAmount.toString())}
                className={`py-2 px-3 rounded-lg font-semibold transition-all ${
                  amount === quickAmount.toString()
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                ${quickAmount.toLocaleString("es-CL")}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Método de Pago
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-xl transition-all border-2 ${
                    selectedMethod === method.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`bg-gradient-to-br ${method.color} p-3 rounded-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-semibold text-gray-800">{method.name}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedMethod === method.id
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Seguridad:</span> Todas las transacciones
            están encriptadas y protegidas.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={handleRecharge}
            disabled={loading || !selectedMethod || !amount}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Procesando..." : "Confirmar Recarga"}
          </Button>
          <Button
            onClick={() => setLocation("/dashboard")}
            variant="outline"
            className="flex-1 py-6 text-lg font-semibold"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Bem-vindo ao Nina!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Gerencie seus clientes, pedidos, insumos e finanças de forma simples e eficiente.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Entrar
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition">
          Saiba Mais
        </button>
      </div>
    </main>
  );
}

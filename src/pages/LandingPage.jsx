import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Cake, Users, DollarSign, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 md:px-20 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-[#84D1D0]">Nina</h1>
        <div className="flex gap-3">
          <Button variant="ghost">Entrar</Button>
          <Button className="bg-[#FC9E98] hover:bg-[#f88780] text-white">Criar conta</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-tr from-[#84D1D0] to-[#FC9E98]">
        <div className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Gerencie sua confeitaria com facilidade
            </h2>
            <p className="text-white/90 mb-6">
              Organize pedidos, clientes e finanças em um só lugar. Simples,
              moderno e feito para quem vive da confeitaria.
            </p>
            <Button className="bg-white text-[#84D1D0] hover:bg-gray-100 px-6 py-3 rounded-2xl shadow-md">
              Começar agora
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur rounded-2xl h-64 flex items-center justify-center"
          >
            <span className="text-white/80">Imagem da confeitaria</span>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6 text-center">
                <feature.icon className="mx-auto mb-4 text-[#84D1D0]" size={32} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
          <span className="text-gray-400">Imagem destaque</span>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Tudo que você precisa em um só lugar
          </h3>
          <p className="text-gray-600">
            Desde o primeiro contato com o cliente até a entrega final, o Nina
            ajuda você a manter tudo organizado e profissional.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#84D1D0] text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Comece a transformar sua confeitaria hoje
        </h3>
        <Button className="bg-white text-[#84D1D0] hover:bg-gray-100 px-6 py-3 rounded-2xl shadow">
          Criar conta grátis
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>Nina © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: LayoutDashboard,
    title: "Gestão de pedidos",
    desc: "Acompanhe todos os pedidos com facilidade",
  },
  {
    icon: Users,
    title: "Clientes",
    desc: "Organize seus clientes e histórico",
  },
  {
    icon: DollarSign,
    title: "Financeiro",
    desc: "Controle seus ganhos e despesas",
  },
  {
    icon: Cake,
    title: "Simples de usar",
    desc: "Interface intuitiva e rápida",
  },
];

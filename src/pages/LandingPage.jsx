import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Cake, Users, DollarSign, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import confeitera from "../assets/confeiteira.jpg";
import { useNavigate } from "react-router-dom";
import logo from "../assets/16.jpeg";

export default function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 md:px-20 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-[#84D1D0]">Nina</h1>
        <div className="flex gap-3">
          <Button variant="ghost">Entrar</Button>
          <Button className="bg-[#dd837d] hover:bg-[#df8d87] text-white hover:scale-105 transition-transform duration-300" onClick={() => navigate("/register")}>Criar conta</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-tr from-[#84D1D0] to-[#FC9E98]">
        <div className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
              Gerencie sua confeitaria com facilidade
            </h2>
            <p className="text-gray-700 mb-6">
              Organize pedidos, clientes e finanças em um só lugar. Simples,
              moderno e feito para quem vive da confeitaria.
            </p>
            <Button className="bg-[#4fd9e3] hover:bg-[#78cbc9] text-[#84D1D0] px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" onClick={() => navigate("/register")}>
              Começar agora
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative h-72 md:h-80 w-full rounded-3xl overflow-hidden border border-white/30 shadow-md"
          >

            <img
              src={confeitera}
              alt="Confeitaria"
              className="relative z-10 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md hover:scale-110 transition-transform duration-700">
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
            <img
              src={logo}
              alt="Confeitaria"
              className="relative z-10 w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
            />
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
      <section className="py-20 px-6 text-center bg-[#FDE7E5]">
        <div className="max-w-2xl mx-auto">
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transforme sua confeitaria hoje
          </h3>

          <p className="text-gray-800/80 mb-8 text-base md:text-lg">
            Organize pedidos, clientes e finanças de forma simples e prática.
          </p>

          <Button className="bg-[#dd837d] hover:bg-[#df8d87] text-white px-6 py-3 rounded-xl hover:scale-105 transition" onClick={() => navigate("/register")}>
            Criar conta grátis
          </Button>

        </div>
      </section>

      {/* Seção de confiança */}
      <section className="py-20 px-6 bg-[#FFF8F7]">
        <div className="max-w-6xl mx-auto text-center">

          {/* título */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tudo que você precisa para crescer
          </h3>

          {/* subtítulo */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Uma plataforma simples, moderna e pensada para o dia a dia de quem vive da confeitaria.
          </p>

          {/* cards */}
          <div className="grid md:grid-cols-3 gap-6 text-left">

            {/* card */}
            <div className="group p-6 rounded-2xl bg-white border border-gray-100 
                            shadow-lg hover:shadow-xl hover:-translate-y-1 
                            transition-all duration-300">

              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-[#FDE7E5] text-[#FC9E98] text-lg">
                📋
              </div>

              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-[#FC9E98] transition">
                Organização completa
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Controle pedidos, clientes e produção em um único lugar, sem complicação.
              </p>
            </div>

            {/* card */}
            <div className="group p-6 rounded-2xl bg-white border border-gray-100 
                            shadow-lg hover:shadow-xl hover:-translate-y-1 
                            transition-all duration-300">

              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-[#E6F7F7] text-[#84D1D0] text-lg">
                ⚡
              </div>

              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-[#84D1D0] transition">
                Mais produtividade
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Automatize processos e ganhe tempo para focar no que realmente importa.
              </p>
            </div>

            {/* card */}
            <div className="group p-6 rounded-2xl bg-white border border-gray-100 
                            shadow-lg hover:shadow-xl hover:-translate-y-1 
                            transition-all duration-300">

              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-[#FDE7E5] text-[#FC9E98] text-lg">
                ✨
              </div>

              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-[#FC9E98] transition">
                Visual profissional
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                Interface bonita e intuitiva que transmite profissionalismo ao seu negócio.
              </p>
            </div>

          </div>

        </div>
      </section>

      <footer className="bg-gradient-to-tr from-[#FDE7E5] to-[#d4f5f5] py-10 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-700">Nina</p>

          <p className="text-gray-700 text-center">
            © {new Date().getFullYear()} Nina. Todos os direitos reservados.
          </p>

          <div className="flex gap-4 text-gray-700">
            <span className="hover:underline cursor-pointer">Privacidade</span>
            <span className="hover:underline cursor-pointer">Termos</span>
            <span className="hover:underline cursor-pointer">Contato</span>
          </div>

        </div>
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

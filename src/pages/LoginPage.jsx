import { useState } from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const data = await response.json();
      console.log(data);

      // depois você pode salvar token aqui
      alert("Login realizado com sucesso 🎉");

      // exemplo: redirecionar
      // navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#84D1D0] to-[#FC9E98] px-6">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-center text-[#84D1D0] mb-2">
          Nina
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Acesse sua conta
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84D1D0]"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="text-sm text-gray-600">Senha</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84D1D0]"
            />
          </div>

          {/* Botão */}
          <Button
            type="submit"
            className="w-full bg-[#84D1D0] hover:bg-[#6bbcbc] text-white py-2 rounded-xl mt-4 hover:scale-105 transition"
          >
            Entrar
          </Button>
        </form>

        {/* Links */}
        <div className="text-center text-sm text-gray-500 mt-6 space-y-2">
          
          <p>
            Não tem conta?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#FC9E98] cursor-pointer hover:underline"
            >
              Criar conta
            </span>
          </p>

          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:underline"
          >
            ← Voltar para início
          </p>
        </div>
      </div>
    </div>
  );
}

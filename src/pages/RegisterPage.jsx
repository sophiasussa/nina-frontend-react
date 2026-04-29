import { useState } from "react";
import { Button } from "../components/ui/button";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nome: "",
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
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      const data = await response.json();
      console.log(data);

      alert("Conta criada com sucesso 🎉");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar conta");
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
          Crie sua conta e comece a organizar sua confeitaria
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Nome */}
          <div>
            <label className="text-sm text-gray-600">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84D1D0]"
            />
          </div>

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
            className="w-full bg-[#dd837d] hover:bg-[#ee9f9b] text-white py-2 rounded-xl mt-4 hover:scale-105 transition"
          >
            Criar conta
          </Button>
        </form>

        {/* Link login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Já tem conta?{" "}
          <span className="text-[#84D1D0] cursor-pointer hover:underline">
            Entrar
          </span>
        </p>
      </div>
    </div>
  );
}

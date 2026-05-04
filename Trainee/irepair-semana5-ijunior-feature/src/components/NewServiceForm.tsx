import { useState } from "react";

interface Props {
  onSalvar: (novaOs: { cliente: string; aparelho: string; defeito: string; status: string }) => void;
}

export function NewServiceForm({ onSalvar }: Props) {
  const [cliente, setCliente] = useState("");
  const [aparelho, setAparelho] = useState("");
  const [defeito, setDefeito] = useState("");
  const [status, setStatus] = useState("Aberto");

  function mandarDados(event: React.FormEvent) {
    event.preventDefault(); 
    onSalvar({ cliente, aparelho, defeito, status });
    setCliente("");
    setAparelho("");
    setDefeito("");
    setStatus("Aberto");
  }

  return (
    <form onSubmit={mandarDados} className="border-2 border-black p-4 mb-6 bg-gray-100">
      <h2 className="font-bold mb-2">Cadastrar OS</h2>
      
      <input type="text" placeholder="Cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} className="border border-black p-1 w-full" required />
      <br /><br />
      
      <input type="text" placeholder="Aparelho" value={aparelho} onChange={(e) => setAparelho(e.target.value)} className="border border-black p-1 w-full" required />
      <br /><br />
      
      <input type="text" placeholder="Defeito" value={defeito} onChange={(e) => setDefeito(e.target.value)} className="border border-black p-1 w-full" required />
      <br /><br />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-black p-1 w-full">
        <option value="Aberto">Aberto</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <br /><br />

      <button type="submit" className="bg-blue-600 text-white p-2 border border-black">Adicionar</button>
    </form>
  );
}
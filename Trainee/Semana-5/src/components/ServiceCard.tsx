interface Props {
  cliente: string;
  aparelho: string;
  defeito: string;
  status: string;
}

export function ServiceCard({ cliente, aparelho, defeito, status }: Props) {
  const corDeFundo = status === 'Aberto' ? 'bg-green-400' : 'bg-gray-400';

  return (
    <div className={`border-2 border-black p-2 mb-2 ${corDeFundo}`}>
      <p><strong>Cliente:</strong> {cliente}</p>
      <p><strong>Aparelho:</strong> {aparelho}</p>
      <p><strong>Defeito:</strong> {defeito}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}
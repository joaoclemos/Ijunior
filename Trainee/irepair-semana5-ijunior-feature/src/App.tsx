import { useState } from 'react';
import { Header } from './components/Header';
import { NewServiceForm } from './components/NewServiceForm';
import { ServiceCard } from './components/ServiceCard';

interface OS {
  id: number;
  cliente: string;
  aparelho: string;
  defeito: string;
  status: string;
}

export function App() {
  const [listaOS, setListaOS] = useState<OS[]>([]);

  function adicionarOS(novaOS: Omit<OS, 'id'>) {
    const osCompleta = {
      ...novaOS,
      id: Math.random() 
    };
    setListaOS([...listaOS, osCompleta]);
  }

  return (
    <div className="p-4">
      <Header />
      <NewServiceForm onSalvar={adicionarOS} />
      
      <div>
        <h2 className="font-bold text-xl">Ordens de Serviço ({listaOS.length})</h2>
        <hr className="border-black mb-4 mt-2" />
        
        {listaOS.map((os) => (
          <ServiceCard 
            key={os.id}
            cliente={os.cliente}
            aparelho={os.aparelho}
            defeito={os.defeito}
            status={os.status}
          />
        ))}
      </div>
    </div>
  )
}
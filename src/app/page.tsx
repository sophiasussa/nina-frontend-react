import Image from 'next/image';
import logo from '../assets/logo.png';
import hero from '../assets/13.png';
import { Menu, CircleUserRound } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50">
      <header className="flex w-full px-28 py-3 bg-white items-center justify-between sticky top-0 z-50 shadow-sm">
        <Image src={logo} alt="Logo do Software gerenciador de confeitaria Nina" className='hover:scale-110 transition-all duration-500' height={50} width={180} priority/>
        <div className='flex justify-end gap-8'>
          <Menu className='text-gray-600 size-7'/>
          <CircleUserRound className='text-gray-600 size-7'/>
        </div>
      </header>
      <main>
        <section className='h-[87vh] bg-gradient-to-br from-[#FC9E98] via-[#84D1D0] to-[#FC9E98] flex items-center justify-center'>
          <Image src={hero} alt="Parte principal do logo do software para gestão de confeitarias - Nina" className='hover:scale-125 transition-all duration-1000' width={500} priority/>
        </section>

        <section className='bg-gray50'>
          <h1>Teste</h1>
        </section>
      </main>
      
    </section>  
  );
}

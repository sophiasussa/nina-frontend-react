import Image from 'next/image';
import logo from '../assets/logo.png';
import hero from '../assets/13.png';
import { Menu, CircleUserRound } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50">
      <header className="flex w-full px-28 py-3 bg-white items-center justify-between sticky top-0 z-50 shadow-sm">
        <Image src={logo} alt="Logo do Software gerenciador de confeitaria Nina" className='hover:scale-105 transition-all duration-600' height={50} width={180} priority/>
        <div className='flex justify-end gap-8'>
          <Menu className='text-gray-600 size-7'/>
          <CircleUserRound className='text-gray-600 size-7'/>
        </div>
      </header>
      <main>
        <section className='relative h-[87vh] bg-gradient-to-br from-[#FC9E98] via-[#84D1D0] to-[#FC9E98]'>
          
          <div className='absolute right-24 top-20'>
            <h3 className='text-white font-light'>Nina é um reflexo da paixão e dedicação das confeiteiras,<br/>
              um espaço acolhedor que busca ajudar novos profissionais a<br/>
              gerenciar suas doçuras com amor e eficiência.</h3>
          </div>

          <div className='absolute left-32 bottom-28'>
            <h1 className='text-white font-bold text-5xl'>Nina - Gestão Confeitaria</h1>
            <h2 className='text-white font-semibold text-4xl'>Seu App de Organização de Confeitarias</h2>
            <button className='bg-white p-2 hover:scale-110 duration-300'>Saiba Mais</button>
          </div>

        </section>

        <section className='bg-gray50'>
          <h1>Teste</h1>
        </section>
      </main>
      
    </section>  
  );
}

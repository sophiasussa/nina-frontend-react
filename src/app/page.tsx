import Image from 'next/image';
import logo from '../assets/logo.png';
import { Menu, CircleUserRound } from 'lucide-react';

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-50">
      <header className="flex w-full px-28 py-3 bg-white items-center justify-between">
        <Image src={logo} alt="Logo do Software gerenciador de confeitaria Nina" height={50} width={180} priority/>
        <div className='flex justify-end gap-8'>
          <Menu className='text-gray-700'/>
          <CircleUserRound className='text-gray-700'/>
        </div>
      </header>
    </section>  
  );
}

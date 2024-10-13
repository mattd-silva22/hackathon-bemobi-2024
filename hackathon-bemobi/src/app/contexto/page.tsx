"use client";
import { useState } from 'react';
import Config from '@/components/Config';
import Context from '@/components/Context';
import "./page.css";
import Image from 'next/image';
import NewBot from "@/assets/new-bot.svg"
import Card from '@/components/Card';

export default function Contexto() {
  const [activeTab, setActiveTab] = useState('config');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main>
      <div className="contexto">
         <div className="new"> NOVO BOT
             <div><Image src={NewBot} alt="" width={28} height={28} /> Novo Template</div>
         </div>
         <Card/>
        <div className="tabs">
          <button onClick={() => handleTabClick('config')} className={activeTab === 'config' ? 'active' : ''}>Configurações Iniciais</button>
          <button onClick={() => handleTabClick('context')} className={activeTab === 'context' ? 'active' : ''}>Contexto</button>
        </div>

        {activeTab === 'config' && <Config />}
        {activeTab === 'context' && <Context />}
      </div>
    </main>
  );
}


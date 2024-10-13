"use client"
import "./page.css"
import { useState } from 'react';
import Card from "@/components/Card";
import Image from "next/image";
import NewBot from "@/assets/new-bot.svg"

export default function Contexto() {

  const [activeTab, setActiveTab] = useState('config'); // Toggle entre abas
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [initialConfig, setInitialConfig] = useState('');
  const [doDirective, setDoDirective] = useState('');
  const [dontDirective, setDontDirective] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSubmit = () => {
   console.log({
      name,
      tag,
      description,
      initialConfig,
      doDirective,
      dontDirective,
    });
  };

  return (
    <main>
      <div className="contexto">
        <div className="new"> NOVO BOT
            <div><Image src={NewBot} alt="" width={28} height={28} /> Novo Template</div>
        </div>
        <Card/>
        <div className="container">
      <div className="tabs">
        <button onClick={() => handleTabClick('config')} className={activeTab === 'config' ? 'active' : ''}>Configurações Iniciais</button>
        <button onClick={() => handleTabClick('context')} className={activeTab === 'context' ? 'active' : ''}>Contexto</button>
      </div>

      {activeTab === 'config' && (
        <div className="config-section">

          <h2>Diretrizes</h2>
          <div className="form-container"> 
            <div className="form-group1">
                <label>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Icaro"/>
            </div>
            <div className="form-group1">
                <label>Tag</label>
                <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="#VENDA"/>
            </div>
          </div>

          <div className="form-container"> 
            <div className="form-group2">
                <label>Descrição</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Escreva uma descrição do Bot"/>
            </div>
            <div className="form-group2">
                <label>Configuração Inicial</label>
                <textarea value={initialConfig} onChange={(e) => setInitialConfig(e.target.value)} placeholder="Escreva aqui o contexto..."/>
            </div>
          </div>

          <h2>Diretrizes</h2>

          <div className="form-container"> 
            <div className="form-group2">
                <label>Fazer</label>
                <textarea value={doDirective} onChange={(e) => setDoDirective(e.target.value)} placeholder="Escreva aqui o que o bot deve fazer" />
            </div>
            <div className="form-group2">
                <label>Não Fazer</label>
                <textarea value={dontDirective} onChange={(e) => setDontDirective(e.target.value)} placeholder="Escreva aqui o que o pode não pode fazer"/>
            </div>
          </div>

          <button onClick={handleSubmit} className="submit-btn">Treinar Modelo</button>
        </div>
      )}

      {activeTab === 'context' && (
        <div className="context-section">
          <h2>Contexto</h2>
        </div>
      )}
    </div>
      </div>
    </main>
  );
}

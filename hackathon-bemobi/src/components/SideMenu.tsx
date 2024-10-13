import { FC } from 'react';
import Link from 'next/link';
import '@/styles/SideMenu.css';
import Image from 'next/image';
import Dashboard from "@/assets/dashboard-icon.svg"
import Agentes from "@/assets/agentes-icon.svg"
import Doc from "@/assets/doc-icon.svg"
import Add from "@/assets/add-icon.svg";
import Green from "@/assets/green.svg"
import Pink from "@/assets/Pink.svg"
import Purple from "@/assets/Purple.svg"
import Bot from "@/assets/bot-icon.svg"


const SideMenu: FC = () => {
  return (
    <div className="aside">
      <h1> Bemobi <span>AI</span>  </h1>
      <hr/>
      <nav className="pages">
        <ul>
            <li className='nav-pages'>
              <Link href="/" className='menu-option'>
                <Image src={Dashboard} alt="dashboard" width={24} height={24}/> <span>Dashboard</span>
              </Link>
            </li>

            <li className='nav-pages'>
              <Link href="/contexto" className='menu-option'>
                <Image src={Agentes} alt=""/> <p>Agentes</p>
              </Link>
            </li>

            <li className='nav-pages'>
              <Link href="/" className='menu-option'>
                <Image src={Doc} alt=""/> 
                <div className='docs'> Documentação
                    <ul className='other-pages'>
                        <li>API´s de Envio</li>
                        <li>Webhooks</li>
                        <li>Tráfego de Dados</li>
                    </ul>
                </div>
              </Link>
            </li>
        </ul>

        <hr/>

      </nav>

        <div className='bot-title'><h2>BOTS</h2><Image src={Add} alt="" width={24} height={24} className='click'></Image></div>
        <nav className='nav-bots'>

            <div>
                <div className='bot-type'>
                    <p><Image src={Green} alt=""/> Comercial <span>(4)</span></p>
                </div>
                <div className='bot-selected'>
                    <Image src={Bot} alt="" width={24} height={24} className='click'></Image>
                    <p>Nome do Bot 1</p>
                </div>
            </div>

            <div>
                <div className='bot-type'>
                    <p><Image src={Pink} alt=""/> Marketing <span>(4)</span></p>
                </div>
                <div className='bot-option'>
                        <Image src={Bot} alt="" width={24} height={24} className='click'></Image>
                        <p>Nome do Bot 1</p>
                </div>
            </div>

            <div className='bot-type'>
                <p><Image src={Purple} alt=""/> Suporte <span>(1)</span></p>
            </div>
        </nav>

    </div>
  );
};

export default SideMenu;

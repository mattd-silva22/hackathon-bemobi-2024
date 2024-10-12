import Image from 'next/image';
import { FC } from 'react';
import "@/styles/Menu.css";

import Config from "@/assets/config.svg"
import Chat from "@/assets/chat.svg"
import Dash from "@/assets/dash.svg"

const SideMenu: FC = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
            <li><Image alt="" src={Config} width={24} height={24}></Image> Configurações</li>
            <li className='selected'><Image alt="" src={Chat}></Image> Teste</li>
            <li><Image alt="" src={Dash}></Image> Dashboard</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;

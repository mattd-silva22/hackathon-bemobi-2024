"use client";
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import "@/styles/Menu.css";

import Config from "@/assets/config.svg";
import Chat from "@/assets/chat.svg";
import Dash from "@/assets/dash.svg";

const Menu: FC = () => {
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('contexto')) setSelected('config');
    else if (path === '/') setSelected('teste');
    else if (path.includes('dashboard')) setSelected('dash');
  }, []);

  const handleMenuClick = (path: string, menuItem: string) => {
    setSelected(menuItem);
    window.location.href = path;
  };

  return (
    <div className="menu">
      <nav>
        <ul>
          <li
            className={selected === 'config' ? 'selected' : ''}
            onClick={() => handleMenuClick('/contexto', 'config')}
          >
            <Image
              alt=""
              src={Config}
              width={24}
              height={24}
              className={selected === 'config' ? 'svg-selected' : 'svg-default'}
            />
            Configurações
          </li>

          <li
            className={selected === 'teste' ? 'selected' : ''}
            onClick={() => handleMenuClick('/', 'teste')}
          >
            <Image
              alt=""
              src={Chat}
              width={24}
              height={24}
              className={selected === 'teste' ? 'svg-selected' : 'svg-default'}
            />
            Teste
          </li>

          <li
            className={selected === 'dash' ? 'selected' : ''}
            onClick={() => handleMenuClick('/dashboard', 'dash')}
          >
            <Image
              alt=""
              src={Dash}
              width={24}
              height={24}
              className={selected === 'dash' ? 'svg-selected' : 'svg-default'}
            />
            Dashboard
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;


// "use client";
// import Image from 'next/image';
// import { FC, useState, useEffect } from 'react';
// import "@/styles/Menu.css";

// import Config from "@/assets/config.svg";
// import Chat from "@/assets/chat.svg";
// import Dash from "@/assets/dash.svg";

// const Menu: FC = () => {
//   const [selected, setSelected] = useState<string>('');

//   useEffect(() => {
//     // Inicializa o menu com o caminho atual
//     const path = window.location.pathname;
//     if (path.includes('contexto')) setSelected('config');
//     else if (path === '/') setSelected('teste');
//     else if (path.includes('dashboard')) setSelected('dash');
//   }, []);

//   const handleMenuClick = (path: string, menuItem: string) => {
//     setSelected(menuItem);
//     window.location.href = path;
//   };

//   return (
//     <div className="menu">
//       <nav>
//         <ul>
//           <li
//             className={selected === 'config' ? 'selected' : ''}
//             onClick={() => handleMenuClick('/contexto', 'config')}
//           >
//             <Image alt="" src={Config} width={24} height={24}></Image> 
//             Configurações
//           </li>

//           <li
//             className={selected === 'teste' ? 'selected' : ''}
//             onClick={() => handleMenuClick('/', 'teste')}
//           >
//             <Image alt="" src={Chat} />
//             Teste
//           </li>

//           <li
//             className={selected === 'dash' ? 'selected' : ''}
//             onClick={() => handleMenuClick('/dashboard', 'dash')}
//           >
//             <Image alt="" src={Dash} />
//             Dashboard
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Menu;



// import Image from 'next/image';
// import { FC } from 'react';
// import "@/styles/Menu.css";

// import Config from "@/assets/config.svg"
// import Chat from "@/assets/chat.svg"
// import Dash from "@/assets/dash.svg"

// const Menu: FC = () => {
//   return (
//     <div className="menu">
//       <nav>
//         <ul>
//             <li><Image alt="" src={Config} width={24} height={24}></Image> Configurações</li>
//             <li className='selected'><Image alt="" src={Chat}></Image> Teste</li>
//             <li><Image alt="" src={Dash}></Image> Dashboard</li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Menu;

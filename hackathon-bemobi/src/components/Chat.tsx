"use client";
import { useState, FormEvent } from 'react';
import "@/styles/Chat.css"
import Image from 'next/image';
import Icon from '@/assets/bot-icon.svg'

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: 'assistant', content: 'Oi! Eu sou a Iasmin, sua assistente virtual da Smart Gym 😄. Estou aqui para te ajudar com matrícula, escolher o melhor plano de treinos, gerenciar pagamentos e esclarecer dúvidas sobre os benefícios da academia. Precisa de ajuda com algum desses assuntos? 💪🏋️‍♂️💳' },
        { id: 2, role: 'user', content: 'Olá meu nome é Matheus e estou tendo dificuldade com a data de pagamento no primeiro dia de cada mês.' },
        { id: 3, role: 'assistant', content: 'Oi, Matheus! Entendi, você está tendo dificuldades com o pagamento no primeiro dia de cada mês. Se quiser, posso te ajudar a alterar a data de vencimento da sua mensalidade para um dia mais conveniente. 😊 Confirma para mim se deseja mesmo alterar a data, e me avise qual seria a nova data ideal para você! 👇' },
        { id: 4, role: 'user', content: 'Eu queria alterar a data de pagamento para o dia 10 de cada mês, seria possível?' },
        { id: 5, role: 'assistant', content: 'Certo, Matheus! Vou confirmar com você antes de prosseguir. 😊 Você deseja mesmo alterar a data de pagamento para o dia 10 de cada mês? Se sim, me avise e já farei o ajuste!' },
        { id: 6, role: 'user', content: 'Confirmo.' },
        { id: 7, role: 'assistant', content: 'Perfeito, Matheus! Estou alterando a data de pagamento para o dia 10 de cada mês. 💪📅 Se precisar de mais alguma coisa, é só me avisar! 😊' },
      ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        role: 'user',
        content: input,
      };
      setMessages([...messages, newMessage]);
      setInput(''); 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.role === 'user' ? 'user' : 'assistant'}`}
          >
            <Image src={Icon} alt="" width={32} height={32}/>
            <div className='col'>
                <p><strong>{message.role === 'user' ? '' : 'Ícaro'}</strong></p>
                <div className="message-content">
                <p>{message.content}</p>
                </div>
            </div>
          </div>
        ))}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;

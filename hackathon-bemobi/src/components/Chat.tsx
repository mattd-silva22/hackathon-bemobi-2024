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
    { id: 1, role: 'assistant', content: 'O Matheus! Percebi que você tem enfrentado algumas dificuldades com o pagamento da Smartfit no dia 1º de cada mês. Você gostaria de compartilhar o que está acontecendo? Estou aqui para ajudar!' },
    { id: 2, role: 'user', content: 'Meu cartão vira na data de pagamento da smartfit, e como eu não tenho limite disponível, o valor não é debitado da minha conta, preciso pagar na maquininha na academia' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        role: 'assistant',
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

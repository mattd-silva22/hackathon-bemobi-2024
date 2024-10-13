import "./page.css"
import Card from "@/components/Card";
import Image from "next/image";
import NewBot from "@/assets/new-bot.svg"

export default function Contexto() {
  return (
    <main>
      <div className="contexto">
        <div className="new"> NOVO BOT
            <div><Image src={NewBot} alt="" width={28} height={28} /> Novo Template</div>
        </div>
        <Card/>
      </div>
    </main>
  );
}

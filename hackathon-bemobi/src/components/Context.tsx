"use client";
import Image from "next/image";
import PDF from "@/assets/pdf-icon.svg";
import "@/styles/Context.css";
import upload from "@/assets/upload.svg"

export default function Context() {
  return (
    <div className="context-section">
      <div className="context-titles">
        <h2>NOME DO ARQUIVO</h2>
        <h2>FORMATO</h2>
        <h2>TAMANHO</h2>
        <h2>STATUS</h2>
      </div>
      <hr />

      <div className="file">
        <div><Image src={PDF} alt="" /> assets.pdf</div>
        <p> PDF</p>
        <p>5.3MB</p>
        <p>Enviado</p>
      </div>

      <hr />

      <label htmlFor="file-upload" className="upload">
        <Image src={upload} alt="" /> Arraste e solte ou clique e selecione o arquivo
      </label>
      <input id="file-upload" type="file" accept="image/*" style={{ display: 'none' }} />
      <button onClick={() => window.location.href = "/"} className="submit-btn">Treinar Modelo</button>
    </div>
  );
}

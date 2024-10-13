"use client";
import "@/styles/Card.css"
import Image from "next/image";
import Churn from "@/assets/bot-churn.svg"

const Card = () => {

  return (
    <div className="cards-container">

        <div className="bot-card selected">
            <div>
                <Image src={Churn} alt="" width={28} height={28}></Image>
                <h1>Bot Churn</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem mauris. Nunc iaculis nibh augue, non rutrum neque mollis eu. In eu nulla nec diam sagittis varius.</p>
        
        </div>

        <div className="bot-card">
            <div>
                <Image src={Churn} alt="" width={28} height={28}></Image>
                <h1>Bot Churn</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem mauris. Nunc iaculis nibh augue, non rutrum neque mollis eu. In eu nulla nec diam sagittis varius.</p>
        
        </div>

        <div className="bot-card">
            <div>
                <Image src={Churn} alt="" width={28} height={28}></Image>
                <h1>Bot Churn</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem mauris. Nunc iaculis nibh augue, non rutrum neque mollis eu. In eu nulla nec diam sagittis varius.</p>
        
        </div>

        <div className="bot-card">
            <div>
                <Image src={Churn} alt="" width={28} height={28}></Image>
                <h1>Bot Churn</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem mauris. Nunc iaculis nibh augue, non rutrum neque mollis eu. In eu nulla nec diam sagittis varius.</p>
        
        </div>
    </div>
  );
};

export default Card;

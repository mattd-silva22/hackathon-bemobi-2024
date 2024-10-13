import dashboard from "@/assets/dashboard.png"
import Image from "next/image";
import "./page.css"

export default function Dashboard() {

  return (
    <main className="dashboard">
      <Image src={dashboard} alt="" width={1000} height={700}></Image>
    </main>
  );
}

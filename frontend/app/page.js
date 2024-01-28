import Link from "next/link";
import AA_Logo from "../assets/AA_Logo.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="homeLayout">
        howdy
        <div className="links">
          <Link href="/food-order">Food Orders</Link>
          <Link href="/restroom">Restroom</Link>
          <Link href="/seat-swap">Sear Swap</Link>
        </div>
      </div>
    </>
  );
}

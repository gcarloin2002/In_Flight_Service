import Link from "next/link";
import AA_Logo from "../../assets/AA_Logo.png";
import "../../styles/FoodOrder.css";

export default function foodOrder() {
  return (
    <div className="foodOrderContainer">
      {/* Header */}
      <div className="header">
        <Link href="/">Back</Link>
        <h1>Food Selection</h1>
        <img className="AA_Logo" src={AA_Logo.src} />
      </div>

      {/* Entrees */}
      <div className="entrees">
        <div className="sub-header">
          <h1>Entrees</h1>
        </div>
      </div>

      {/* Snacks */}
      <div className="snacks">
        <div className="sub-header">
          <h1>Snacks</h1>
        </div>
      </div>

      {/* Drinks */}
      <div className="drinks">
        <div className="sub-header">
          <h1>Drinks</h1>
        </div>
      </div>
    </div>
  );
}

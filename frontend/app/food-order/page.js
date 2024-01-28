import Link from "next/link";
import AA_Logo from "../../assets/AA_Logo.png";
import ChevronLeft from "../../assets/chevron-left-solid.svg";
import AirplaneBackground from "../../assets/Airplane-1.png";
import "../../styles/FoodOrder.css";

export default function foodOrder() {
  return (
    <div className="food-order-container">
      {/* Header */}
      <div className="header">
        <Link href="/">
          <img className="chevron-left" src={ChevronLeft.src} />
        </Link>
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

import ChevronLeft from "../../assets/chevron-left-solid.svg";
import Link from "next/link";
import "../../styles/Restaurant.css";

export default function Restroom() {
  return (
    <div className="food-order-container">
      <div className="header">
        <Link href="/">
          <img className="chevron-left" src={ChevronLeft.src} />
        </Link>

      </div>
      <div className="centralContainer">
        <div className="buttonCol">
          <div className="reserveButton">

          </div>
          <div className="reserveButton">

          </div>
        </div>
        
        <div className="buttonCol">
          <div className="reserveButton">

          </div>
          <div className="reserveButton">

          </div>
        </div>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

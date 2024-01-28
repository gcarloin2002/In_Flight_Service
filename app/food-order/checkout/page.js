
import confirmed from "../../../assets/confirmed.png";
import "../../../styles/Checkout.css";
import ChevronLeft from "../../../assets/chevron-left-solid.svg";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="food-order-container">
      <div className="header">
        <Link href="/">
          <img className="chevron-left" src={ChevronLeft.src} />
        </Link>
      </div>
      <div className="confirmBox">

        <img className="confirmedImg" src={confirmed.src} />
        <div className="confirmMessage"> Order Confirmed! </div>
      </div>
      <div className="header"></div>
    </div>
    );
}

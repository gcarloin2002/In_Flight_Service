import Link from "next/link";
import food_icon from "../assets/food_icon.png";
import restroom_icon from "../assets/restroom_icon.png"
import "../styles/Home.css";

// <img className="AA_Logo" src={AA_Logo.src}/>

export default function Home() {
    return (
      <div className="food-order-container">

        <div className="header">
        
        </div>

        <div className="buttonSet">
            <Link href="/restroom">
                <div className="menuButton">
                    <img className="icon" src={restroom_icon.src}/>
                    <div className="buttonTitle">Restroom</div>
                    <div className="redLine"> </div>
                    <p>Order food now and your order will arrive next round</p>
                    <div className="redBox">Reserve</div>
                </div>
            </Link>
            <Link href="/food-order">
                <div className="menuButton">
                    <img className="icon" src={food_icon.src}/>
                    <div className="buttonTitle">Food Order</div>
                    <div className="blueLine"> </div>
                    <p>Check restroom availability and reserve a time </p>
                    <div className="blueBox">Order Now</div>
                </div>
            </Link>
        </div>

        <div className="footer">

        </div>
            

        
      </div>
    )
  }
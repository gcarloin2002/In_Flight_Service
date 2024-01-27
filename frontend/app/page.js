import AA_Logo from "../assets/AA_Logo.png";

export default function Home() {
    return (
      <>
      <div className="homeLayout">
        <div className="header"> 
            <img className="AA_Logo" src={AA_Logo.src}/>
        </div>

      </div>
      </>
    )
  }
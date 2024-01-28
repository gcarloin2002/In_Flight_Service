"use client";
import { useEffect, useState } from "react";
import ChevronLeft from "../../assets/chevron-left-solid.svg";
import Link from "next/link";
import "../../styles/Restaurant.css";

export default function Restroom() {
  const [toiletOccupancy, setToiletOccupancy] = useState([]);
  const [reservationName, setReservationName] = useState("");

  useEffect(() => {
    // Fetch toilet occupancy data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/toiletOccupancy"); // Update the API endpoint accordingly
        const data = await response.json();
        setToiletOccupancy(data.toiletOccupancy);
      } catch (error) {
        console.error("Error fetching toilet occupancy:", error);
      }
    };
    fetchData();
  }, []);

  const handleReserve = async (toiletNumber) => {
    // Check if a name is entered before making a reservation
    if (!reservationName.trim()) {
      alert("Please enter your name before reserving.");
      return;
    }

    try {
      // Make an API call to reserve the toilet
      const response = await fetch("/api/reserveToilet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toiletNumber,
          reservationName,
        }),
      });

      const result = await response.json();
      console.log(result);

      // Fetch updated toilet occupancy after reservation
      const updatedResponse = await fetch("/api/toiletOccupancy");
      const updatedData = await updatedResponse.json();
      setToiletOccupancy(updatedData.toiletOccupancy);

      // Clear the reservation name after successful reservation
      setReservationName("");

      // You can handle the response or perform any other actions here
    } catch (error) {
      console.error("Error reserving toilet:", error);
    }
  };

  const handleNameChange1 = (event) => {
    setReservationName(document.getElementById("text1").value);
  };

  const handleNameChange2 = (event) => {
    setReservationName(document.getElementById("text2").value);
  };

  const handleNameChange3 = (event) => {
    setReservationName(document.getElementById("text3").value);
  };

  const handleNameChange4 = (event) => {
    setReservationName(document.getElementById("text4").value);
  };

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
            <div className="toiletName">Toilet 1{" "}</div>
            {toiletOccupancy && toiletOccupancy[0]
              ? <div className="occupiedStatus">(Occupied)</div>
              : <div className="notOccupiedStatus">(Unoccupied)</div>}
            {toiletOccupancy && !toiletOccupancy[0] && (
              <div>
                <input
                  type="text"
                  id="text1"
                  placeholder="Enter your name"
                  onChange={handleNameChange1}
                />
                <button onClick={() => handleReserve(0)}>Reserve</button>
              </div>
            )}
          </div>
          <div className="reserveButton">
            <div className="toiletName">Toilet 3{" "}</div>
            {toiletOccupancy && toiletOccupancy[2]
              ? <div className="occupiedStatus">(Occupied)</div>
              : <div className="notOccupiedStatus">(Unoccupied)</div>}
            {toiletOccupancy && !toiletOccupancy[2] && (
              <div>
                <input
                  type="text"
                  id="text3"
                  placeholder="Enter your name"
                  onChange={handleNameChange3}
                />
                <button onClick={() => handleReserve(2)}>Reserve</button>
              </div>
            )}
          </div>
        </div>
        <div className="buttonCol">
          <div className="reserveButton">
            <div className="toiletName">Toilet 2{" "}</div>
            {toiletOccupancy && toiletOccupancy[1]
              ? <div className="occupiedStatus">(Occupied)</div>
              : <div className="notOccupiedStatus">(Unoccupied)</div>}
            {toiletOccupancy && !toiletOccupancy[1] && (
              <div>
                <input
                  type="text"
                  id="text2"
                  placeholder="Enter your name"
                  onChange={handleNameChange2}
                />
                <button onClick={() => handleReserve(1)}>Reserve</button>
              </div>
            )}
          </div>
          <div className="reserveButton">
            <div className="toiletName">Toilet 4{" "}</div>
            {toiletOccupancy && toiletOccupancy[3]
              ? <div className="occupiedStatus">(Occupied)</div>
              : <div className="notOccupiedStatus">(Unoccupied)</div>}
            {toiletOccupancy && !toiletOccupancy[3] && (
              <div>
                <input
                  type="text"
                  id="text4"
                  placeholder="Enter your name"
                  onChange={handleNameChange4}
                />
                <button onClick={() => handleReserve(3)}>Reserve</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

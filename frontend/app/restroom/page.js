"use client"
import { useEffect, useState } from "react";
import ChevronLeft from "../../assets/chevron-left-solid.svg";
import Link from "next/link";
import "../../styles/Restaurant.css";


export default function Restroom() {
    const [toiletOccupancy, setToiletOccupancy] = useState([]);

    useEffect(() => {
        // Fetch toilet occupancy data from the API
        const fetchData = async () => {
          try {
            const response = await fetch('/api/toiletOccupancy'); // Update the API endpoint accordingly
            const data = await response.json();
            setToiletOccupancy(data.toiletOccupancy);
            console.log(data);
          } catch (error) {
            console.error('Error fetching toilet occupancy:', error);
          }
        };
        fetchData();
    }, []);

    const handleReserve = async (toiletNumber) => {
        // Check if a name is entered before making a reservation
        if (!reservationName.trim()) {
          alert('Please enter your name before reserving.');
          return;
        }
    
        try {
          // Make an API call to reserve the toilet
          const response = await fetch('/api/reserveToilet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              toiletNumber,
              reservationName,
            }),
          });
    
          const result = await response.json();
          console.log(result);
    
          // Fetch updated toilet occupancy after reservation
          const updatedResponse = await fetch('/api/toiletOccupancy');
          const updatedData = await updatedResponse.json();
          setToiletOccupancy(updatedData.toiletOccupancy);
    
          // Clear the reservation name after successful reservation
          setReservationName('');
    
          // You can handle the response or perform any other actions here
        } catch (error) {
          console.error('Error reserving toilet:', error);
        }
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
                Toilet 1 {toiletOccupancy[0] ? '(Occupied)' : '(Not occupied)'}
                {!toiletOccupancy[0] && (
                  <div>
                    <input type="text" placeholder="Enter your name" />
                    <button onClick={() => handleReserve(1)}>Reserve</button>
                  </div>
                )}
              </div>
              <div className="reserveButton">
                Toilet 3 {toiletOccupancy[2] ? '(Occupied)' : '(Not occupied)'}
                {!toiletOccupancy[2] && (
                  <div>
                    <input type="text" placeholder="Enter your name" />
                    <button onClick={() => handleReserve(3)}>Reserve</button>
                  </div>
                )}
              </div>
            </div>
            <div className="buttonCol">
              <div className="reserveButton">
                Toilet 2 {toiletOccupancy[1] ? '(Occupied)' : '(Not occupied)'}
                {!toiletOccupancy[1] && (
                  <div>
                    <input type="text" placeholder="Enter your name" />
                    <button onClick={() => handleReserve(2)}>Reserve</button>
                  </div>
                )}
              </div>
              <div className="reserveButton">
                Toilet 4 {toiletOccupancy[3] ? '(Occupied)' : '(Not occupied)'}
                {!toiletOccupancy[3] && (
                  <div>
                    <input type="text" placeholder="Enter your name" />
                    <button onClick={() => handleReserve(4)}>Reserve</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      );
}

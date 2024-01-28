"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AA_Logo from "../../assets/AA_Logo.png";
import ChevronLeft from "../../assets/chevron-left-solid.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/FoodOrder.css";

export default function FoodOrder() {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="food-order-container-1">
      {/* Header */}
      <div className="header">
        <Link href="/">
          <img className="chevron-left" src={ChevronLeft.src} />
        </Link>
        <h1>Food Selection</h1>
        <img className="AA_Logo" src={AA_Logo.src} />
      </div>

      <div className="content">
        <h1 className="header">Entrees</h1>
        <div className="container">
          <Slider {...settings}>
            {Images.map((item) => (
              <button
                className="slide"
                onClick={() => {
                  console.log("test" + item.id);
                  addOrder();
                  decrementFood(item.id);
                }}
                key={item.id}
              >
                <div className="slide">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="img"
                    onLoad={() => {
                      console.log(`Image loaded: ${item.alt}`);
                    }}
                  />
                </div>
              </button>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

async function addOrder() {
    const newOrder = {userid: 0, orderconfirmed: false };
    try {
        const response = await fetch('/api/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newOrder,
            }),
        });
        const data = await response.json(); // await here

        console.log(data);

        // You might want to handle the response here if needed
    } catch (error) {
        console.error('Error updating row:', error);
    }
}

async function decrementFood(id) {
    try {
        const response = await fetch('/api/decrementFood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        });
        const data = await response.json(); // await here

        console.log(data);

        // You might want to handle the response here if needed
    } catch (error) {
        console.error('Error updating row:', error);
    }
}

const Images = [
  {
    id: 0,
    src: "https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg",
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 1,
    src: "https://hips.hearstapps.com/hmg-prod/images/goulash-vertical-64de8d216ea51.jpg",
    alt: "Image 3",
    title: "Ford Mustang",
    description: "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 3,
    src: "https://www.eatingwell.com/thmb/Z30Dnoxft_c8dwJzKakVpJuuqJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-garlic-skillet-chicken-with-spinach-7fb96b8ced6b4075b61b01d5d308f73b.jpg",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 2,
    src: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
];

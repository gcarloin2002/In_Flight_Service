"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AA_Logo from "../../assets/AA_Logo.svg";
import ChevronLeft from "../../assets/chevron-left-solid.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/FoodOrder.css";
import Image from "next/image";

export default function FoodOrder() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    navigator: false,
  };

  const [entrees, setEntrees] = useState();
  const [snacks, setSnacks] = useState();
  const [drinks, setDrinks] = useState();
  const [itemId, setItemId] = useState();

  const foodIdHandler = (id) => {
    setItemId(id);
  };

  return (
    <div className="food-order-container-1">
      <div
        className="fixed-button"
        onClick={(e) => {
          // Prevent the default behavior of the link
          e.preventDefault();

          // Check if itemId is null or undefined before proceeding to checkout
          if (itemId === null || itemId === undefined) {
            alert("Please select an item before proceeding to checkout.");
            return;
          }
          decrementFood(itemId);

          // Programmatically navigate to the checkout page
          window.location.href = "/food-order/checkout";
        }}
      >
        Checkout
      </div>

      {/* Header */}
      <div className="header">
        <Link href="/">
          <img className="chevron-left" src={ChevronLeft.src} />
        </Link>
        <h1>Food Selection</h1>
        <Image src={AA_Logo} alt="AA Logo" className="AA_Logo_Food" />
      </div>

      <div className="content">
        <h1 className="header-entrees">Entrees</h1>
        <div className="container">
          <Slider {...settings}>
            {ENTREES.map((item) => (
              <button
                className="slide-btn"
                onClick={() => {
                  console.log("test" + item.id);
                  addOrder();
                  foodIdHandler(item.id);
                  setEntrees(item.id);
                }}
                key={item.id}
              >
                <div className="slide">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`img ${
                      item.id === entrees ? "selected-image" : ""
                    }`}
                  />
                </div>
              </button>
            ))}
          </Slider>
        </div>
      </div>

      {/* Need to change onclick, images here */}
      <div className="">
        <h1 className="header-entrees">Snacks</h1>
        <div className="container">
          <Slider {...settings}>
            {SNACKS.map((item) => (
              <button
                className="slide-btn"
                onClick={() => {
                  console.log("test" + item.id);
                  addOrder();
                  foodIdHandler(item.id);
                  setSnacks(item.id);
                }}
                key={item.id}
              >
                <div className="slide">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`img ${
                      item.id === snacks ? "selected-image" : ""
                    }`}
                  />
                </div>
              </button>
            ))}
          </Slider>
        </div>
      </div>

      {/* Need to change onclick, images here */}
      <div className="drink-container">
        <h1 className="header-entrees">Drinks</h1>
        <div className="container">
          <Slider {...settings}>
            {DRINKS.map((item) => (
              <button
                className="slide-btn"
                onClick={() => {
                  console.log("test" + item.id);
                  addOrder();
                  foodIdHandler(item.id);
                  setDrinks(item.id);
                }}
                key={item.id}
              >
                <div className="slide">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`img ${
                      item.id === drinks ? "selected-image" : ""
                    }`}
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
  const newOrder = { userid: 0, orderconfirmed: false };
  try {
    const response = await fetch("/api/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newOrder,
      }),
    });
    const data = await response.json(); // await here

    console.log(data);

    // You might want to handle the response here if needed
  } catch (error) {
    console.error("Error updating row:", error);
  }
}

async function decrementFood(id) {
  try {
    const response = await fetch("/api/decrementFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await response.json(); // await here

    console.log(data);

    // You might want to handle the response here if needed
  } catch (error) {
    console.error("Error updating row:", error);
  }
}

const ENTREES = [
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
    id: 2,
    src: "https://www.eatingwell.com/thmb/Z30Dnoxft_c8dwJzKakVpJuuqJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-garlic-skillet-chicken-with-spinach-7fb96b8ced6b4075b61b01d5d308f73b.jpg",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 3,
    src: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 5,
    src: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
];

const SNACKS = [
  {
    id: 0,
    src: "https://target.scene7.com/is/image/Target/GUEST_bcd59b40-b890-4e6b-85a1-1831623cafb0?wid=488&hei=488&fmt=pjpeg",
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 1,
    src: "https://cdn.loveandlemons.com/wp-content/uploads/2021/07/peanut-butter-no-bake-cookies-1.jpg",
    alt: "Image 3",
    title: "Ford Mustang",
    description: "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 2,
    src: "https://target.scene7.com/is/image/Target/GUEST_6df4a8dd-a0c3-40df-83b9-b02ea713f292",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 3,
    src: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/3379/24916/saladix-cross-27__72378.1687529980.jpg?c=2",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
  {
    id: 4,
    src: "https://www.budgetbytes.com/wp-content/uploads/2019/05/Veggie-Snack-Packs-H-500x500.jpg",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 5,
    src: "https://www.halfbakedharvest.com/wp-content/uploads/2020/09/Everything-Ranch-Cheese-and-Pretzel-Snack-Mix-1.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
];

const DRINKS = [
  {
    id: 0,
    src: "https://hips.hearstapps.com/hmg-prod/images/sex-on-the-beach-vertical-6442f7c22a415.jpg",
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 1,
    src: "https://www.sugarandsoul.co/wp-content/uploads/2022/05/blue-lagoon-drink-10.jpg",
    alt: "Image 3",
    title: "Ford Mustang",
    description: "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 2,
    src: "https://www.southernliving.com/thmb/SEwOXQceeJ1VPWhY1OQaDKTqV2Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SL_Roy_Rogers_Drink_3-8e06c8f2df244c5ea6c5b7b55848072f.jpg",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 3,
    src: "https://waterbutlers.com/cdn/shop/products/coke1_41ae86e4-d7a6-4fb3-93e7-049ab97312fc_600x.jpg?v=1606515428",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
  {
    id: 4,
    src: "https://www.thecookierookie.com/wp-content/uploads/2021/09/featured-starbucks-pink-drink-recipe.jpg",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 5,
    src: "https://www.halfbakedharvest.com/wp-content/uploads/2021/07/Strawberry-Pink-Drink-1.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
];

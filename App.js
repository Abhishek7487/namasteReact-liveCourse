import React, { createElement as CE } from "react";
import ReactDOM from "react-dom/client";

// const heading = CE("h2", { id: "title", key: "h2" }, "Namaste React");

// USING JSX

// JSX => React.createElement => Object => ReactDOM

// Any peace of JS we can write inside {}

// JSX Expression
const Title = () => (
  <img
    className="logo"
    src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    alt="logo"
  ></img>
);

// REACT COMPONENTS
// - Functional Based - NEW
// - Class Based - OLD
// Name of any component starts with Capital letter

/*
      Header
      Body
       - Search Bar
       - Restaurant List
         - Restaurant CardS
          - Image
          - Name
          - Rating
          - Cousines
      Footer
        - Links
        -Copyrights
      */

const Header = () => (
  <div className="header">
    <Title />
    <div className="navItems">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const burgerking = {
  img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
  name: "Burger King",
  cusines: ["Burger", "American"],
  ratings: 4.2,
};

// Config Driven UI

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delivery Charges",
      },
    ],
  },
  {
    type: "restaurants",
    cards: [
      {
        img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
        name: "Burger King",
        cusines: ["Burger", "American"],
        ratings: 4.2,
      },
      ,
      {
        img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
        name: "KFC",
        cusines: ["Burger", "American"],
        ratings: 4.2,
      },
      ,
    ],
  },
];

const RestaurantList = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c058b951bd917bf716630dff74648a5d",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pmqyvvy3dtidhxwaokzh",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zqnj9vqi2vcuotnvpdue",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sm2d7bzlpx6mb7qauodz",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xleew4x48pi77pzsjyyz",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/psh10puzrr6ddmhhiph8",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pzah08i0tuwuuhymkahp",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/edf8410c87fc2a56e2e047bec146702b",
    name: "Burger King",
    cusines: ["Burger", "American"],
    ratings: 4.2,
  },
];

const RestaurantCard = ({ name, cusines, ratings, img }) => {
  return (
    <div className="card">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{ratings} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurantList">
      {RestaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    // Inline Style in REACT
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

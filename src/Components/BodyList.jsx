import React from "react";
import Body from "./Body";
function BodyList() {
  return (
    <div>
    
    <div className="flex gap-[200px] ml-[200px] mt-15">
  
      <Body
        title="Australian Meat"
        image="https://img.freepik.com/free-photo/delicious-tacos-arrangement_23-2151048017.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="Paid Delivery"
        price="$23"
      />
      <Body
        title="Chinese Food"
        image="https://img.freepik.com/free-photo/macaroni-noodles-with-meat-tomato-sauce-served-pan-table_1220-6823.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="Free Delivery"
        price="$9.3"
      />
    </div>
    <div className="flex gap-[200px] ml-[200px] mt-15">
    <Body
        title="American Pizza"
        image="https://img.freepik.com/free-photo/juicy-chicken-burger-with-fresh-lettuce-crispy-french-fries-wooden-board_181624-50895.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="Free Delivery"
        price="$12"
      />
      <Body
        title="Mexican Food"
        image="https://img.freepik.com/free-photo/hawaiian-pizza_74190-7222.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="Paid Delivery"
        price="$2.3"
      />
      </div>
    <div className="flex gap-[200px] ml-[200px] mt-15">
    <Body
        title="Kenyan Meal"
        image="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="free Delivery"
        price="$1.9"
      />
      <Body
        title="British Food"
        image="https://img.freepik.com/premium-photo/hamburger-shawarma-sandwiches-dark-wooden-background_165656-629.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=sph"
        desc="No Delivery"
        price="$4.3"
      />
      </div>

    </div>
    
  );
}

export default BodyList;

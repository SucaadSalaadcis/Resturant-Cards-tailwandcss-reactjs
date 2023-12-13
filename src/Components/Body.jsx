import React from "react";

function Body(props) {
  return (
    <div>
      <div className=" flex rounded-xl p-4 mt-[40px]">
        <div>
          <img
            src={props.image}
            alt=""
            className="w-full h-[200px] "
          />
        </div>
        <div className="mt-14">
          <h1 className="font-bold text-md ml-5">{props.title}</h1>
          <p className="mt-2 ml-5 text-md">{props.desc}</p>
          <p className="mt-2 ml-5 text-md">{props.price}</p>
          <button  className="flex px-3 mt-2 ml-5 text-md w-[120px] rounded-md h-[40px] bg-orange-500 text-lg pt-2">Order Now </button>
        </div>
      </div>
    </div>
  );
}

export default Body;

import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { toast } from "react-toastify";

function handleClick() {
  toast.success("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

const HomeMain = () => {
  return (
    <div>
      <h1>
        <FaAirbnb />
        Welome to Pro Look Sports Admin Area
      </h1>
      <button className="btn btn-success" onClick={handleClick}>
        My Awesome Button
      </button>
    </div>
  );
};

export default HomeMain;

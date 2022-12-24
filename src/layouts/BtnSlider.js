import React from "react";
import "../components/styles/Banner.css";
import leftArrow from "../utils/icons/left-arrow.svg";
import rigthArrow from "../utils/icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        style={{ color: "white" }}
        src={direction === "next" ? rigthArrow : leftArrow}
      />
    </button>
  );
}

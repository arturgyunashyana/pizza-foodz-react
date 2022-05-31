import React from "react";
import leftArrow from "../../../assets/images/arrow-left.svg";
import rightArrow from "../../../assets/images/arrow-right.svg";

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt='img' />
        </button>
    );
}

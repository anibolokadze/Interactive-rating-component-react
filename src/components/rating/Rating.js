import React from "react";
import ratingImage from "../../images/illustration-thank-you.svg"
import { Review } from "./Rating.Styled";
export default function Rating({ selected }) {
  return (
    <Review>
      <img src={ratingImage} alt="rate" />
      <span>You selected {selected} out 5</span>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </Review>
  );
}

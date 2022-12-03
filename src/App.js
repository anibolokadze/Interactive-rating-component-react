import { useState } from "react";
import { Container } from "./components/container/Container.styled";
import  star  from "./images/Path.png"
import Buttons from "./components/buttons/Button";
import {Submit} from "./components/submit/Submit.Styled"
import Rating from "./components/rating/Rating";

function App() {
  const [card, setCard] = useState(true);
  const [selected, setSelected] = useState(true);

  function handleClick() {
    if (selected === true) {
      return;
    } else {
      setCard(false);
    }
  }


  
  const buttonArray = [1, 2, 3, 4, 5];
  
  const getRating = (i) => {
    setSelected(i);
  }


  return (
    <>
    {card ? (
      <Container>
        <img src={star} alt="Logo" className="iconStar"/>
        <div>
          <h1>How did we do? </h1>
          <p>
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <Buttons buttonArray = {buttonArray} getRating = {getRating} />
        <Submit onClick={handleClick}>SUBMIT</Submit>
      </Container>
    ) : (
      <Rating selected={selected} />
    )}
      
    </>
  );
}

export default App;


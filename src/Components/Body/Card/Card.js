import React from 'react'
import LastFour from "../../Props/LastFour";
import Cardlogo from "../../../Resource/Images/Icon/SM/logo-card_small.png"

function Card() {
  return (
    <>
      <LastFour
        photoCover="sixth-right-cover text-center mt-3 col-md"
        titleName="pt-4"
        title= {<img src = {Cardlogo}/>}
        descriptionFirst="Get up to 3% Daily cash back"
        descriptionSec="with every purchase ."
        learn="Learn more"
        purchase="Buy"
      />
    </>
  );
}

export default Card
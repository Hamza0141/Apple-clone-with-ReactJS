import React from 'react'
import LastFour from '../../Props/LastFour'
import Applewatchseries from "../../../Resource/Images/Icon/SM/logo_apple_watch_series_8_small.png";

function AppleWatch() {
  return (
    <>
      <LastFour
        photoCover="fourth-left-cover text-center mt-3 col-md text-white"
        titleName="fourth-logos-cover  pt-5 " //
        title={<img src={Applewatchseries} />}
        descriptionFirst="A healthy leap ahead."
        learn="Learn more"
        purchase="Buy"
      />
    </>
  );
}

export default AppleWatch
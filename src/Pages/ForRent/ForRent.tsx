import React from "react";
import ForRentHomepage from "./ForRentHomepage/ForRentHomepage";
import ForRentFeactures from "./ForRentFeactures/ForRentFeactures";
import PropertiesHomeScreen from "../Properties/PropertiesHomeScreen/PropertiesHomeScreen";

function ForRent() {
  return (
    <>
      <ForRentHomepage />
      {/* <ForRentFeactures/> */}
      <PropertiesHomeScreen />
    </>
  );
}

export default ForRent;

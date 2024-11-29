import PropertiesHeaderpage from "./PropertiesHeaderpage/PropertiesHeaderpage";
import PropertiesHomeScreen from "./PropertiesHomeScreen/PropertiesHomeScreen";
import GMap from "./PropertyHomeScreenFeactures/googlemap";

function Propertices() {
  return (
    <>
      <div className="h-auto">
        <PropertiesHeaderpage />
        <PropertiesHomeScreen />
        <GMap />
     
      </div>
    </>
  );
}

export default Propertices;

import PropertiesFeatured from "./PropertiesFeatured/PropertiesFeatured";
import PropertiesHeaderpage from "./PropertiesHeaderpage/PropertiesHeaderpage";
import PropertiesHomeScreen from "./PropertiesHomeScreen/PropertiesHomeScreen";

function Propertices() {
  return (
    <>
      <div className="h-auto">
        <PropertiesHeaderpage />
        <PropertiesHomeScreen />

        {/* <PropertiesFeatured /> */}
      </div>
    </>
  );
}

export default Propertices;

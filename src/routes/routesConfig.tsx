import React from "react";
import Homemainsection from "../Pages/Homepage/Homemainsection";
import Properties from "../Pages/Properties/Propertices";
import Forsale from "../Pages/ForSale/Forsale";
import ForRent from "../Pages/ForRent/ForRent";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import English from "../Pages/English/English";
import PropertiesDetailScreen from "../Pages/Properties/PropertiesDetailScreen/PropertiesDetailScreen";

interface RouteConfig {
  path: string;
  element: React.ReactElement;
  name: string;
}

const routesConfig: RouteConfig[] = [
  { path: "/", element: <Homemainsection />, name: "Home" },
  { path: "/properties", element: <Properties />, name: "Properties" },
  { path: "/forsale", element: <Forsale />, name: "For Sale" },
  { path: "/forrent", element: <ForRent />, name: "For Rent" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/contact", element: <Contact />, name: "Contact" },
  // { path: "/english", element: <English />, name: "English" },
  { path: "/propertiesDetail/:id", element: <PropertiesDetailScreen />, name: "Property  Detail" },
];

export default routesConfig;

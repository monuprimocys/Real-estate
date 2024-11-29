import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePropertyDetailScreen_apiMutation } from "../../../app/api/PropertyDetailScreenApi/PropertyDetailScreen_api";

function PropertiesDetailScreenVideoSection() {
  const { id } = useParams();
  const [getFeatures] = usePropertyDetailScreen_apiMutation();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    async function fetchFeatures() {
      try {
        const response = await getFeatures({ id: id }).unwrap();

        if (response?.response_code === "1") {
          setPropertyDetails(response.property_data);
        }
      } catch (error) {
        console.error("Error fetching features data:", error);
      }
    }

    fetchFeatures();
  }, [getFeatures, id]);

  const { property_image = [] } = propertyDetails || {};

  // Filter out the videos from the property_image array
  const videos = property_image.filter((item) => item.type === "video");

  console.log("Filtering video ", videos);

  return (
    <div className="w-full h-[30rem]  bg-slate-500 rounded-lg">
     
    </div>
  );
}

export default PropertiesDetailScreenVideoSection;

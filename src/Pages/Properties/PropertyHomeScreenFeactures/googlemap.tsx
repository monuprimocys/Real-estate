import React, { useEffect, useState, useRef } from "react";
import { useGet_all_filtterMutation } from "../../../app/api/PropertyScreenFiltterApi/filtter_api";
import heartIcon from "../../../assets/Image/heart.png";
import locationIcon from "../../../assets/Image/location.png";
import bedicon1 from "../../../assets/Image/cardicon1.png";
import Bathsicon from "../../../assets/Image/cardicon2.png";
import Areaicon from "../../../assets/Image/cardicon3.png";

const GMap: React.FC = () => {
  const googleMapRef = useRef<HTMLDivElement | null>(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [getAllllatlonvalues, setGetAllLatLonValues] = useState<
    { id: string; lat: number; lon: number }[]
  >([]);

  const [defaultshowallapivalues] = useGet_all_filtterMutation();

  const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMZ4GbRFYSevy7tMaiH5s0JmMBBXc0qBA`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setGoogleLoaded(true);
      };

      document.body.appendChild(script);
    } else {
      setGoogleLoaded(true);
    }
  };

  useEffect(() => {
    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (googleLoaded) {
      const fetchData = async () => {
        try {
          const defaultResponse = await defaultshowallapivalues().unwrap();
          if (defaultResponse.response_code === "1") {
            const defaultProperties = defaultResponse.filter_property || [];

            const latLonValues = defaultProperties.map((property) => ({
              id: property.id, // Include ID
              lat: parseFloat(property.lat),
              lon: parseFloat(property.lon),
              type: property.type,
              title: property.title,
              price: property.price,
              bedrooms: property.bedroom,
              bathrooms: property.bathroom,
              location: property.location,
              property_image: property.property_image,
            }));

            setGetAllLatLonValues(latLonValues);
            console.log("Extracted lat, lon, and id values:", latLonValues);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [googleLoaded, defaultshowallapivalues]);

  useEffect(() => {
    if (googleLoaded && window.google && googleMapRef.current) {
      const googleMap = new window.google.maps.Map(googleMapRef.current, {
        center: { lat: 23.073292, lng: 72.560402 },
        zoom: 13,
      });

      const bounds = new window.google.maps.LatLngBounds();

      // Create markers and add hover functionality
      getAllllatlonvalues.forEach((markerObj) => {
        const marker = new window.google.maps.Marker({
          position: { lat: markerObj.lat, lng: markerObj.lon },
          map: googleMap,
          icon: {
            url: "https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png",
            scaledSize: new window.google.maps.Size(50, 50),
          },
        });

        console.log("Creating marker", getAllllatlonvalues);

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div style="display: flex; flex-direction: column; align-items: center; border-radius: 12px; padding: 15px; max-width: 300px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); font-family: Arial, sans-serif; position: relative; background-color: #fff; overflow: hidden;">
  
  <!-- Image Section -->
  <img src="${
    markerObj.property_image[0]?.url || ""
  }" alt="Property Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 15px;">

  <!-- Property Title -->
  <h3 style="margin: 0; font-size: 18px; font-weight: bold; text-align: center; color: #333;">${
    markerObj.title
  }</h3>
  
  <!-- Location -->
  <div style="display: flex; align-items: center; justify-content: center; margin: 10px 0;">
    <img src="${locationIcon}" alt="Location Icon" style="width: 16px; height: 16px; margin-right: 5px;">
    <p style="margin: 0; font-size: 14px; color: #555;">${
      markerObj.location
    }</p>
  </div>
  
  <!-- Details Section -->
  <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 10px; font-size: 14px; color: #555;">
    <div style="text-align: center; flex: 1;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
        <img src="${bedicon1}" alt="Bedrooms Icon" style="width: 20px; height: 20px;">
        <p style="margin: 0; font-weight: bold;">${
          markerObj.bedrooms || 2
        } Beds</p>
      </div>
    </div>
    <div style="text-align: center; flex: 1;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
        <img src="${Bathsicon}" alt="Bathrooms Icon" style="width: 20px; height: 20px;">
        <p style="margin: 0; font-weight: bold;">${
          markerObj.bathrooms || 2
        } Baths</p>
      </div>
    </div>
    <div style="text-align: center; flex: 1;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
        <img src="${Areaicon}" alt="Area Icon" style="width: 20px; height: 20px;">
        <p style="margin: 0; font-weight: bold;">${
          markerObj.area || 1000
        } sqft</p>
      </div>
    </div>
  </div>
  
  <!-- Price Tag -->
  <div style="position: absolute; top: 200px; right: 15px; background-color: #fff; padding: 5px 15px; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
    <p style="margin: 0; font-size: 16px; font-weight: bold; color: #B5843F;">$${
      markerObj.price || 1000
    }</p>
  </div>
</div>



`,
          disableAutoPan: true, // Prevents auto-panning
        });

        google.maps.event.addListener(infoWindow, "domready", () => {
          const infoWindowElements = document.querySelectorAll(".gm-style-iw");
          infoWindowElements.forEach((el) => {
            const closeButton = el.nextElementSibling;
            if (closeButton) closeButton.style.display = "none"; // Hide the close button
          });
        });

        // Show InfoWindow on hover
        marker.addListener("mouseover", () => {
          infoWindow.open(googleMap, marker);
        });

        // Hide InfoWindow when mouse leaves
        marker.addListener("mouseout", () => {
          infoWindow.close();
        });

        bounds.extend(marker.getPosition() as google.maps.LatLng);
      });

      googleMap.fitBounds(bounds);
    }
  }, [googleLoaded, getAllllatlonvalues]);

  return (
    <div className="items-center justify-center w-full h-full">
      <div ref={googleMapRef} className="w-full h-full mx-auto "></div>
    </div>
  );
};

export default GMap;

import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, styled, Typgraphy, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material";
import mapStyles from "../../mapStyles";

const MapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
}));

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA9Kc2ZWLGy8wPe0l2uCBO5o1AtWFFWNPQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

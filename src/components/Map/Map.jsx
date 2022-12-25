import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, styled, Typography, useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
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

const defaultImage =
  "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

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
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              "&:hover": { zIndex: 2 },
            }}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                sx={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100px",
                }}
              >
                <Typography variant="subtitle2">{place.name}</Typography>
                <img
                  src={
                    place.photo ? place.photo.images.large.url : defaultImage
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  styled,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const Container = styled("div")(({ theme }) => ({
  padding: "25px",
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  height: "75vh",
  overflow: "auto",
}));

const List = ({ places, childClicked }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("restaurants");

  console.log({ childClicked });

  return (
    <Container>
      <Typography variant="h4">
        Restaurants, Hotels, & Attractions around you
      </Typography>
      <StyledFormControl variant="standard">
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </StyledFormControl>
      <StyledFormControl variant="standard">
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </StyledFormControl>
      <GridContainer container spacing={3}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </GridContainer>
    </Container>
  );
};

export default List;

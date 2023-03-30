/* eslint-disable */
import React from "react";
import projectData from "../thankyous.json";
import { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Content from "../components/Content";

function Thankyou() {
  // Set userState.
  // Set the initial value to friendsData imported from the json file.
  const [projects, setProjects] = useState(projectData);

  // Map over friends and render a FriendCard component for each friend object
  return (
    <Box display="flex" justifyContent="center">
      <div>
        <Typography
          variant="h2"
          style={{ color: "black", textAlign: "center", marginTop: "50px" }}
        >
          THANK-YOUS
        </Typography>
        <Grid container spacing={0} justifyContent="center">
          {projects.map((thanks) => (
            <Grid item xs={12} sm={6} md={4}>
              <Content
                id={thanks.id}
                key={thanks.id}
                name={thanks.name}
                description={thanks.description}
                image={thanks.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default Thankyou;

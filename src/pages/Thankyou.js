/* eslint-disable */
import React from "react";
import projectData from "../thankyous.json";
import { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Content from "../components/Content";
import Sound from "../sounds/sound.wav";
import Spotify from "../components/Content/spotify";
import Modall from "../components/modal/modal";

function Thankyou() {
	const playSound = () => {
	  const audio = new Audio(Sound);
	  audio.play();
	};

	//play sound on load
	useEffect(() => {
	  playSound();
	}, []);
	// Set userState.
	// Set the initial value to friendsData imported from the json file.
	const [projects, setProjects] = useState(projectData);

	// Map over friends and render a FriendCard component for each friend object
	return (
		<Box
			display="flex"
			justifyContent="center"
			sx={{
				flexGrow: 1,
				m: 1,
				width: "80vw",
				margin: "auto",
				backgroundColor: "rgba(0,0,0,0.5)",
			}}
		>
			<div>
				<Typography
					variant="h2"
					style={{
						color: "black",
						textAlign: "center",
						marginTop: "50px",
						color: "white",
					}}
				>
					THANK YOU!
				</Typography>
				<Grid
					container
					spacing={0}
					justifyContent="center"
				>
					{projects.map((thanks) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
						>
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
				<Spotify />
				<Modall></Modall>
			</div>
		</Box>
		
	);
}

export default Thankyou;

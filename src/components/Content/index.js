/* eslint-disable */
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image from "../../images/pika.gif";
import projectData from "../../thankyous.json";

function Content(props) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        sx={{ margin: "5px" }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {expanded && <Typography>{props.description}</Typography>}
          <img src={image} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Content;

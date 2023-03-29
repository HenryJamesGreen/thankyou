import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Content(props) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{props.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {expanded && <Typography>{props.description}</Typography>}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Content;

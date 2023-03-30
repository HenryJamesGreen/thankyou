import { Modal } from '@material-ui/core';
import { useState } from 'react';
import { Button } from '@mui/material';



function Modall() {
   const [open, setOpen] = useState(false);   
   return(
  
  <div>

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
  <div className={classes.paper}>
    <h2 id="simple-modal-title">Modal Title</h2>
    <p id="simple-modal-description">
      This is the modal content.
    </p>
  </div>
</Modal>
</div>
)
}export default Modall
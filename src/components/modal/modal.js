import Modal from '@mui/material/Modal';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import "./modal.css"


function Modall() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    
    
    
  };
 return (
    <div>
      <Button onClick={handleOpen}>Click here for a suprise!</Button>
      <Modal 
        
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='modalCss' sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
        <div className='imageDiv'><img className="image" src='./image.png'></img></div> 
         
        </Box>
      </Modal>
    </div>
  );
} export default Modall

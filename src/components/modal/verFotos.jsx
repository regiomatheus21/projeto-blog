import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from 'react-router-dom'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 6,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  
  return (
    <div>
      <Button onClick={handleOpen}>Ver Fotos</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       
        <Box sx={style}>
          <img src="https://via.placeholder.com/150/92c952"/>
          <img src="https://via.placeholder.com/150/771796"/>
          <img src="https://via.placeholder.com/150/24f355"/>
          <img src="https://via.placeholder.com/150/d32776"/>
          <img src="https://via.placeholder.com/150/f66b97"/>
          <img src="https://via.placeholder.com/150/56a8c2"/>
          <img src="https://via.placeholder.com/150/b0f7cc"/>
          <img src="https://via.placeholder.com/150/54176f"/>
          <img src="https://via.placeholder.com/150/51aa97"/>
          <img src="https://via.placeholder.com/150/810b14"/>
          
          <img src="https://via.placeholder.com/150/1ee8a4"/>
          <img src="https://via.placeholder.com/150/66b7d2"/>
         
        </Box>

      </Modal>
    </div>
  );
}

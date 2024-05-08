import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ButtonBase,Typography,DialogTitle, DialogContent, DialogActions, Button , IconButton , Dialog} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WrapText } from '@mui/icons-material';
import Tablelayout from '../Tablelayout/Tableform'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Profile =()=>{

   const[hidediv,setHidediv]  = useState(false);
   const[category,setCategory] = useState();
   const[data,setData] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "...",
            "images": ["https://media.wired.com/photos/6332360740fe1e8870aa3bc0/3:2/w_2400,h_1600,c_limit/iPhone-14-Review-Gear.jpg","https://media.wired.com/photos/5d803f5dc891950008ce3447/master/pass/iphone-11_6175-Edit.jpg"]
          }
        ])
 
/*Image Slide code start from here */
const [currentIndex, setCurrentIndex] = useState(0);


const nextSlide = (items) => {
 
  setCurrentIndex((prevIndex) => (prevIndex + 1) % items.images.length);
};

const prevSlide = (items) => {

  setCurrentIndex((prevIndex) => (prevIndex - 1 + items.images.length) % items.images.length);

};

/*Imageslide code ended form here */

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const style = {
  child: {
      width: "100%",
      height: "100%",
      backgroundSize: 'contain',
      //backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // object-fit: 'cover', /* Optional: Maintain aspect ratio while covering the entire container */
      margin: '5px',
  }
};

useEffect(() => {
  // Effect logic
  //useState(false)
  return () => {
    // Cleanup logic (optional)
  };
}, [/* dependencies */]);

const hadleImage=(dataval)=>{
  setCategory(dataval.category)
  setHidediv(true);
}

const handleClose =()=>{
  setHidediv(false)
}

const habdletable =()=>{
//  history.push('/tablelayout')
}

return(
     <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff', }} >
     { Array.isArray(data) && data.map((items)=>(
          <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={items.images[0]} onClick={()=>{hadleImage(items)}} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {items.description}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {items.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a onClick={habdletable} />
                    {/* <Link component={Tablelayout} to="/tablelayout">
                      Table List
                    </Link> */}
                    </Typography>
                  </Grid>
                
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                  {'$'+items.price}
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
       ))}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={hidediv}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {category}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }} >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
       { Array.isArray(data) && data.map((itemdata)=>(
          <div className="image-slider" >
            <button onClick={()=>prevSlide(itemdata)}>Previous</button>
            <img src={itemdata.images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={style.child}/>
            <button onClick={()=>nextSlide(itemdata)}>Next</button>
          </div> 
        ))}
        </DialogContent>
        <DialogContent>
        <Link to="/table">TableList</Link>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
       
      </BootstrapDialog>
    </Paper>
)
}
export default Profile;
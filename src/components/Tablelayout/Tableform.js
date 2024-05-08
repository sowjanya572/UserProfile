import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ButtonBase,Typography,DialogTitle, DialogContent, DialogActions, Button , IconButton , Dialog} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Tableform=()=> {

const columns =[
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'images',
    headerName: 'Image',
    width: 200,
    renderCell: (params) => (
      <img
        src={params.row.images[0]}  // Display the first image
        alt={`Image-${params.row.id}`}
        style={{ width: '100px', height: '100px', objectFit: 'cover' ,borderRadius:'40px'}}
        onClick={()=>hadleImage(params)}
      />
    ),
  },
];

  const [rows,Setrows] = useState([]);

  const getAllProducts = () => {
    axios.get('https://dummyjson.com/products').then(response => {
    Setrows(response.data.products)
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error.message);
  });
 }


useEffect(() => {
  getAllProducts();
  return () => {  
  }
}, [])


/*Image Slide code start from here */
const [currentIndex, setCurrentIndex] = useState(0);
const[category,setCategory] = useState([]);
const[hidediv,setHidediv]  = useState(false);

const nextSlide = (items) => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
};

const prevSlide = (items) => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
};



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

/*Imageslide code ended form here */

const hadleImage=(dataval)=>{

  setCategory(dataval.row.images)
  setHidediv(true);
}

const handleClose =()=>{
  setHidediv(false)
}

  return (
    <div style={{width:'50% !important' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
      />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={hidediv}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Images
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
       
          <div className="image-slider">
            <button onClick={()=>prevSlide(category)}>Previous</button>
            
            <img src={category[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={style.child}/>
            
            <button onClick={()=>nextSlide(category)}>Next</button>
          </div> 
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
       
      </BootstrapDialog>


    </div>
  );
}

export default Tableform;

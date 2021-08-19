import React, { useEffect, useState } from  'react';
import Styles from './styles';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {postProduct,patchProduct} from '../../../../actions/productAction'
 
const ProductForm = ({currentId})=>{
    const classes = Styles();
    const dispatch = useDispatch();


    const [productData,setProductdata] = useState({

        product:"",
        price:"",
        category:"",
        availableQty:"",
        minimumQty:"",
        mesuringUnit:"",
        selectedfile:""

    })


    
const product = useSelector((state)=>currentId ? state.ProductReducer.find((p)=>p._id == currentId ):null)


useEffect(()=>{
    if(product) setProductdata(product);
},[product])

const handleSubmit = (e) =>{
    if(currentId){
        dispatch(patchProduct(currentId,productData))
        clear();
    }
    else {
        dispatch(postProduct(productData))
        clear();
    }
    
}

const clear=()=>{
    currentId= null;
    setProductdata({
        product:"",
        price:"",
        category:"",
        availableQty:"",
        minimumQty:"",
        mesuringUnit:"",
        selectedfile:""

    })


}

return(
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    <Typography variant="h6">{currentId ? 'Edit' :'Add'} a Product </Typography>
        <TextField name ='product' 
        variant="outlined"
        label="Product"
        fullWidth
        value={productData.product}
        onChange={(e) =>setProductdata({...productData, product : e.target.value })}
        />


        <TextField name ='price' 
        variant="outlined"
        label="Price"
        type='number'
        fullWidth
        value={productData.price}
        onChange={(e) =>setProductdata({...productData, price : e.target.value })}
        />

        <TextField name ='availableQty' 
        variant="outlined"
        label="Available Quantity"
        type = "number"
        fullWidth
        value={productData.availableQty}
        onChange={(e) =>setProductdata({...productData, availableQty : e.target.value})}
        />

        
        { <TextField name ='minimumQty' 
        variant="outlined"
        label= "Minimum Quantity"
        type="number"
        fullWidth
        value={productData.minimumQty}
        onChange={(e) =>setProductdata({...productData, minimumQty : e.target.value })}
        /> }


<select 

name ='category'

variant="outlined"
label="Category"
fullWidth
value={productData.category}
onChange={(e) =>setProductdata({...productData, category : e.target.value })}

>
 <option selected>Select from categories</option>
<option value="Vegetables">Vegetables</option>
<option value="Grocery">Grocery</option>
<option value="Detergent">Detergent</option>
<option value="Meat">Meat</option>
<option value="Seafood">Seafood</option>

</select>


<select 

name ='mesuringUnit'

variant="outlined"
label="Mesuring unit"
fullWidth
value={productData.mesuringUnit}
onChange={(e) =>setProductdata({...productData, mesuringUnit : e.target.value })}

>
 <option selected>Select measuring unit</option>
<option value="Kg">Kg</option>
<option value="l">l</option>
<option value="packets">packets</option>
<option value="bottle">bottle</option>
<option value="g">g</option>

</select>



        <div className={classes.fileInput}>
            <FileBase
            
            type ="file"
            multiple ={false}
            onDone ={({base64})=>setProductdata({...productData,selectedfile:base64})}
            
            />

            <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" size ="large" fullWidth>
              SUBMIT  </Button>

              <Button variant="contained" color="secondary" size ="small"  onClick ={clear} fullWidth>
              Clear  </Button>
        
        </div>
    </form>
    
</Paper>


)

   
}

export default ProductForm;

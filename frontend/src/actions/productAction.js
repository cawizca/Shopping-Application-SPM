import * as api from '../api/productApi';

export const getProduct = ()=> async(dispatch)=>{
    try{
        const {data} = await api.featchproducts();

        dispatch({type:'FEATCH_ALL',payload:data});

    }catch(error){
        console.log(error);
    }
} 


export const postProduct = (product)=>async(dispatch)=>{

    try{
        const {data} = await api.createProduct(product)
        dispatch({type:'CREATE',payload:data});
    }catch(error){
        console.log(error);
    }

}

export const patchProduct = (id,product) => async(dispatch)=>{
    try{
        const {data} = await api.updateProduct(id,product);
        dispatch({type:'UPDATE',payload:data})
    }catch(error){
        console.log(error)
    }
}


export const deleteproduct = (id)=> async(dispatch)=>{
    try{
        await api.deleteProduct(id);
        dispatch({type:'DELETE',payload:id});
    }catch(error){
        console.log(error);
    }
}

import axios from 'axios';

const urlgetProducts = 'http://localhost:8070/product/readAll';
const urladd = 'http://localhost:8070/product/add';
const urlupdate = 'http://localhost:8070/product/update';
const urldelete = 'http://localhost:8070/product/delete';
const urlsearch = 'http://localhost:8070/product/search';
const urlinsuff = 'http://localhost:8070/product/readInsuff';

export const featchproducts = ()=> axios.get(urlgetProducts);
export const createProduct = (newProduct)=> axios.post(urladd,newProduct);
export const updateProduct = (id,updateProduct)=> axios.patch(`${urlupdate}/${id}`,updateProduct);
export const deleteProduct =(id)=>axios.delete(`${urldelete}/${id}`)

export const adminSearch =(_ID)=>axios.get(urlsearch,{params:{id:_ID}});

export const insuffProduct = ()=> axios.get(urlinsuff);
export default(productReducer = [],action)=>{
    switch(action.type){
        case 'FEATCH_ALL' :
            return action.payload;
        
        case 'CREATE' :
            return[...postMessage,action.payload];
            
        case 'UPDATE':
            return productReducer.map((product)=>product._id === action.payload._id ? action.payload:product);

        case 'DELETE' :
            return productReducer.filter((product)=>product._id !== action.payload._id );
        
        default:
            return productReducer;    
    }
}
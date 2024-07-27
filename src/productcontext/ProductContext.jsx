import { createContext, useContext, useEffect,useReducer } from "react";
import {getProduct} from '../ApiServices/apiClient '
const AppContext = createContext();
import reducer from './productReducer'
import {products} from './productData'

const intialState={
    isLoading:false,
    product:[],
    isError:false,
     featureProducts:[],
};
// let url = "http://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,intialState);
    // let url = "http://api.pujakaitem.com/api/products";
    // let url="https://jsonplaceholder.typicode.com/users"

    // const productdata = async (url) => {
      
    //     const data2=await getProduct(url);
    //     console.log(data2);
    // };
   

 const productdata2 = async () => {
               dispatch({type:"SET_LOADING"});
        try {
         let data2=products;
        //    console.log(data2);
           dispatch({type:"SET_API_DATA",payload:data2})
       }
          catch (error) {
           dispatch({type:"API_ERROR"});
               console.log(error)
    
 }
} 
   
    useEffect(() => {
        productdata2();
    }, []);

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext=()=>{
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };

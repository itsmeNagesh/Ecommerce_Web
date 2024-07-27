import { products } from "./productData";
  

const productReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state,
            isLoading:true,
              };
          
        case 'API_ERROR':
            return { ...state, 
                isLoading:false,
                isError:true };

            case 'SET_API_DATA':
                const featureData=action.payload.filter((currentItem)=>{
                    return currentItem.featured===true;
                })
                return { ...state, 
                    isLoading:false,
                   product:action.payload,
                   featureProducts:featureData,
                           };

  


      default:
        return state;
    }
  };
export default productReducer;
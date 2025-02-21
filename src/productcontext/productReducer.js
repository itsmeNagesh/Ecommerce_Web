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
                         

          case 'SET_SINGLEPRODUCT_LOADING':
            return{
             ...state,
             isSingleLoading:true,
            };
          case 'SET_SINGLE_PRODUCT':
              return{
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
              }
           case 'SET_API_ERROR':
                return{
                  ...state,
                  isSingleLoading:false,
                  isSingleApierror:true,
                }
           case "SET_SEARCH_DATA":
                  return {
                      ...state,
                      searchdata: action.payload,
                  };
            
            // case "SET_CARTBAG_DATA":
            //   return {
            //     ...state,
            //     NofProduct: Array.isArray(action.payload) ? action.payload : [...state.NofProduct, action.payload],
            //   };
            case 'ADD_TO_CART': {
              const { id, product } = action.payload;
              const existingItem = state.NofProduct.find((item) => item.id === id);
              if (existingItem) {
                // Update quantity if product already exists
                return {
                  ...state,
                  NofProduct: state.NofProduct.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                  ),
                };
              } else {
                // Add new product to cart
                return {
                  ...state,
                  NofProduct: [...state.NofProduct, { ...product, quantity: 1 }],
                };
              }
            }

              // case 'DEL_CARTBAG_DATA':
              //   return {
              //     ...state,
              //     NofProduct: state.NofProduct.filter((item) => item.id !== action.payload), // Filter out item by ID
              //   };
              case "DEL_CARTBAG_DATA":
                const updatedCartAfterDeletion = { ...state.NofProduct };
                delete updatedCartAfterDeletion[action.payload]; // Remove product by id
                return {
                  ...state,
                  NofProduct: updatedCartAfterDeletion,
                };
          
      default:
        return state;
    }
  };
export default productReducer;
import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {

  switch(type){
    case GET_PRODUCTS_SUCCESS:
      return{
        ...state,
        data:payload
      }
      default:
        return state
  }

};
export { reducer };

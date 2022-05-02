// use axios for api call
import axios from "axios";
import { GetProductsSucess } from "./actionTypes";




 const  getProductsData=()=>async(dispatch)=> {
   
  fetch("https://movie-fake-server.herokuapp.com/products")
  .then((res)=>res.json())
  .then((res)=>dispatch(GetProductsSucess(res)))
        
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };

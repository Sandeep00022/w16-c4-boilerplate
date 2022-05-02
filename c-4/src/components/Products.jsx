import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Select } from "./Styled";


const Grid =styled.div`
   display:grid,

`

export const Products = () => {

  const {data}=useSelector((state)=>state.data)

  const dispatch=useDispatch();
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
     dispatch(getProductsData())
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
          {
             data.map((item)=>(
               <ProductCard key={item.id} item={item}/>
             ))
          }
              
              
      </Grid>
      
    </>
  );
};

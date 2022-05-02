import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
        
        <img src={item.image}/>
        <h4>{item.brand}</h4>
        <h5>{item.title}</h5>
        <h3>{item.category}</h3>
        
      </Flex>
    </>
  );
};

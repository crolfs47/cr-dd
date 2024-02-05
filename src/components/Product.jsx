import "../styles/Product.css";

const Product = ({item}) => {
  return (
    <>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.image}</div>
    </>
  )
}

export default Product;
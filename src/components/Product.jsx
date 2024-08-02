import PropTypes from 'prop-types';
const Product = ({id, title,description,price,image, deleteProduct,editProduct}) => {
  return (
   <>
   <div
      id={id}
      style={{
        border: "1px solid",
        margin: 16,
        padding: 16,
        textAlign: "center",
      }}
    >
      <img
        style={{ width: 210, height: 300, objectFit: "contain" }}
        src={image}
        alt={title}
      />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <p>{description}</p>
      <button onClick={() => deleteProduct(id)}>Delete</button>
      <button onClick={() => editProduct(id)}>Edit</button>
    </div>
   </>
  )
}
  
Product.propTypes ={
  id: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
 }

 export default Product;

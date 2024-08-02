import './App.css'
import { useEffect, useState } from 'react';
import Product from './components/Product.jsx';

function App() {
    const [products, setproducts] =useState([]);
    const [formState, setFormState] = useState({});

    const loadData = async() =>{
      const response = await fetch('https://fakestoreapi.com/products?limit=5')
      const data= await response.json();
      setproducts(data);
    }
    useEffect(() => {
      loadData();
    },[]);
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Submitting the form");
      if (formState.id) {
        updateProduct();
      } else {
        // formState gives the collected data
        createProduct();
      }
      setFormState({});
    }
    const createProduct = () => {
      const tempProd = { ...formState };
  
      tempProd.id = Date.now();
  
      setproducts([...products, tempProd ]);
    };
    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    };

    const deleteProduct = (prodId) => {
      setproducts(products.filter(({ id }) => prodId !== id));
    };
    const editProduct = (pdId) => {
      const pdData = products.find((product) => product.id === pdId);
  
      setFormState(pdData);
    };
    const updateProduct = () => {
      const index = products.findIndex((product) => product.id === formState.id);
      
      const tempProds = [...products];
      
      tempProds[index] = formState;
      setproducts(tempProds);
    };
return (
     <>
     <form onSubmit={handleSubmit}>
     <input type="text" onChange={handleChange} name="title" placeholder="Enter the title" value={formState.title || ''}/><br/><br/>
     <textarea type="text" onChange={handleChange} name="description" placeholder="Enter the description" value={formState.description || ''}/><br/><br/>
     <input type="number" onChange={handleChange} name="price" placeholder="Enter the price" value={formState.price ||''}/><br/><br/>
     <input type="url" onChange={handleChange} name="image" placeholder="Enter the imageurl" value={formState.image || ''}/><br/><br/>
     <button type='submit'>Submit</button>
     </form>
     {products.map((product) =>(<Product {...product} key={product.id} deleteProduct={deleteProduct} editProduct={editProduct}/>))}
   </>
  )
}
export default App
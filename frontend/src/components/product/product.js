import { useState, useEffect } from 'react'
import CartHandler from '../cartHandler';
import { useParams } from 'react-router-dom';
import './product.css';
import MultiCarousel from './multiCarousel';
import axios from 'axios';

export default function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/product/${id}/`)
    .then(({data}) => setProduct(data))
    .catch(err => console.log(err));
  }, [id]);

	return(
     <>
      <div className="container mt-5 mb-5" >
        <div className="row" >
        
         <div className="col-md-6" >
          <img src={`${product?.picture}`} width="100%" height="450" alt="" />
         </div>

         <div className="col-md-6" >
          
          <h3>{product?.name}</h3>
          <h3 style={{color:'#CC9966'}} className="mt-3" >$ {product?.price}</h3>

          <p>{product?.desc}</p>

          <div className="row ml-1" >
            <h5>Qty:</h5>
            <h4 className="border ml-3" ><span> - </span> 5 <span> + </span></h4>
          </div>

          <button 
           onClick={() => CartHandler(product)}
           className="addToCartBtn mt-3 mb-3" 
          >
           Add To Cart
          </button>

          <p className="border-top" >Category:  {product?.category}</p>

         </div>

        </div>
      </div>

      <MultiCarousel />
     </>
	)
}
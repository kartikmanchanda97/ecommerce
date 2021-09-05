import './card.css';
import CartHandler from '../cartHandler';
import { Link } from 'react-router-dom';

export default function Card({product}) {

	return(
     <>
      <div className="card" style={{width: '93%'}}>
        <img src={`${product.picture}`} className="card-img-top" alt="" />
        <div className="card-body">
         <p className="card-title"> 
          <Link to={`/product/${product.id}`}>{product.name}</Link> 
          <br/> <span>{product.price}</span> 
         </p>
         <p className="cardBtn" onClick={() => CartHandler(product)} >Add To Cart</p>
        </div>
      </div>
     </>
	)
}
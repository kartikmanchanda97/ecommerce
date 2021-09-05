import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Preview() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem('list'))

        setList(arr);
    }, []);

	return(
     <>
      <div className="previewContainer" >
         
        <div className="cartPreviewContainer" >
         {
            list && list.map(e => (
              <div key={e.id} className="border-top d-flex justify-content-between p-3" >
               <Link to={`/product/${e.id}`} className="nav-link">
                {e.name} <br/> {e.price}
               </Link>
               <img src={`${e.picture}`} width="75" height="75" alt="" />
              </div>
            ))
         }
         </div>
          
        
          
        <div className="border-top d-flex justify-content-between p-3" >
            <h6 style={{color: '#CC9966'}} >Total</h6>
            <h6 style={{color: '#CC9966'}}>
             { list && list.reduce((a, b) => a + b.price, 0) }
            </h6>
        </div>
      </div>
     </>
	)
}
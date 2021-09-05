import { useState, useEffect } from 'react';

export default function RightPanel() {
  const [list, setList] = useState([]);

   useEffect(() => {
    const a = JSON.parse(localStorage.getItem('list'));
    setList(a);
  }, []);


  function deleteHandler(id) {
    let arr = JSON.parse(localStorage.getItem('list'));
    let result = arr.filter(e => e.id !== id);
    localStorage.setItem('list', JSON.stringify(result));
    window.location.reload();
  }  


	return(
     <>
      <div className="col-md-4 offset-md-1 p-4" style={{background:'#F9F9F9'}} >
        <h5 className="border-bottom mt-2" >Your Order</h5>
        
        <div className="d-flex justify-content-between" >
          <p>Products</p>
          <p>Total</p>
        </div>

        {
          list && list.map(e => (
            <div key={e.id} className="border-bottom mb-3 d-flex justify-content-between" >
             <p> 
              <span 
               style={{cursor:'pointer'}} 
               onClick={() => deleteHandler(e.id)} >
               X
              </span>
              {e.name}
             </p>
             <p>{e.price}</p>
            </div>
          ))
        }

        <div className="border-bottom mb-3 d-flex justify-content-between" >
          <p>Shipping:</p>
          <p>Free Shipping</p>
        </div>

        <div className="d-flex justify-content-between" >
          <h5 style={{color: '#CC9966'}} >Total</h5>
          <h5 style={{color: '#CC9966'}} >
           $ { list && list.reduce((a, b) => a + b.price, 0) }
          </h5>
        </div>

        <h5 className="border-bottom mt-3" >Payment Options</h5>
      
        <div className="form-check mb-2" >
          <input type="radio" className="form-check-input" id="creditcard" />
          <label htmlFor="creditcard" >Credit Card</label>
        </div>

        <div className="form-check mb-2" >
          <input type="radio" className="form-check-input" id="debitcard" />
          <label htmlFor="debitcard" >Debit Card</label>
        </div>

        <div className="form-check mb-2" >
          <input type="radio" className="form-check-input" id="paypal" />
          <label htmlFor="paypal" >Paypal</label>
        </div>

        <div className="form-check mb-2" >
          <input type="radio" className="form-check-input" id="netbanking" />
          <label htmlFor="netbanking" >Internet Banking</label>
        </div>

        <div className="form-check mb-2 border-bottom" >
          <input type="radio" className="form-check-input" id="upi" />
          <label htmlFor="upi" >BHEM UPI</label>
        </div>

      </div>
     </>
	)
}
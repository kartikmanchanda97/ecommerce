import './checkout.css';
import RightPane from './right_panel';
import Header from '../header/header';

export default function Checkout() {
   
   return(
    <>
     <Header heading="Cart" />
     <div className="container col-md-9 mt-5 mb-5" >
      <div className="row" >
       <form className="col-md-7 formContainer" autoComplete="off" >
        
        <div className="row mb-3" >
         <div className="col-sm-6" >
           <label htmlFor="firstName" className="form-label">First Name*</label>
           <input type="text" className="form-control shadow-none" id="firstName" />
         </div> 

         <div className="col-sm-6" >
           <label htmlFor="lastName" className="form-label">Last Name*</label>
           <input type="text" className="form-control shadow-none" id="lastName" />
         </div> 
        </div>

        <div className="mb-3" >
          <label htmlFor="country" className="form-label">Country*</label>
          <input type="text" className="form-control shadow-none" id="country" />
        </div>

        <div className="mb-3" >
          <label htmlFor="address" className="form-label">Address*</label>
          <input type="email" className="form-control shadow-none" id="address" />

          <label htmlFor="street" className="form-label">Street*</label>
          <input type="email" className="form-control shadow-none" id="street" />
        </div>

        <div className="row mb-3" >
         <div className="col-sm-6" >
           <label htmlFor="city" className="form-label">City*</label>
           <input type="text" className="form-control shadow-none" id="city" />
         </div> 

         <div className="col-sm-6" >
           <label htmlFor="state" className="form-label">State*</label>
           <input type="text" className="form-control shadow-none" id="state" />
         </div> 
        </div>

        <div className="row mb-3" >
         <div className="col-sm-6" >
           <label htmlFor="phone" className="form-label">Phone*</label>
           <input type="number" className="form-control shadow-none" id="phone" />
         </div> 

         <div className="col-sm-6" >
           <label htmlFor="pin" className="form-label">Pincode*</label>
           <input type="text" className="form-control shadow-none" id="pin" />
         </div> 
        </div>

        <div className="mb-3" >
           <label htmlFor="email" className="form-label">Email*</label>
           <input type="email" className="form-control shadow-none" id="email" />
         </div> 

        <button 
         className="btn btn-light mt-3" style={{background:'#CC9966', color:'#fff'}} >
         Place Order
        </button>

       </form>

       <RightPane />

      </div>
     </div>
    </>
   )
}
import { useState, useEffect } from 'react';
import './nav.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import Preview from './preview';

export default function Nav({isLoggedIn}) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/category/')
        .then(({data}) => setList(data))
        .catch(err => console.log(err));
    }, []);

    function logoutHandler() {
        localStorage.removeItem('token');
        window.location.replace('/login')
    }

	return(
     <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="/">ECOM</a>
  
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

         <li className="nav-item active">
          <Link to="/" className="nav-link">Home</Link>
         </li>

         <li className="nav-item dropdown">
          <p style={{cursor:'pointer'}} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Category
          </p>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           {
            list.map(e => (
               <Link key={e.id} to={`/category/${e.category}`} 
                className="dropdown-item"
               >
                {e.category}
               </Link>
            ))
           }
           </div>
          
         </li>

         {
            isLoggedIn ? 
            (<li onClick={logoutHandler} style={{cursor:'pointer'}} className="nav-item pt-2 active">
              Logout
            </li>) :
            ( <>
              <li className="nav-item active">
               <Link to="/login" className="nav-link">Login</Link>
              </li>

              <li className="nav-item active">
               <Link to="/signup" className="nav-link">SignUp</Link>
              </li>

              </>
            )
         }

         <li style={{position:'relative'}} className="nav-item cartBtn">
          <Link to="/checkout" className="nav-link" >
           Cart
          </Link>
          <Preview />
         </li>

        </ul>
       
       </div>

      </nav>

     </>
	)
}
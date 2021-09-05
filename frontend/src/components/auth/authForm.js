import { Link } from 'react-router-dom';

export default function AuthForm({inputHandler, err, submitHandler, path}) {
	return(
     <>
      <form onSubmit={e => submitHandler(e)} className="col-md-4 offset-md-4 mt-5 bt-5 bg-light" autoComplete="off" >
       <h2 className="text-center text-capitalize pt-3" >{path.slice(1)}</h2>

       <h6 className="text-center text-danger p-2" >{err}</h6>

       {
        path !== '/login' ?
        (<div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" onChange={e => inputHandler(e)} className="form-control shadow-none" id="name" placeholder="Enter name" />
        </div>) : null
       }

       <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={e => inputHandler(e)} className="form-control shadow-none" id="email" placeholder="Enter email" />
       </div>

       <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={e => inputHandler(e)} className="form-control shadow-none" id="password" placeholder="Password" />
       </div>

       <div className="d-flex justify-content-between pb-3" >
        <button style={{background:'#CC9966', color:'#fff'}} type="submit" className="btn">Submit</button>
        {
            path === '/login' ? 
            (<Link to="/signup" style={{color:'#CC9966'}} >SignUp</Link>) :
                (<Link to="/login" style={{color:'#CC9966'}} >Login</Link>)
        }
       </div>
   
      </form>

     </>
	)
}
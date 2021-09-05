import { useState, useLocation } from 'react';
import AuthForm from './authForm';
import axios from 'axios';

export default function LoginPage() {
    const [cred, setCred] = useState({email:'', password:''})
    const [err, setErr] = useState()

	function inputHandler(e) {
      setCred({...cred, [e.target.name]: e.target.value})
	}

	function submitHandler(e) {
		e.preventDefault()
 
        axios.post('http://localhost:8000/login/', cred)
        .then(({status, data}) => {
        	if (status !== 200) {
              setErr(data);
        	} else {
        		localStorage.setItem('token', data)
        	    window.location.replace('/')
        	}
        }).catch(err => console.log(err));

		e.target.reset()
	}

	const { pathname } = useLocation();

	return(
     <>
      <AuthForm 
       inputHandler={inputHandler} 
       err={err} 
       submitHandler={submitHandler} 
       path={pathname} 
      />
     </>
	)
}
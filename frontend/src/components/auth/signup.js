import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AuthForm from './authForm';
import axios from 'axios';

export default function SignUpPage() {
    const [cred, setCred] = useState({name:'', email:'', password:''})
    const [err, setErr] = useState()

	function inputHandler(e) {
      setCred({...cred, [e.target.name]: e.target.value})
	}

	const history = useHistory();

	function submitHandler(e) {
		e.preventDefault()
 
        axios.post('http://localhost:8000/signup/', cred)
        .then(res => {
        	if (res.status === 201) {
               history.push('/login')
        	} else {
               setErr(res.data.error)
        	}
        }).catch(err => console.log(err));

		e.target.reset()
	}

	const { pathname } = useLocation();

	return(
     <>
      <AuthForm inputHandler={inputHandler} err={err} submitHandler={submitHandler} path={pathname} />
     </>
	)
}
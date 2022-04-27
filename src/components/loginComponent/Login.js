import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "./amazon-logo-black.svg"
import "./Login.css";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const signIn = e => {
		e.preventDefault();
		
		auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))

	}
	const register = e => {
		e.preventDefault();
		
		auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
	}

	return (
		<div className="login">
		<Link to="/">
		<img src={logo} alt="amazonlogo" className="login_logo"/>
		</Link>
		<div className="login_container">
		<h1>Sign In</h1>
		<form>
			<h5>E-mail</h5>
			<input type="text" 
			value={email}
			onChange={e => setEmail(e.target.value)}/>
			<h5>Password</h5>
			<input type="password"
			value={password}
			onChange={e => setPassword(e.target.value)}/>
			<button className="login_signInButton"
			type="submit" onClick={signIn}>Sign In</button>
			<p className="caveatText">
                By signing-in you agree to the Amazon Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className="login_registerButton"
            onClick={register}>
            Create your Amazon account</button>
		</form>
		</div>
		</div>
    );
}


export default Login;
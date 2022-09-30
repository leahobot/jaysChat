import React from "react";
import {GoogleOutlined, FacebookOutlined} from "@ant-design/icons";
import {auth} from "../firebase";
import firebase from "firebase/app";

const Login = () => {
	return (
		<section className='login-page'>
			<article className='login-card'>
				<h2>Welcome to Jay'sChat</h2>
				<div>
					<button
						type='button'
						className='login-button google'
						onClick={() =>
							auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
						}>
						<GoogleOutlined />
						<p>Sign-In With Google</p>
					</button>
					<button
						type='button'
						className='login-button facebook'
						onClick={() =>
							auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
						}>
						<FacebookOutlined />
						<p>Sign-In With Facebook</p>
					</button>
				</div>
			</article>
		</section>
	);
};

export default Login;

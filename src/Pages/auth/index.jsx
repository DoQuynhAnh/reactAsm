import React from 'react'
import './style.scss'
const Index = () => {
	const listStyle = {
		showSignup : "translateZ(-100px) rotateY( -90deg)",
		showLogin : "translateZ(-100px)",
		showForgotPassword : "translateZ(-100px) rotateY(-180deg)",
		showSubscribe : "translateZ(-100px) rotateX(-90deg)",
		showThankYou : "translateZ(-100px) rotateX(90deg)",
	}
	const parentRef = React.createRef();

	const handleShow = (value) => {
		parentRef.current.style.transform = listStyle[value]
	}
	const handleShowThankYou = (e) => {
		e.preventDefault()
		parentRef.current.style.transform = listStyle['showThankYou']
	}

	// useEffect(() => {
	// 	handleShow()
	// });

	return (
		<div>
			<ul className="nav justify-content-center">
				<li onClick={() => handleShow('showLogin')}>Login</li>
				<li onClick={() => handleShow('showSignup')}>Sign up</li>
				<li onClick={() => handleShow('showForgotPassword')}>Forgot password</li>
				<li onClick={() => handleShow('showSubscribe')}>Subscribe</li>
			</ul>
			<div className="wrapper">
				<div className="rec-prism" ref={parentRef} >
					<div className="face face-top">
						<div className="content">
							<h2>Subscribe</h2>
							<small>Enter your email so we can send you the latest updates!</small>
							<form >
								<div className="field-wrapper">
									<input type="text" name="email" placeholder="email" />
									<label>e-mail</label>
								</div>
								<div className="field-wrapper">
									<input type="submit" onClick={(e) => handleShowThankYou(e)} />
								</div>
							</form>
						</div>
					</div>
					<div className="face face-front">
						<div className="content">
							<h2>Sign in</h2>
							<form >
								<div className="field-wrapper">
									<input type="text" name="username" placeholder="username" />
									<label>username</label>
								</div>
								<div className="field-wrapper">
									<input type="password" name="password" placeholder="password" autoComplete="new-password" />
									<label>password</label>
								</div>
								<div className="field-wrapper">
									<input type="submit" onClick={(e) => handleShowThankYou(e)} />
								</div>
								<span className="psw" onClick={() => handleShow('showForgotPassword')}>Forgot Password?   </span>
								<span className="signup" onClick={() => handleShow('showSignup')}>Not a user?  Sign up</span>
							</form>
						</div>
					</div>
					<div className="face face-back">
						<div className="content">
							<h2>Forgot your password?</h2>
							<small>Enter your email so we can send you a reset link for your password</small>
							<form >
								<div className="field-wrapper">
									<input type="text" name="email" placeholder="email" />
									<label>e-mail</label>
								</div>
								<div className="field-wrapper">
									<input type="submit" onClick={(e) => handleShowThankYou(e)} />
								</div>
							</form>
						</div>
					</div>
					<div className="face face-right">
						<div className="content">
							<h2>Sign up</h2>
							<form >
								<div className="field-wrapper">
									<input type="text" name="email" placeholder="email" />
									<label>e-mail</label>
								</div>
								<div className="field-wrapper">
									<input type="password" name="password" placeholder="password" autoComplete="new-password" />
									<label>password</label>
								</div>
								<div className="field-wrapper">
									<input type="password" name="password2" placeholder="password" autoComplete="new-password" />
									<label>re-enter password</label>
								</div>
								<div className="field-wrapper">
									<input type="submit" onClick={(e) => handleShowThankYou(e)} />
								</div>
								<span className="singin" onClick={() => handleShow('showLogin')}>Already a user?  Sign in</span>
							</form>
						</div>
					</div>
					<div className="face face-bottom">
						<div className="content">
							<div className="thank-you-msg">
								Thank you!
        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index

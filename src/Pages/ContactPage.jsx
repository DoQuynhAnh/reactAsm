/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container } from 'reactstrap'

const ContactPage = () => {
	return (
		<div>
			<div>
				<Container>
					<div className="background">
						<div className="my-container-contact">
							<div className="screen">
								<div className="screen-header">
									<div className="screen-header-left">
										<div className="screen-header-button close"></div>
										<div className="screen-header-button maximize"></div>
										<div className="screen-header-button minimize"></div>
									</div>
									<div className="screen-header-right">
										<div className="screen-header-ellipsis"></div>
										<div className="screen-header-ellipsis"></div>
										<div className="screen-header-ellipsis"></div>
									</div>
								</div>
								<div className="screen-body">
									<div className="screen-body-item left">
										<div className="app-title">
											<span style={{ fontSize: '26px' }}>CONTACT</span>
											<span style={{ fontSize: '26px' }}>US</span>
										</div>
										<div className="app-contact" style={{ fontSize: '14px' }}>
											CONTACT INFO : +84 0999 999 999
                  </div>
									</div>
									<div className="screen-body-item">
										<div className="app-form">
											<div className="app-form-group">
												<input
													className="app-form-control"
													placeholder="NAME"
												/>
											</div>
											<div className="app-form-group">
												<input className="app-form-control" placeholder="EMAIL" />
											</div>
											<div className="app-form-group">
												<input
													className="app-form-control"
													placeholder="CONTACT NO"
												/>
											</div>
											<div className="app-form-group message">
												<input
													className="app-form-control"
													placeholder="MESSAGE"
												/>
											</div>
											<div className="app-form-group buttons">
												<button className="app-form-button">CANCEL</button>
												<button className="app-form-button">SEND</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default ContactPage

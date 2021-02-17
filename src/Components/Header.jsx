/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'reactstrap'


const Header = () => {
	return (
		<>
			<div>
				<div className="top-header">
					<Container className="container">
						<Row className="row" style={{ opacity: ".7" }}>
							<div className="text-right" style={{ padding: "5px 0", float: 'right', width: "100%" }}>
								Hỗ trợ:
                    <a href="#" style={{ color: "inherit" }}>1900 633 305</a> - <a href="#" style={{ color: "inherit" }}>096 4567
                        247</a>
							</div>
						</Row>
					</Container>
				</div>

				<header className="home-page fixed-header">
					<nav id="sidebar" className="navbar p-0">
						<div id="dismiss">
							<i className="fas fa-times"></i>
						</div>

						<div className="menu-list">
							<ul id="menu-content" className="menu-content">
								<li className="mt-0 collapsed" style={{ backgroundColor: "#4267B2" }}>
									<div className="header-btn text-white">
										<i className="fas fa-user-circle" style={{ fontSize: '30px' }}></i>
										<span className="text-white">
											<a href="#" className="text-white">Đăng
                                    nhập </a>
											<br />
											<small style={{ margin: '40px' }}>Xem nhiều thông tin hơn</small>
										</span>
									</div>
								</li>

								<li>
									<a href="#"><i className="fa fa-home icon-font18"></i>Trang chủ</a>
								</li>


								<li data-toggle="collapse" data-target="#danh-muc" className="collapsed">
									<a href="#"><i className="fa fa-bars icon-font18"></i>Danh mục sản phẩm <i className="fa fa-angle-down"></i></a>
								</li>
								<ul className="sub-menu collapse" id="danh-muc">
									<li>
										<a href="#">
											<i className="fab fa-steam-symbol"></i>
                                Game trên Steam </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-trophy"></i>
                                PUBG </a>
									</li>
									<li>
										<a href="#">
											<i className="icon icon-origin-svg"></i>
                                Game trên Origin </a>
									</li>
									<li>
										<a href="#">
											<i className="icon icon-battle-net-svg"></i>
                                Game trên Battle.net </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-wallet"></i>
                                Steam Wallet </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-mobile-alt"></i>
                                Nạp Game Mobile </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-broadcast-tower"></i>
                                Gói Data Mobile </a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-google-play"></i>
                                Google Play, iTunes </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-magic"></i>
                                Tiện ích </a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-wallet"></i>
                                Nintendo Eshop Card </a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-xbox"></i>
                                Xbox Gift Card </a>
									</li>
								</ul>

								<hr />
								<li>
									<a href="#">
										<i className="fas fa-gamepad"></i>
                            Hướng dẫn mua hàng </a>
								</li>
								<li>
									<a href="#">
										<i className="far fa-handshake"></i>
                            Liên hệ hợp tác </a>
								</li>
								<li>
									<a href="#">
										<i className="far fa-credit-card"></i>
                            Hình thức thanh toán </a>
								</li>

								<hr />
								<li style={{ margin: 0 }}>
									<i className="fa fa-phone"></i><a href="#" style={{ fontSize: "17px" }}>1900 633 305</a> -
                        <a href="#" style={{ fontSize: "17px" }}>096 4567 247</a>
								</li>
								<li style={{ margin: 0 }}>
									<a href="#" style={{ fontSize: "17px" }} ><i
										className="fab fa-facebook-messenger"></i>Nhắn tin cho Shop </a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="overlay"></div>

					<div className="header-container container d-flex justify-content-center">
						<div id="sidebarCollapse" className="btn-menu">
							<i className="fas fa-bars" style={{ fontSize: "20px", verticalAlign: "middle" }}></i>
						</div>
						<div className="logo">
							<Link to="/">
								<img style={{ marginRight: "10px", width: "60px" }} src="https://divineshop.vn/assets/resources/logo_divine_pure_white.png" alt="" />
								<img style={{ width: "100%" }} src="https://divineshop.vn/assets/resources/logo-1.png" alt="" />
							</Link>
						</div>
						<div className="search-form">
							<div className="search-control" id="search">
								<input type="text" className="search-box"
									placeholder="Nhập sản phẩm cần tìm..." />
								<div className="search-btn" id="button-search-header">
									<i className="fas fa-search"></i>
								</div>
							</div>
						</div>
						<div className="cart-mobile">
							<div className="align-items-center d-flex">
								<a href="#"><i className="fas fa-shopping-cart cart-size-mobile"></i> <span
									className="quantity_mobile">0</span></a>
							</div>
						</div>
						<div className="header-btn">
							<div className="header-btn d-flex flex-row">
								<div className="d-flex align-items-center ml-1">

									<div className="ml-5">
										<div className="border-white">
											<div className="align-items-center d-flex" id="update-cart">
												<i className="fas fa-shopping-cart cart-size text-white"></i><b className="cart-text">Giỏ
                                        hàng</b><span className="quantity">0</span>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	)
}

export default Header

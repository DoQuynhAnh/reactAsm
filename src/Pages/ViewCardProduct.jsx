/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import CardApi from '../api/CardApi';

const ViewCardProduct = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [state, setState] = useState([])
	const [count, setCount] = useState(0)

	const getAllItemCard = async () => {
		const { data: item } = await CardApi.getAll()
		setState(item)
		console.log(item.image);
	}
	const toggle = () => setDropdownOpen(prevState => !prevState);

	useEffect(() => {
		getAllItemCard()
	}, [])

	return (
		<div>
			<div className="home-page banner-home">
				<div className="menu-2" style={{ marginTop: 0 }}>
					<div className="container padd-0" style={{ marginTop: "6px" }}>
						<div className="menu-catalog">
							<div className="header-menu">
								<div className="bar-btn">
									<i className="fas fa-bars"></i><span>Danh mục nhanh</span>
								</div>
								<div className="nav-menu hover-menu">
									<ul>
										<li>
											<Link to="/">
												<i className="fas fa-home"></i>
												<span>Trang chủ</span>
											</Link>
										</li>
										<li>
											<Link to="/admin">
												<i className="fas fa-home"></i>
												<span>Trang quản trị</span>
											</Link>
										</li>
										<li>
											<Link to="/products" rel="external"><i className="fab fa-product-hunt"></i>
												<span>List sản phẩm</span></Link>
										</li>
										<li>
											<a href="#"><i className="fas fa-shopping-cart"></i>
												<span>Giỏ hàng</span></a>
										</li>
										<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
											<DropdownToggle nav caret>
												<i className="fas fa-american-sign-language-interpreting"></i> Danh mục
                    </DropdownToggle>
											<DropdownMenu>
												<DropdownItem>
													<Link to="/danh-muc/1" className="text-dark">
														<i className="fas fa-chart-line"></i>
														<span>Bán chạy</span>
													</Link>
												</DropdownItem>
												<DropdownItem>
													<Link to="/danh-muc/2" className="text-dark">
														<i className="fab fa-hotjar"></i>
														<span>Nổi bật</span>
													</Link>
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</ul>
								</div>
							</div>
							<div className="right-menu ">
								<Row className=" menu-tab-all service mx-0">
									<div className="quick-menu head-link">
										<a href="/about"><i className="fas fa-gamepad"></i><span>Giới thiệu</span></a>
									</div>
									<div className="quick-menu head-link">
										<a href="/products"><i className="far fa-handshake"></i><span>Sản phẩm</span></a>
									</div>
									<div className="quick-menu head-link">
										<a href="#"><i className="far fa-credit-card"></i><span>Tin tức</span></a>
									</div>
									<div className="quick-menu head-link">
										<a href="/contact"><i className="fas fa-life-ring"></i><span>Hỗ
                            trợ</span></a>
									</div>
								</Row>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h2 className="thanh-toan-title">Giỏ Hàng: </h2>
				<span className="count-san-pham">({state.length} sản phẩm)</span>

				<div className="container-card">
					{state.map((item, index) =>
						<Row className="card-detail mx-0" key={item.id}>
							<Col md="12" className="item d-flex">
								<Col md="3">
									<a href="#" >
										<img src={item.image} alt="" />
									</a>
								</Col>
								<Col md="5" className="">
									<a href="#" className="title">
										{item.name}
									</a> <br />
									<div className="item-status">
										Tình trạng: <span className="con-hang">Còn hàng</span>
									</div>
									<div className="text-danger font-weight-bold">Xoá</div>
								</Col>
								<Col md="2" className="text-right">
									<span className="price">{item.price} VNĐ</span><br />
								</Col>
								<Col>
									<InputGroup>
										<InputGroupAddon addonType="prepend">
											<InputGroupText
												onClick={() => setCount(count - 1)}
												style={{ cursor: "pointer" }}
											>
												-
											</InputGroupText>
										</InputGroupAddon>
										<Input value={count} className="pl-4" readOnly />
										<InputGroupAddon addonType="append">
											<InputGroupText
												onClick={() => setCount(count - -1)}
												style={{ cursor: "pointer" }}
											>
												+
											</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
								</Col>
							</Col>
						</Row>
					)}
				</div>
			</div>
		</div>
	)
}

export default ViewCardProduct

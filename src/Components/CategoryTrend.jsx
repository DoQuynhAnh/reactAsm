/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const CategoryTrend = (props) => {

	const { image, name, price, id } = props
	return (
		<>
			<Col md="6" lg="3" sm="6" className="col-xs-6 item-frames">
				<div className="item-game-wrapper">
					<a href="#">
						<div className="img">
							<img className="check_img_errs"
								src={image} alt="" />
						</div>
					</a>
					<div className="item-info">
						<Link to="#">
							<div className="item-title">
								{name}
							</div>
						</Link>
						<div className="item-price">
							<span className="cur-p">{price}đ</span>
						</div>
						<div className="item-btn-a">
							<Link to="#">
								<i className="fas fa-shopping-cart "></i>
							</Link>
						</div>
						<Link to={`/products/${id}`}
							className="item-btn"
							style={{ marginTop: "10px" }}>
							Mua ngay
						</Link>
					</div>
				</div>
			</Col>
		</>
	)
}

export default CategoryTrend

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row
} from 'reactstrap'

const Banner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div className="home-page banner-home">
      <div className="menu-2" style={{ marginTop: 0 }}>
        <div className="container padd-0" style={{ marginTop: "6px" }}>
          <div className="menu-catalog">
            <div className="header-menu">
              <div className="bar-btn">
                <i className="fas fa-bars"></i><span>Danh mục nhanh</span>
              </div>
              <div className="nav-menu">
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
              <div className="row slider-container">
                <div className="col col-md-12 col-sm-12 col-xs-12 col-lg-12 scale-slide">
                  <img src="https://divineshop.vn/image/catalog/Anh/Banner%2023%20thang%2008/Banner%20hoctap.png" alt="" style={{ width: "100%", height: "320px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

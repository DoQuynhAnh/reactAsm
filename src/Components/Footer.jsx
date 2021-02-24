/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <>
      <div style={{ clear: "both", marginBottom: "2rem" }}></div>
      <footer className="border-thin">
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="3" className="">
              <div className="paragraph">DIVINESHOP</div>
              <ul>
                <li>
                  <a href="#">Game bản quyền là gì?</a>
                </li>
                <li>
                  <a href="#">Điều khoản dịch vụ</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Donate nhân viên CSKH</a>
                </li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="2" className="">
              <div className="paragraph">TÀI KHOẢN</div>
              <ul>
                <li>
                  <a href="#">Giỏ hàng</a>
                </li>
                <li>
                  <a href="#">Đăng kí</a>
                </li>
                <li>
                  <a href="#">Đăng nhập</a>
                </li>
                <li>
                  <a href="#">Sản phẩm đã mua</a>
                </li>
                <li>
                  <a href="#">Chế độ bảo hành</a>
                </li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="3" className="">
              <div className="paragraph">LIÊN HỆ</div>
              <ul>
                <li>
                  <a href="#">Địa chỉ giao dịch trực tiếp</a>
                </li>
                <li>
                  Hotline: <a href="tel: 0832582556">0832582556</a> -{" "}(8:00 - 24:00)
              </li>
                <li>Email: anhdqph10540@fpt.edu.vn</li>
                <li>
                  <a href="#">Fanpage</a>
                </li>
              </ul>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/groups/vn.tocchien"
                data-tabs=""
                data-width="307px"
                data-height="130px"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer

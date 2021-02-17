/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Col, Container, Form, Row } from 'reactstrap'
import ProductApi from '../api/ProductApi'
import Banner from '../Components/Banner'
import { layoutAction } from '../redux/Layout.slice'

const ProductDetail = memo((props) => {
  const [state, setstate] = useState([])
  const activeBanner = useSelector((state) => state.layout)
  const dispatch = useDispatch()

  const getProduct = async (id) => {
    const { data: product } = await ProductApi.get(id)
    setstate(product)
  }

  useEffect(() => {
    let id = props.match.params.id
    getProduct(id)
    console.log(state);
    dispatch(layoutAction.changeLayout(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBanner])

  return (
    <>{activeBanner ? <Banner /> : ''}
      <Container className="product-detail mt-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{state.name}</BreadcrumbItem>
        </Breadcrumb>

        <div className="container-title">
          <div className="fontSize-title">{state.name}</div>
        </div>

        <div className="container-product-detail">
          <Row>
            <Col lg="6" >
              <img className="img-fluid w-100" src={state.image}
                alt="" />
            </Col>

            <Col lg="6" >
              <div className="sp-info">
                <div className="sp-info-top ">
                  <div className="sp-info-top-item ">
                    <div className="sp-info-top-item-icon"><img style={{ width: "20px" }}
                      src="https://divineshop.vn/assets/resources/tags.png" alt="" /></div>
                    <div className="text-wrap">
                      <div className="text">Mã sản phẩm</div>
                      <div className="text-1">cdkey 578080</div>
                    </div>

                  </div>
                  <div className="sp-info-top-item ">
                    <div className="sp-info-top-item-icon"><img style={{ width: "20px" }}
                      src="https://divineshop.vn/assets/resources/item-icon-2.png" alt="" /></div>
                    <div className="text-wrap">
                      <div className="text">Tình trạng</div>
                      <span style={{ color: "#53af2e", fontWeight: "bold" }} >Còn hàng</span>
                    </div>
                  </div>
                  <div className="sp-info-top-item ">
                    <div className="sp-info-top-item-icon"><img style={{ width: "20px" }}
                      src="https://divineshop.vn/assets/resources/item-icon-3.png" alt="" /></div>
                    <div className="text-wrap">
                      <div className="text">Link gốc</div>
                      <div className="text-1">Sản phẩm</div>
                    </div>
                  </div>
                </div>

                <div className="sp-price-text">Giá sản phẩm</div>
                <div className="sp-price-new">
                  <div className="price">{state.price} VNĐ</div>
                  <div className="price-info">&nbsp;&nbsp;
							<a style={{ color: "#928e8e" }} href="#" id="promotion-request"
                      alt="Thông báo cho tôi khi có giá tốt hơn"
                      title="Thông báo cho tôi khi có giá tốt hơn"><i className="fas fa-bell"></i><b> Chuông
									báo giảm giá</b></a>
                  </div>
                </div>

                <Form>
                  <hr />
                  <Row className=" w-100">
                    <Col md="6" className="col-xs-6 p-sm-1">
                      <a href="#" className="btn btn-green">Mua Ngay</a>
                    </Col>
                    <Col md="6" className="col-xs-6 p-sm-1">
                      <a href="#" className="btn btn-orange">
                        <i className="fa fa-shopping-cart text-left"> </i> &nbsp;Thêm vào giỏ </a>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
)


export default ProductDetail

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductApi from '../api/ProductApi'
import CategoryTrend from '../Components/CategoryTrend'
import { Container, Row, Col } from 'reactstrap'
import Banner from '../Components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { layoutAction } from '../redux/reducer/Layout.slice'

const HomePage = () => {
  const [listProduct, setListProduct] = useState([])
  const activeBanner = useSelector((state) => state.layout)
  const dispatch = useDispatch()

  const getListProduct = async () => {
    try {
      let { data: product } = await ProductApi.getAll()
      setListProduct(product)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListProduct()
    dispatch(layoutAction.changeLayout(true))
    console.log(activeBanner);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBanner])


  let productTrend = listProduct.filter(item => item.category === "1").slice(0, 8)
  let productHot = listProduct.filter(item => item.category === "2").slice(0, 8)
  return (
    <>
      {activeBanner === true ? '' : <Banner />}
      <Container className=" mt-4">
        <div className="list-title">
          <h2>Sản phẩm nổi bật</h2>
          <Link to="/danh-muc/2">
            Xem chi tiết
				</Link>
        </div>
        <div className="list-container">
          <div className="row service mt-4">
            {productTrend?.length &&
              productTrend.map((item, index) =>
                <CategoryTrend
                  {...item}
                  key={index}
                />)}
          </div>
        </div>

        <div className="list-title">
          <h2>Sản phẩm bán chạy</h2>
          <Link to="/danh-muc/1">
            Xem chi tiết
				</Link>
        </div>
        <div className="list-container">
          <Row className=" service mt-4">
            {productHot?.length &&
              productHot.map((item, index) =>
                <CategoryTrend
                  {...item}
                  key={index}
                />)}
          </Row>
        </div>
        <div >
          <div className="section-title">
            <h2>
              <a href="#">Tin tức</a>
            </h2>
          </div>
          <Row >
            <Col md="4" >
              <div className="card text-center">
                <img className="card-img-top" src="https://picsum.photos/640/480" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Mực ống chiên giòn</h5>
                  <p className="card-text">From its medieval origins to the digital era, learn everything there is to
                  know about the ubiquitous lorem ipsum passage.
							</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn custom-button">Xem thêm</a>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-md-4">
              <div className="card text-center">
                <img className="card-img-top" src="https://picsum.photos/640/480" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Mực ống chiên giòn</h5>
                  <p className="card-text">From its medieval origins to the digital era, learn everything there is to
                  know about the ubiquitous lorem ipsum passage.
							</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn custom-button">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <img className="card-img-top" src="https://picsum.photos/640/480" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Mực ống chiên giòn</h5>
                  <p className="card-text">From its medieval origins to the digital era, learn everything there is to
                  know about the ubiquitous lorem ipsum passage.
							</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn custom-button">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default HomePage

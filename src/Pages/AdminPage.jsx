/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, NavItem, Row } from 'reactstrap'
import ListProduct from '../Components/widget/ListProduct'
import { layoutAction } from '../redux/Layout.slice'
import Banner from '../Components/Banner'

const AdminPage = () => {
  const activeBanner = useSelector((state) => state.layout)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layoutAction.changeLayout(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBanner])

  return (
    <>
      {activeBanner === true ? <Banner /> : ''}
      <Container className="mt-4">
        <Row>
          <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-static pt-3">
              <ul className="nav flex-column">
                <NavItem>
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Products
                  </a>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </NavItem>
              </ul>
            </div>
          </Nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <a className="btn btn-sm btn-success text-white" href="/add-new">
                  add product
                        </a>
              </div>
            </div>
            <div className="table-responsive" id="table-render">
              <ListProduct />
            </div>
          </main>
        </Row>
      </Container>
    </>
  )
}

export default AdminPage


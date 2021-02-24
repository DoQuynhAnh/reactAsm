/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import ProductApi from '../api/ProductApi'
import Banner from '../Components/Banner'
import CategoryTrend from '../Components/CategoryTrend'

export const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [valueInput, setValueinput] = useState('')
  const [limitProduct, setLimitProduct] = useState(8)
  const [sort, setSort] = useState('')


  const getListProduct = async (limit, value) => {
    try {
      if (limit && !value) {
        const { data: product } = await ProductApi.getAll(limit)
        setProducts(product)
      }
      else {
        const { data: sort } = await ProductApi.sort(value)
        setProducts(sort)
        // setSort(sort)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async (value) => {
    const { data: result } = await ProductApi.find(value)

    setProducts(result)
  }

  useEffect(() => {
    getListProduct(limitProduct, sort)
  }, [limitProduct, sort])


  return (
    <>
      <Banner />
      <Container >
        <div className="list-container">
          <Form className="ml-auto pr-0 mt-3 w-100 d-flex justify-content-end" inline>
            <InputGroup className="mr-3">
              <Input
                placeholder="username"
                onChange={(e) => setValueinput(e.target.value)} />
              <InputGroupAddon addonType="append" >
                <InputGroupText
                  onClick={() => handleSearch(valueInput)}
                  style={{ cursor: 'pointer' }}
                >
                  Tìm theo tên
								</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup onChange={(e) => setValueinput(e.target.value)}>
              <select className="custom-select"
                id="inputGroupSelect02"
                onChange={setSort}>
                <option defaultValue>Xắp xếp</option>
                <option value="asc">Tăng</option>
                <option value="desc">Giảm</option>
              </select>
              <InputGroupAddon addonType="append" className="cursor">
                <InputGroupText>
                  Sort theo giá tiền
								</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <Row className=" service mt-4">
            {products.length &&
              products.map((item, index) =>
                <CategoryTrend {...item} key={index} />
              )
            }
          </Row>
        </div>
        <div
          className="view-more btn-aqua my-2"
          onClick={() => setLimitProduct(limitProduct + 4)}
        >
          Tải thêm danh mục
    		</div>
      </Container>
    </>
  )
}

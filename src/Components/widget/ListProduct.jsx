/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line 
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'
import ProductApi from '../../api/ProductApi'



const ListProduct = (props) => {
  const [state, setState] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [paginate, setPaginate] = useState(1)
  const [showAlert, setShowAlert] = useState(false)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const increment = () => {
    (paginate < totalPage) ? setPaginate(paginate + 1) : setPaginate(paginate)
  }
  const decrement = () => {
    (paginate > 1) ? (setPaginate(paginate - 1)) : setPaginate(1)
  }


  const handleDeleteItem = async (id) => {
    let ask = window.confirm("are you sure to delete this item!!");
    if (ask) {
      ProductApi.delete(id);
      const { data: product } = await ProductApi.paginate(paginate, 6)
      getListProduct(product)
      setShowAlert(true)
      forceUpdate()
    }
  }

  const getListProduct = async (page) => {
    const { data: product } = await ProductApi.paginate(page, 6)
    const { data: products } = await ProductApi.getAll();
    setTotalPage(Math.ceil(products.length / 6))
    setState(product)
  }

  useEffect(() => {
    getListProduct(paginate)
    // console.log(ignored);
  }, [ignored, paginate, totalPage])

  return (
    <div>
      {showAlert && <Alert color="success">
        <div className="row w-100 mx-0">
          delete item success!
          <i
            className="far fa-times-circle ml-auto"
            onClick={() => setShowAlert(false)}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
      </Alert>}
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>NAME</th>
            <th>IMG</th>
            <th>SỐ LƯỢNG</th>
            <th>TRẠNG THÁi</th>
            <th className="text-uppercase">quantity</th>
            <th>
              <Link to="/">
              </Link>
            </th>
          </tr>
        </thead>
        <tbody id="product-content">
          {state.map((product, index) =>
            <tr key={`table_Render${index}`}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td><img src={product.image} width="60px" alt="" /></td>
              <td>{product.price}</td>
              <td>{product.status ? "Instock" : "Outstock"}</td>
              <td>{product.quantity}</td>
              <td>
                <Link to={`/sua-sp/${product.id}`} className="btn btn-primary text-white mr-2">
                  Sửa
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteItem(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <div className="Paginate">
          <button className="btn" id="increment" onClick={decrement}>
            <i className="fas fa-arrow-left"></i>
          </button>
                    show {paginate} of {totalPage}
          <button className="btn" id="decrement" onClick={increment}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListProduct

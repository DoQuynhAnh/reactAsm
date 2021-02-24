import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import { Alert } from 'reactstrap'
import CategoryApi from '../../api/CategoryApi'
// eslint-disable-next-line
import ProductApi from '../../api/ProductApi'
// import ProductApi from '../../api/ProductApi'

const ListCategory = () => {
	const [state, setState] = useState([])
	const [totalPage, setTotalPage] = useState(0)
	const [paginate, setPaginate] = useState(1)
	// eslint-disable-next-line
	const [showAlert, setShowAlert] = useState(false)
	// const [count, setCount] = useState([])

	const increment = () => {
		(paginate < totalPage) ? setPaginate(paginate + 1) : setPaginate(paginate)
	}
	const decrement = () => {
		(paginate > 1) ? (setPaginate(paginate - 1)) : setPaginate(1)
	}

	const getListProduct = async (page) => {
		const { data: product } = await CategoryApi.paginate(page, 4)
		const { data: products } = await CategoryApi.getAll();
		setTotalPage(Math.ceil(products.length / 4))
		setState(product)
	}

	// const lengthCategory = async (id) => {
	// 	const { data: lenght } = await ProductApi.getCategory(id)

	// 	setCount(count.push(lenght.lenght))
	// }


	useEffect(() => {
		getListProduct(paginate)
	}, [paginate, state.length])

	return (
		<div>
			{/* {showAlert && <Alert color="success">
				This is a success alert — check it out!
				<i className="far fa-times-circle" onClick={setShowAlert(false)}></i>
			</Alert>} */}
			<table className="table table-striped table-sm">
				<thead>
					<tr>
						<th>STT</th>
						<th>Tên Danh Mục</th>
						{/* <th>SỐ LƯỢNG</th> */}

					</tr>
				</thead>
				<tbody id="product-content">
					{state.map((product, index) =>
						<tr key={`table_Render${index}`}>
							<td>{index}</td>
							<td>{product.name}</td>
							{/* {lengthCategory(index)} */}
							{/* <td>{count.index}</td> */}
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

export default ListCategory

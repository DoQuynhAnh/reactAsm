import React, { useEffect, useState } from 'react'
import { Container, Form, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import ProductApi from '../api/ProductApi'
import Banner from '../Components/Banner'
import CategoryTrend from '../Components/CategoryTrend'

const CategoryPage = (props) => {
	const [state, setState] = useState([])
	const [sort, setSort] = useState('')

	const getCategory = async (id, value, category) => {
		if (id && !value) {
			const { data: product } = await ProductApi.getCategory(id)
			setState(product)
		}
		else {
			const { data: sort } = await ProductApi.sort(value, category)
			setState(sort)
		}
	}

	console.log(sort);

	useEffect(() => {
		let id = props.match.params.id
		getCategory(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		let id = props.match.params.id
		getCategory(id, sort, id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sort])
	return (
		<div>
			<Container>
				<Banner />
				<div className="list-container">
					<Form className="col-md-4 ml-auto pr-0 mt-3">
						<InputGroup className="mb-3">
							<select className="custom-select"
								id="inputGroupSelect02"
								onChange={(e) => setSort(e.target.value)}>
								<option defaultValue>Xắp xếp</option>
								<option value="asc">Tăng</option>
								<option value="desc">Giảm</option>
							</select>
							<InputGroupAddon addonType="append" className="cursor">
								<InputGroupText>
									Tìm kiếm
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</Form>
					<Row className=" service mt-4">
						{state?.length &&
							state.map((item, index) =>
								<CategoryTrend {...item} key={`category_ID${index}`} />
							)
						}
					</Row>
				</div>

			</Container>
		</div>
	)
}

export default CategoryPage

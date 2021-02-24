import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import ProductApi from '../api/ProductApi'
import { uuid } from '../Utils'

const AddProductPage = () => {
	const [inputs, setInputs] = useState({});
	const [platformValue, plaftormInputProps] = useState();
	const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

	const onChangeField = (fieldName) => ({ target }) => setInputs(() => ({ ...inputs, [fieldName]: target.value }))

	const handleSubmit = (e) => {
		try {
			// debugger
			ProductApi.add({ ...inputs, id: uuid(), image: profileImg, status: platformValue });
			window.alert("success !!")
		} catch (error) {
			window.alert(error)
		}
	}

	const handleImg = (e) => {
		const reader = new FileReader()
		reader.onload = () => {
			if (reader.readyState === 2) {
				console.log(reader);
				setProfileImg(reader.result)
			}
		}
		reader.readAsDataURL(e.target.files[0]);
	}

	return (
		<>
			<Container>
				<Form className="mt-3 border p-2 col-sm-8 mx-auto" id="add_new" encType='multipart/form-data' onSubmit={handleSubmit}>
					<h2 className="text-center">Thêm mơi sản phẩm</h2>
					<FormGroup>
						<Label for="name">Name: </Label>
						<Input key="name"
							name="name"
							onChange={onChangeField('name')}
							value={inputs.Name} />
					</FormGroup>
					<FormGroup>
						<Label for="category">Category: </Label>
						<Input
							type="number"
							key="category"
							name="category"
							onChange={onChangeField('category')}
							value={inputs.category} />
					</FormGroup>
					<FormGroup>
						<Label for="">Price: </Label>
						<Input
							id="examplePrice"
							type="number"
							key="price"
							name="price"
							onChange={onChangeField('price')}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="">Quantity: </Label>
						<Input
							id="exampleQuantity"
							type="number"
							key="quantity"
							name="quantity"
							onChange={onChangeField('quantity')}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Add your Image: </Label>
						<div style={{ width: "50%", margin: "auto" }}>
							<img src={profileImg} alt="" id="img" className="w-100 img-fluid" />
						</div>
						<input
							type="file"
							accept="image/*"
							name="image-upload"
							id="input"
							onChange={handleImg}
						/>
						<div className="label">
							<Label className="image-upload" htmlFor="input">
								<i className="fas fa-camera-retro"></i>
              Choose your Photo
            </Label>
						</div>
					</FormGroup>
					<FormGroup>
						<Label>Tình trạng: </Label>
						<br />
						<Label className="pr-4">
							Còn hàng
						</Label>
						<Input
							value={true}
							type="radio"
							name="status"
							checked={platformValue === true}
							onChange={() => plaftormInputProps(true)}
						/>
						<Label className="pr-4">
							Hết hàng
						</Label>
						<input value={false}
							type="radio"
							name="status"
							checked={platformValue === false}
							onChange={() => plaftormInputProps(false)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleInputPassword1">Description</Label>
						<Input
							type="textarea"
							name="description"
							id="exampleText"
							key="Description"
							onChange={onChangeField('description')} />
					</FormGroup>
					<Button type="submit" className="btn-primary">Submit</Button>
				</Form>
			</Container>
		</>
	)
}

export default AddProductPage

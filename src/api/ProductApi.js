import { axiosClient } from "./axiosClient";

const ProductApi = {
  getAll(limit) {
    if(limit) {
			return axiosClient.get(`/products?_limit=${limit}`)
		}else {
			return axiosClient.get(`/products`);
		}	
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  delete(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  add(body) {
    const url = `/products`;
    return axiosClient.post(url, body);
  },
  paginate(page, limit) {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
  put(id, body) {
    const url = `/products/${id}`;
    return axiosClient.put(url, body);
	},
	getCategory(category) {
		return axiosClient.get(`products?category=${category}`)
	},
	sort(value, category) {
    if(!category){
      return axiosClient.get(`products?_sort=price&_order=${value}`)
    }
    else{
      return axiosClient.get(`products?category=${category}&_sort=price&_order=${value}`)
    }
  },
  find(value) {
    return axiosClient.get(`products?q=${value}`)
  }
};
export default ProductApi;

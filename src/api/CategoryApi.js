import { axiosClient } from "./axiosClient";

const CategoryApi = {
  getAll() {
    const url = `/categorys`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/categorys/${id}`;
    return axiosClient.get(url);
  },
  paginate(page, limit) {
    const url = `/categorys?_page=${page}&_limit=${limit}`;
    return axiosClient.get(url);
  },
};
export default CategoryApi;

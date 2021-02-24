import { axiosClient } from "./axiosClient";

const CardApi = {
  getAll() {
    return axiosClient.get("/cards");
  },
  addToCard(body) {
		return axiosClient.post('/cards', body)
	},
};

export default CardApi;

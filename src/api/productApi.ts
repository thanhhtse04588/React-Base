import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params: any) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get: (id: number) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
}

export default productApi;
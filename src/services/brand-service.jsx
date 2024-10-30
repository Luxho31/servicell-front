import clienteAxios from '../config/axios';

const createBrand = async (form) => {
    try {
        const { data } = await clienteAxios.post('/brands/createBrand', form);
        return data;
    } catch (error) {
        console.error('Error creating brand', error);
    }
};

const getBrands = async () => {
    try {
        const { data } = await clienteAxios.get('/brands/getBrands');
        return data;
    } catch (error) {
        console.error('Error getting brands', error);
    }
};

const getBrand = async (id) => {
    try {
        const { data } = await clienteAxios.get(`/brands/getBrand/${id}`);
        return data;
    } catch (error) {
        console.error('Error getting brand', error);
    }
};

const updateBrand = async (id, form) => {
    try {
        const { data } = await clienteAxios.put(`/brands/updateBrand/${id}`, form);
        return data;
    } catch (error) {
        console.error('Error updating brand', error);
    }
};

const deleteBrand = async (id) => {
    try {
        const { data } = await clienteAxios.delete(`/brands/deleteBrand/${id}`);
        return data;
    } catch (error) {
        console.error('Error deleting brand', error);
    }
};

export { createBrand, getBrands, getBrand, updateBrand, deleteBrand };
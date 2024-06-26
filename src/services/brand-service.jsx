import clienteAxios from '../config/axios';

export const registrarMarca = async (marca, modelo) => {
    try {
        const { data } = await clienteAxios.post('/Marcas/Registrar', { Marca: marca, Modelo: modelo });
        return data;
    } catch (error) {
        console.error('Error al registrar la marca', error);
        throw new Error('Error al registrar la marca');
    }
};

export const listarMarcas = async () => {
    try {
        const { data } = await clienteAxios.get('/Marcas/Listar');
        return data;
    } catch (error) {
        console.error('Error al obtener la lista de marcas', error);
        throw new Error('Error al obtener la lista de marcas');
    }
};

export const modificarMarca = async (id, marca, modelo) => {
    try {
        const { data } = await clienteAxios.put(`/Marcas/ModificarId/${id}`, { Marca: marca, Modelo: modelo });
        return data;
    } catch (error) {
        console.error('Error al modificar la marca', error);
        throw new Error('Error al modificar la marca');
    }
};


export const eliminarMarca = async (id) => {
    try {
        const { data } = await clienteAxios.delete(`/Marcas/Eliminar/${id}`);
        return data;
    } catch (error) {
        console.error('Error al eliminar la marca', error);
        throw new Error('Error al eliminar la marca');
    }
};
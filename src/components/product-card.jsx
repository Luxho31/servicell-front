import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div onClick={() => onClick(product)} className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
            <img className="w-24" src={product.image_url} alt={product.model} />
                <div className="font-bold text-xl mb-2">{product.model}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-gray-900 font-bold">S/. {product.price}</span>
                <span className="text-gray-700 text-base ml-2">Stock: {product.stock}</span>
            </div>
        </div>
    );
};

export default ProductCard;

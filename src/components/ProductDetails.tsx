// ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ProductDetailsProps { }

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
    const activeCategory = useSelector((state: RootState) => state.activeCategory);
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${productId}`);

                if (!response.ok) {
                    // Handle non-OK response (e.g., 404 Not Found)
                    console.error(`Error fetching product details: ${response.status} - ${response.statusText}`);
                    return;
                }

                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-[60vw] mx-auto mt-5 bg-white p-8 border border-gray-300 rounded-md shadow-md flex gap-12">
            <div className=' border-2 p-2 overflow-hidden'>
                <div>
                    <img className="w-full mb-4" src={product.thumbnail} alt={product.title} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {product.images.map((image, index) => (
                        <div className='w-[10vw] p-2 bg-gray-500 flex items-center justify-between box-border'>
                            <img key={index} src={image} alt={`Product ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className='text-gray-800 font-bold'>Product Details</h2>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{product.title}</h3>
                <p className="text-gray-800 mb-4">Category: {product.category}</p>
                <p className="text-gray-800 mb-2">Price: ${product.price}</p>
                <p className="text-gray-800 mb-2">Discount: {product.discountPercentage}%</p>
                <p className="text-gray-800 mb-2">Rating: {product.rating}</p>
                <p className="text-gray-800 mb-2">Stock: {product.stock}</p>
                <p className="text-gray-800 mb-2">Brand: {product.brand}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;

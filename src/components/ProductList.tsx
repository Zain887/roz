import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Declare the Product interface
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
    // Add other product properties as needed
}

interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

interface ProductListProps {
    category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ProductResponse>('https://dummyjson.com/products');
                const responseData = response.data;
                const filteredProducts = responseData.products.filter(
                    (product) => product.category === category
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <>
            <h2 className='text-center bg-yellow-500 py-2 mb-5 text-[1vw] font-bold'>Product List - {category.toLocaleUpperCase()}</h2>
            <ul className='md:flex justify-center flex-wrap mb-[2vw] gap-x-[2vw] gap-y-[2vw] cursor-pointer'>
                {products.map((product) => (
                    <li key={product.id} className='hover:scale-110 duration-300'>
                        <div className='w-[20vw] h-[20vw] bg-slate-600 flex justify-center items-center p-3 overflow-hidden'>
                            <img src={product.thumbnail} alt={product.title} className='w-auto h-auto' />
                        </div>
                        <div className='w-full flex justify-between bg-slate-800 p-2'>
                            <p className='text-white font-bold text-[0.7vw]'>
                                {product.title}
                            </p>
                            <p className='text-green-500 font-bold text-[0.7vw]'>
                                $-{product.price}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductList;

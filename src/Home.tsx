import React from 'react';

interface Props {
    // Define your component props here
}

const Home: React.FC<Props> = (props) => {
    // Dummy banner data
    const banners = [
        'https://via.placeholder.com/1200x300?text=Banner+1'
    ];

    // Dummy product data
    const products = [
        {
            id: 1,
            title: 'Product 1',
            image: 'https://via.placeholder.com/200x150?text=Product+1',
        },
        {
            id: 2,
            title: 'Product 2',
            image: 'https://via.placeholder.com/200x150?text=Product+2',
        },
        {
            id: 3,
            title: 'Product 3',
            image: 'https://via.placeholder.com/200x150?text=Product+3',
        },
    ];

    return (
        <div className="container mx-auto mt-5">
            <h2 className="text-3xl font-bold mb-5">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deserunt id facere consequuntur. Dicta maxime tenetur recusandae doloremque excepturi eum quae animi corrupti nesciunt cum fuga esse aliquid, tempore rem? </p>
                    </div>
                ))}
            </div>
            <div className="my-5">
                {banners.map((banner, index) => (
                    <img key={index} src={banner} alt={`Banner ${index + 1}`} className="w-full mb-2" />
                ))}
            </div>
        </div>
    );
};

export default Home;

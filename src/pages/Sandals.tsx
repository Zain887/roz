import React from 'react';
import items from '../assets/menuItem';


interface Props {
    // Define your component props here
}

const Sandals: React.FC<Props> = (props) => {
    const filteredItems = items.filter((item) => item.shoeCategory === 'sandal');
    const size = ['6', '7', '8', '9', '10', '11'];

    return (
        <div className='mt-10'>
            {filteredItems.map((categoryItem) => (
                <div key={categoryItem.id} className='md:flex justify-center flex-wrap mb-[2vw] gap-x-[2vw] gap-y-[2vw]'>
                    {categoryItem.items.map((item, index) => {
                        const discountPercentage = ((item.price - item.discount) / item.price) * 100;
                        return (
                            <div key={index} className='z-10 relative p-[1vw] rounded-lg text-white px-[1vw] hover:scale-110 hover:bg-[#77889926] cursor-pointer duration-300 bg-[#778899] w-[20vw] h-[20vw]'>
                                {item.img === '' ? (
                                    <img src="/images/sand.png" alt="ROZ_SHOES" className=' w-auto h-[12vw] m-auto' />
                                ) : (
                                    <img src={item.img} alt={item.title} className=' w-auto h-[12vw] m-auto' />
                                )}
                                <div className='absolute bottom-[1vw] w-full flex justify-between left-0 px-[1vw]'>
                                    <p className='text-[0.7vw]'>{item.title}
                                        <br />
                                        <span>Size:
                                            {size.map((sno) => (
                                                <mark className='px-[0.3vw] rounded-md mx-[0.1vw]'>{sno}</mark>
                                            ))}
                                        </span>
                                    </p>
                                    <p className='text-white font-bold text-[0.7vw]'>
                                        {item.discount !== '' ? (
                                            <>
                                                <span className='text-red-800 line-through'>
                                                    Rs: {item.price}
                                                </span>
                                                <br />
                                                <span className='text-green-800'>
                                                    Now {item.discount} ({discountPercentage.toFixed(2)}% off)
                                                </span>
                                            </>

                                        ) : (
                                            <span className='text-green-800'>
                                                Rs: {item.price}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    );
};

export default Sandals;
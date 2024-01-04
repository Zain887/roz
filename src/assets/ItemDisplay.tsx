import React from 'react';
import items from './menuItem'; // Adjust the path accordingly

interface Props {
  category: number;
}

const ItemDisplay: React.FC<Props> = ({ category }) => {
  const filteredItems = category === 0 ? items : items.filter((item) => item.id === category);

  return (
    <div className='mt-10'>
      {filteredItems.map((categoryItem) => (
        <div key={categoryItem.id} className='md:flex justify-center flex-wrap mb-[2vw] gap-x-[2vw] gap-y-[2vw]'>
          {categoryItem.items.map((item, index) => (
            <div key={index} className='relative p-[1vw] rounded-lg text-white px-[1vw] hover:bg-[#77889926] cursor-pointer duration-300 bg-[#778899] w-[20vw] h-[20vw]'>
              {item.img === '' ? (
                <img src="/images/sand.png" alt="ROZ_SHOES" className=' w-auto h-[12vw] m-auto' />
              ) : (
                <img src={item.img} alt={item.title} className=' w-auto h-[12vw] m-auto' />
              )}
              <div className='absolute bottom-[1vw] w-full flex justify-between left-0 px-[1vw]'>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemDisplay;

import React, { useState } from 'react';

interface Props {
  ItemIndex?: number;
  onItemClick: (index: number) => void;
}

const MenuBar: React.FC<Props> = ({ ItemIndex, onItemClick }) => {

  const menu = ['All', 'New Arrivals', 'SalesItem', 'Sandals', 'BlockHeels', 'FlatHeels', 'Shoes'];
  const [active, setActive] = useState<number>(0);
  const activeItem = (index: number) => {
    setActive(index);
    onItemClick(index);
  }
  return (
    <>
      <div className='p-5 flex items-center justify-between border-b-2 border-red-600'>
        <div className='w-[8vw] h-auto'>
          <img src="/images/menulogo1.svg" alt="RozShoes" width={'100%'} height={'auto'} />
        </div>
        <ul className='flex justify-center'>
          {
            menu.map((item, index) => (
              <li key={index} className={`text-white px-[1vw] cursor-pointer text-[1vw] duration-300 ${active === index ? 'text-red-600 font-bold' : ''}`}
                onClick={() => activeItem(index)}>
                {item}
              </li>
            ))
          }
        </ul>
        <div>
          FindUs
        </div>
      </div>
    </>
  );
};

export default MenuBar;
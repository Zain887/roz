import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  /*  */
}

const MenuBar: React.FC<Props> = () => {
  const menu = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];
  const [active, setActive] = useState<string | null>(null);

  const activeItem = (category: string) => {
    setActive(category);
  };

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className='p-5 flex items-center justify-between border-b-2 border-red-600'>
        <div className='w-[8vw] h-auto'>
          <img src="/images/menulogo.svg" alt="RozShoes" width={'100%'} height={'auto'} />
        </div>
        <ul className='flex justify-center'>
          {menu.map((category) => (
            <li key={category}
              onClick={() => activeItem(category)}>
              <Link
                className={`text-white px-[1vw] cursor-pointer text-[1vw] duration-300 ${active === category ? 'text-red-600 font-bold' : ''}`}
                to={`/${category.toLowerCase()}`}
              >
                {category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        {isAuthenticated && <p className='text-xs text-red-500'>Welcome {user?.name}</p>}
        {
          isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )
        }
      </div>
    </>
  );
};

export default MenuBar;

export interface Item {
  id: number;
  items: Array<{ img: string; title: string; price: string }>;
}

const items: Item[] = [
  {
    id: 1,
    items: [
      { img: '/images/shoeCategory/newArrivals/sand.png', title: 'newArrival', price: 'RS180' },
      { img: '/images/shoeCategory/newArrivals/sand.png', title: 'newArrival', price: 'RS300' },
    ],
  },
  {
    id: 2,
    items: [
      { img: '/images/shoeCategory/sandals/sandal.png', title: 'Sandals', price: 'RS180' },
      { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'blockHeels', price: 'RS180' },
      { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FlatHeels', price: 'RS300' },
      { img: '/images/shoeCategory/Shoes/shoe.png', title: 'Shoes', price: 'RS300' },
      { img: '/images/shoeCategory/newArrivals/sand.png', title: 'newArrival', price: 'RS300' },
    ],
  },
  {
    id: 3,
    items: [
      { img: '/images/shoeCategory/sandals/sandal.png', title: 'Sandals', price: 'RS180' },
      { img: '/images/shoeCategory/sandals/sandal.png', title: 'Sandals', price: 'RS300' },
    ],
  },
  {
    id: 4,
    items: [
      { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'blockHeels', price: 'RS180' },
      { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'blockHeels', price: 'RS300' },
    ],
  },
  {
    id: 5,
    items: [
      { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FlatHeels', price: 'RS180' },
      { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FlatHeels', price: 'RS300' },
    ],
  },
  {
    id: 6,
    items: [
      { img: '/images/shoeCategory/Shoes/shoe.png', title: 'Shoes', price: 'RS180' },
      { img: '/images/shoeCategory/Shoes/shoe.png', title: 'Shoes', price: 'RS300' },
    ],
  },
  // Add more categories as needed
];

export default items;

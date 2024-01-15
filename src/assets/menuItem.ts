// export interface Item {
//   id: number;
//   shoeCategory: string;
//   items: Array<{ img: string; title: string; price: any, discount: any, }>;
// }

// const items: Item[] = [
//   {
//     id: 1,
//     shoeCategory: 'newarrival',
//     items: [
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/newArrivals/sand.png', title: 'NA10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '', },
//     ],
//   },
//   {
//     id: 2,
//     shoeCategory: 'salesitem',
//     items: [
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3600', discount: '1500', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '1800', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '1500', },
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3000', discount: '1500', },
//       { img: '/images/shoeCategory/newArrivals/sand.png', title: 'NA10001', price: '3000', discount: '1500', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '1800', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '1500', },
//     ],
//   },
//   {
//     id: 3,
//     shoeCategory: 'sandal',
//     items: [
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/sandals/sandal.png', title: 'SN10001', price: '3000', discount: '', },
//     ],
//   },
//   {
//     id: 4,
//     shoeCategory: 'blockheels',
//     items: [
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '2200', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3600', discount: '1800', },
//       { img: '/images/shoeCategory/BlockHeels/blockheel.png', title: 'BH10001', price: '3000', discount: '', },
//     ],
//   },
//   {
//     id: 5,
//     shoeCategory: 'flatheels',
//     items: [
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/FlatHeels/flatHeels.png', title: 'FH10001', price: '3000', discount: '', },
//     ],
//   },
//   {
//     id: 6,
//     shoeCategory: 'shoes',
//     items: [
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3000', discount: '', },
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3600', discount: '', },
//       { img: '/images/shoeCategory/Shoes/shoe.png', title: 'SE10001', price: '3000', discount: '', },
//     ],
//   },
//   // Add more categories as needed
// ];

// export default items;



export interface Item {
  id: number;
  shoeCategory: string;
  items: Array<{ img: string; title: string; price: any, discount: any, }>;
}

const items: Item[] = [
  {
    id: 1,
    shoeCategory: 'newarrival',
    items: [
      { img: '', title: 'SN10001', price: '3600', discount: '', },
      { img: '', title: 'BH10001', price: '3600', discount: '', },
      { img: '', title: 'FH10001', price: '3000', discount: '', },
      { img: '', title: 'SE10001', price: '3000', discount: '', },
      { img: '', title: 'NA10001', price: '3000', discount: '', },
      { img: '', title: 'BH10001', price: '3600', discount: '', },
      { img: '', title: 'FH10001', price: '3000', discount: '', },
    ],
  },
  {
    id: 2,
    shoeCategory: 'salesitem',
    items: [
      { img: '', title: 'SN10001', price: '3600', discount: '1500', },
      { img: '', title: 'BH10001', price: '3600', discount: '1800', },
      { img: '', title: 'FH10001', price: '3000', discount: '1500', },
      { img: '', title: 'SE10001', price: '3000', discount: '1500', },
      { img: '', title: 'NA10001', price: '3000', discount: '1500', },
      { img: '', title: 'BH10001', price: '3600', discount: '1800', },
      { img: '', title: 'FH10001', price: '3000', discount: '1500', },
    ],
  },
  {
    id: 3,
    shoeCategory: 'sandal',
    items: [
      { img: '', title: 'SN10001', price: '3600', discount: '', },
      { img: '', title: 'SN10001', price: '3000', discount: '', },
      { img: '', title: 'SN10001', price: '3600', discount: '', },
      { img: '', title: 'SN10001', price: '3000', discount: '', },
    ],
  },
  {
    id: 4,
    shoeCategory: 'blockheels',
    items: [
      { img: '', title: 'BH10001', price: '3600', discount: '2200', },
      { img: '', title: 'BH10001', price: '3000', discount: '', },
      { img: '', title: 'BH10001', price: '3600', discount: '1800', },
      { img: '', title: 'BH10001', price: '3000', discount: '', },
    ],
  },
  {
    id: 5,
    shoeCategory: 'flatheels',
    items: [
      { img: '', title: 'FH10001', price: '3600', discount: '', },
      { img: '', title: 'FH10001', price: '3000', discount: '', },
      { img: '', title: 'FH10001', price: '3600', discount: '', },
      { img: '', title: 'FH10001', price: '3000', discount: '', },
    ],
  },
  {
    id: 6,
    shoeCategory: 'shoes',
    items: [
      { img: '', title: 'SE10001', price: '3600', discount: '', },
      { img: '', title: 'SE10001', price: '3000', discount: '', },
      { img: '', title: 'SE10001', price: '3600', discount: '', },
      { img: '', title: 'SE10001', price: '3000', discount: '', },
    ],
  },
  // Add more categories as needed
];

export default items;

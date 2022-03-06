export type Seller = {
  id: string;
  name: string;
  title: string;
  address: string;
  image: string;
  phone: string | number[];
};

export type ProductDetails = {
  date: Date;
  id: string;
  name: string;
  title: string;
  quantity: number;
  price: number | string;
  discount_num: number;
  description: string;
  image: string;
  seller: Seller;
};

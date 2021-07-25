export interface IProduct {
  description: string[];
  images: string[];
  price: string;
  name: string;
  id: string;
}

export interface IPurchase extends IProduct {
  amount: number;
  size: string;
}

export interface IProduct {
  name: string;
  price: number;
  info: string;
  view: {
    main: string;
    aux: string;
  };
  sizes: { size: string; cost?: number }[];
}

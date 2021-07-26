export interface InitialStateType<T> {
  visible: boolean;
  purchases: T[] & [];
  totalPrice: number;
}

export interface NewSizeType {
  size: string;
  id: string;
}

export interface NewAmountType {
  id: string;
}

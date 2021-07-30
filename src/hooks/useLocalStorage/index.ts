import { IPurchase } from "../../interfaces/product";

type IStorageItem = { totalPrice: number; purchases: IPurchase[] };
type IUseLocalStorage = [IStorageItem | null, (value: IStorageItem) => void];

export default function useLocalStorage(key: string): IUseLocalStorage {
  const initialValue = typeof window !== "undefined" ? JSON.parse(localStorage.getItem(key)!) : null;

  function updateStorage(value: IStorageItem) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [initialValue, updateStorage];
}

import { useState } from "react";
import { createContext } from "react";
import { IProduct } from "../../interfaces/product";

interface IDetailsState {
  visible: boolean;
  item: IProduct | null;
}

export type IDetailsContext = [boolean, IProduct | null, (value: IDetailsState) => void];

export const DetailsContext = createContext<IDetailsContext>({} as IDetailsContext);

export default function DetailsContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [{ visible, item }, setDetailsContext] = useState<IDetailsState>({ visible: false, item: null });

  return <DetailsContext.Provider value={[visible, item, setDetailsContext]}>{children}</DetailsContext.Provider>;
}

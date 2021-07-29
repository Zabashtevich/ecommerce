import { createContext, useState } from "react";

export type ISizeContext = [boolean, (value: boolean) => void];

export const SizeContext = createContext<ISizeContext>({} as ISizeContext);

export default function SizeContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [visible, setVisible] = useState(false);

  return <SizeContext.Provider value={[visible, setVisible]}>{children}</SizeContext.Provider>;
}

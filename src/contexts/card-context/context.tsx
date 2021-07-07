import { createContext, useState } from "react";
import { ICardContext } from "./types";

export const CardContext = createContext<ICardContext>({} as ICardContext);

export default function CardContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(true);

  return (
    <CardContext.Provider value={{ visible, setVisible }}>
      {children}
    </CardContext.Provider>
  );
}

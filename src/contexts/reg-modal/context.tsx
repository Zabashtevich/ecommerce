import { createContext, useState } from "react";
import { IRegModal } from "./types";

export const RegModalContext = createContext<IRegModal>({} as IRegModal);

export default function RegModalContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(false);

  return (
    <RegModalContext.Provider value={{ visible, setVisible }}>
      {children}
    </RegModalContext.Provider>
  );
}

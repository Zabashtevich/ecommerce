import { useState, createContext } from "react";

export type ICareContext = [boolean, (value: boolean) => void];

export const CareContext = createContext<ICareContext>({} as ICareContext);

export default function CareContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [visible, setVisible] = useState(false);

  return <CareContext.Provider value={[visible, setVisible]}>{children}</CareContext.Provider>;
}

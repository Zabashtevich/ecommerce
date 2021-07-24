import { createContext, useState } from "react";

export interface InformationContextType {
  visible: boolean;
  setVisible: ((cb: (value: boolean) => boolean) => void) & ((value: boolean) => void);
}

export const InformationContext = createContext<InformationContextType>({} as InformationContextType);

export default function InformationContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [visible, setVisible] = useState(false);

  return <InformationContext.Provider value={{ visible, setVisible }}>{children}</InformationContext.Provider>;
}

import { createContext, useState } from "react";

interface ModalContextState {
  careVisible: boolean;
}

export type IModalsContext = {
  visible: { careVisible: boolean };
  setVisible: (cb: (value: ModalContextState) => ModalContextState) => void | ((value: ModalContextState) => void);
};

export const ModalsContext = createContext<IModalsContext>({} as IModalsContext);

export default function ModalContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [visible, setVisible] = useState<ModalContextState>({
    careVisible: false,
  });

  return <ModalsContext.Provider value={{ visible, setVisible }}>{children}</ModalsContext.Provider>;
}

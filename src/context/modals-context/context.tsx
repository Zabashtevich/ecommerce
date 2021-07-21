import { createContext, useState } from "react";

interface ModalContextState {
  sizeVisible: boolean;
}

type IModalsContext = {
  visible: { sizeVisible: boolean };
  setVisible: (
    cb: (value: ModalContextState) => ModalContextState,
  ) => void | ((value: ModalContextState) => void);
};

export const ModalsContext = createContext<IModalsContext>(
  {} as IModalsContext,
);

export default function ModalContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState<ModalContextState>({
    sizeVisible: false,
  });

  return (
    <ModalsContext.Provider value={{ visible, setVisible }}>
      {children}
    </ModalsContext.Provider>
  );
}

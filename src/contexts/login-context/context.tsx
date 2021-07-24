import { useState } from "react";
import { createContext } from "react";

export interface ILoginContext {
  visible: boolean;
  setVisible: (cb: (value: boolean) => boolean) => void | ((value: boolean) => void);
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export default function LoginContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [visible, setVisible] = useState(false);

  return <LoginContext.Provider value={{ visible, setVisible }}>{children}</LoginContext.Provider>;
}

import { useState } from "react";
import { createContext } from "react";

import { ILoginContext } from "./types";

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export default function LoginContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(false);

  return (
    <LoginContext.Provider value={{ visible, setVisible }}>
      {children}
    </LoginContext.Provider>
  );
}

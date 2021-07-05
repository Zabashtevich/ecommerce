import { createContext, useState } from "react";
import { ISignupModal } from "./types";

export const SignupModalContext = createContext<ISignupModal>(
  {} as ISignupModal,
);

export default function SignupModalContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(false);

  return (
    <SignupModalContext.Provider value={{ visible, setVisible }}>
      {children}
    </SignupModalContext.Provider>
  );
}

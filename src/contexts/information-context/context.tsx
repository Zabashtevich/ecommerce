import { createContext, useState } from "react";

interface InfonrmationStateType {
  visible: boolean;
  message: string | null;
}

export type InformationContextType = [
  InfonrmationStateType,
  ((cb: (value: InfonrmationStateType) => InfonrmationStateType) => void) & ((value: InfonrmationStateType) => void),
];

export const InformationContext = createContext<InformationContextType>({} as InformationContextType);

export default function InformationContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [{ visible, message }, setState] = useState<InfonrmationStateType>({ visible: false, message: null });

  return <InformationContext.Provider value={[{ visible, message }, setState]}>{children}</InformationContext.Provider>;
}

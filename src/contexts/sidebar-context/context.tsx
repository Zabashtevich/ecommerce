import { createContext, useState } from "react";
import { ISidebarContext } from "./types";

export const SidebarContext = createContext<ISidebarContext>(
  {} as ISidebarContext,
);

export default function SidebarContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [visible, setVisible] = useState(false);

  return (
    <SidebarContext.Provider value={{ visible, setVisible }}>
      {children}
    </SidebarContext.Provider>
  );
}

import { useContext } from "react";
import { ModalsContext } from "./context";
import { IModalsContext } from "./context";

export default function useModalsContext(): IModalsContext {
  return useContext(ModalsContext);
}

import { useContext } from "react";
import { ModalsContext } from "./context";

export default function useModalsContext() {
  return useContext(ModalsContext);
}

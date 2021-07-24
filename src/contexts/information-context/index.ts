import { useContext } from "react";
import { InformationContext } from "./context";

export default function useInformationContext() {
  return useContext(InformationContext);
}

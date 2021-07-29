import { useContext } from "react";
import { CareContext } from "./context";

export default function useCareContext() {
  return useContext(CareContext);
}

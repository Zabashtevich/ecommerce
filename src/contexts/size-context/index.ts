import { useContext } from "react";
import { SizeContext } from "./context";

export default function useSizeContext() {
  return useContext(SizeContext);
}

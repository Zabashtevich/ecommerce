import { useContext } from "react";
import { DetailsContext } from "./context";

export default function useDetailsContext() {
  return useContext(DetailsContext);
}

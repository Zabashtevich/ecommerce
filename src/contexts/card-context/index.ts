import { useContext } from "react";
import { CardContext } from "./context";

export default function useCardModal() {
  return useContext(CardContext);
}

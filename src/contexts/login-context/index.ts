import { useContext } from "react";
import { LoginContext } from "./context";

export default function useLoginModal() {
  return useContext(LoginContext);
}

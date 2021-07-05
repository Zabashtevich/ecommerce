import { useContext } from "react";
import { LoginContext } from "./context";

export default function useLoginContext() {
  return useContext(LoginContext);
}

import { useContext } from "react";

import { ISignupModal } from "./types";
import { SignupModalContext } from "./context";

export default function useSignupModal(): ISignupModal {
  return useContext(SignupModalContext);
}

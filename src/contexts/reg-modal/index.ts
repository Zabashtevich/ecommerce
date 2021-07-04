import { useContext } from "react";

import { IRegModal } from "./types";
import { RegModalContext } from "./context";

export default function useRegModal(): IRegModal {
  return useContext(RegModalContext);
}

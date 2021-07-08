import { useContext } from "react";
import { SidebarContext } from "./context";

export default function useSidebarModal() {
  return useContext(SidebarContext);
}

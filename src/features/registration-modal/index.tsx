import { createPortal } from "react-dom";

import { Registration } from "@src/components";
import { useRegModal } from "../../contexts";

if (typeof document !== "undefined") {
  const current: HTMLDivElement = document.createElement("div");
  current.setAttribute("id", "registration-root");
  document.body.appendChild(current);
}

const RegistrationModal = () => {
  const { visible, setVisible } = useRegModal();

  return visible
    ? createPortal(
        <Registration setVisible={setVisible} />,
        document.getElementById("registration-root") as HTMLDivElement,
      )
    : null;
};

export default RegistrationModal;

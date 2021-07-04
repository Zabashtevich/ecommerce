import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Registration } from "@src/components";

const RegistrationModal = () => {
  useEffect(() => {
    const root: HTMLDivElement = document.createElement("div");
    root.setAttribute("id", "registration-root");
    document.body.appendChild(root);

    return () => {
      document.body.removeChild(root);
    };
  });

  return (
    true &&
    createPortal(
      <Registration />,
      document.getElementById("modal-root") as HTMLDivElement,
    )
  );
};

export default RegistrationModal;

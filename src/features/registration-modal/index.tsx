import { createPortal } from "react-dom";
import { useEffect } from "react";

import { Registration } from "@src/components";
import { useRegModal } from "../../contexts";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

if (typeof document !== "undefined") {
  const current: HTMLDivElement = document.createElement("div");
  current.setAttribute("id", "registration-root");
  document.body.appendChild(current);
}

const RegistrationModal = () => {
  const { visible, setVisible } = useRegModal();

  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [visible]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <CSSTransition
      className="fade"
      timeout={5000}
      in={visible}
      mountOnEnter
      unmountOnExit
      appear={true}
      onEntering={(node: HTMLElement) =>
        gsap.from(node, { x: 500, duration: 1 })
      }
      onExiting={(node) => gsap.to(node, 5, { y: 500 })}
    >
      <Registration setVisible={setVisible} />
    </CSSTransition>,
    document.getElementById("registration-root") as HTMLDivElement,
  );
};

export default RegistrationModal;

import { createPortal } from "react-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { CSSTransition } from "react-transition-group";

import { Registration } from "@src/components";
import { useRegModal } from "../../contexts";

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
      timeout={{ enter: 600, exit: 400 }}
      in={visible}
      mountOnEnter
      unmountOnExit
      appear={true}
      onEntering={(target: HTMLElement) => {
        gsap.from(target.children[0], {
          opacity: 0,
          duration: 0.6,
        });
        gsap.from(target.children[1], {
          ease: "back.inOut(0.6)",
          opacity: 0,
          scale: 1.5,
          duration: 0.6,
        });
      }}
      onExiting={(target: HTMLElement) => {
        gsap.to(target.children[0], { opacity: 0, duration: 0.4 });
        gsap.to(target.children[1], { opacity: 0, scale: 0.9, duration: 0.4 });
      }}
    >
      <Registration setVisible={setVisible} />
    </CSSTransition>,
    document.getElementById("registration-root") as HTMLDivElement,
  );
};

export default RegistrationModal;

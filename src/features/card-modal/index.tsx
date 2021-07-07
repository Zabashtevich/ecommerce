import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

import { Card } from "@comps";
import { useCardModal } from "../../contexts";

const CardModal: FC = () => {
  const { visible, setVisible } = useCardModal();

  return (
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
      <Card setVisible={setVisible} />
    </CSSTransition>
  );
};

export default CardModal;

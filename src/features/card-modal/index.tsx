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
      onEntering={(target: HTMLElement) => {}}
      onExiting={(target: HTMLElement) => {}}
    >
      <Card setVisible={setVisible} />
    </CSSTransition>
  );
};

export default CardModal;

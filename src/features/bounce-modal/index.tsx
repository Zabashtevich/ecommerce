import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { useModalsContext } from "../../context";
import { Inner, Overlay, Container, Button, Close } from "./styles/bounce-modal";

interface IBounceModal {
  contextKey: string;
  children: JSX.Element | JSX.Element[];
}

export default function BounceModal({ contextKey, children }: IBounceModal) {
  const { visible, setVisible } = useModalsContext();

  const modalVisible = visible[contextKey as keyof typeof visible];

  function closeModal() {
    setVisible((prev) => ({ ...prev, [contextKey]: false }));
  }

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalVisible]);

  return (
    <AnimatePresence>
      {modalVisible && (
        <Inner
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Overlay onClick={closeModal} />
          <Container
            animate={{ opacity: [0, 1], scale: [1.5, 0.8, 1], transition: { duration: 1 } }}
            exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.5 } }}
          >
            <Button onClick={closeModal}>
              <Close />
            </Button>
            {children}
          </Container>
        </Inner>
      )}
    </AnimatePresence>
  );
}

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import { Outer, Inner, Overlay, Container, Button, Close } from "./styles/bounce-modal";

interface IBounceModal {
  children: JSX.Element | JSX.Element[];
  closeModal: () => void;
  visible: boolean;
}

export default function BounceModal({ visible, closeModal, children }: IBounceModal) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Outer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Overlay onClick={closeModal} />
          <Inner>
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
        </Outer>
      )}
    </AnimatePresence>
  );
}

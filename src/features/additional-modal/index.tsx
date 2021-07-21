import { AnimatePresence } from "framer-motion";

import { useModalsContext } from "../../context";
import { Inner, Overlay, Container } from "./styles/additional-modal";

interface IAdditionalModal {
  contextKey: string;
  children: JSX.Element | JSX.Element[];
}

export default function AdditionalModal({
  contextKey,
  children,
}: IAdditionalModal) {
  const { visible, setVisible } = useModalsContext();

  const modalVisible = visible[contextKey as keyof typeof visible];

  return (
    <AnimatePresence>
      {modalVisible && (
        <Inner>
          <Overlay
            onClick={() =>
              setVisible((prev) => ({ ...prev, sizeVisible: false }))
            }
          />
          <Container>{children}</Container>
        </Inner>
      )}
    </AnimatePresence>
  );
}

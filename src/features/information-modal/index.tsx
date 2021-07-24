import { AnimatePresence } from "framer-motion";

import { Container, Message, Timeline } from "./styles";
import { useInformationContext } from "../../contexts";

export default function InformationModal() {
  const { visible, setVisible } = useInformationContext();

  return (
    <AnimatePresence>
      {visible && (
        <Container initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} exit={{ y: 200 }}>
          <Message>Товар добавлен в корзину</Message>
          <Timeline
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 4, delay: 0.8 }}
            onAnimationComplete={() => setVisible(false)}
          />
        </Container>
      )}
    </AnimatePresence>
  );
}

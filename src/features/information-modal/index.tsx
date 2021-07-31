import { AnimatePresence } from "framer-motion";

import { Container, Message, Timeline } from "./styles";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { closePopup } from "@src/redux/notice-slice";

export default function InformationModal() {
  const { visible, message, id } = useAppSelector((store) => store.notice);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {visible && (
        <Container transition={{ duration: 0.2 }} exit={{ opacity: 0 }} key={`${message}${id}`}>
          <Message>{message}</Message>
          <Timeline
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 3 }}
            onAnimationComplete={() => dispatch(closePopup())}
          />
        </Container>
      )}
    </AnimatePresence>
  );
}

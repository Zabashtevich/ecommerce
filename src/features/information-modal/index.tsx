import { AnimatePresence } from "framer-motion";

import { Container, Message, Timeline } from "./styles";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { closeNotice, animStart } from "@src/redux/notice-slice";

export default function InformationModal() {
  const { visible, message, id, running } = useAppSelector((store) => store.notice);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {visible && (
        <Container
          initial={{ y: running ? 0 : 200, opacity: running ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          key={`${message}${id}`}
          animate={{ y: 0, opacity: 1 }}
        >
          <Message>{message}</Message>
          <Timeline
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 3, delay: running ? 0 : 0.5 }}
            onAnimationStart={() => dispatch(animStart())}
            onAnimationComplete={() => dispatch(closeNotice())}
          />
        </Container>
      )}
    </AnimatePresence>
  );
}

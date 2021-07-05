import { FC } from "react";

import { Container, Subtitle, Selected } from "./styles/slogan";
import { useLoginModal } from "../../contexts";

const Slogan: FC = () => {
  const { setVisible } = useLoginModal();

  return (
    <Container onClick={() => setVisible(true)}>
      <Subtitle>
        ЕСТЬ ТОЛЬКО
        <Selected>БЕЛЫЙ</Selected>И ЧЁРНЫЙ. ОСТАЛЬНОЕ - ОТТЕНКИ.
      </Subtitle>
    </Container>
  );
};

export default Slogan;

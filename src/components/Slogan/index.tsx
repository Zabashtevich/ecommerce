import { FC } from "react";

import { Container, Subtitle, Selected } from "./styles/slogan";
import useRegModal from "../../contexts/reg-modal/index";

const Slogan: FC = () => {
  const { setVisible } = useRegModal();

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

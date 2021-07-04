import { FC } from "react";

import { Container, Subtitle, Selected } from "./styles/slogan";

const Slogan: FC = () => {
  return (
    <Container>
      <Subtitle>
        ЕСТЬ ТОЛЬКО
        <Selected>БЕЛЫЙ</Selected>И ЧЁРНЫЙ. ОСТАЛЬНОЕ - ОТТЕНКИ.
      </Subtitle>
    </Container>
  );
};

export default Slogan;

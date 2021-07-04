import { FC } from "react";

import {
  Container,
  Thumbnail,
  Wrapper,
  LeftToggler,
  RightToggler,
} from "./style/wallpaper";

const Wallpaper: FC = () => {
  return (
    <Container>
      <Thumbnail src="/first-thumbnail.webp" />
      <Wrapper>
        <LeftToggler />
        <RightToggler />
      </Wrapper>
    </Container>
  );
};

export default Wallpaper;

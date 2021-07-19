import gsap from "gsap";
import { useState } from "react";

import {
  Container,
  Title,
  Slider,
  Button,
  LeftArrow,
  Viewport,
  Inner,
  Slide,
  Thumbnail,
  Price,
  Subtitle,
  RightArrow,
} from "./styles/recommendations";

const mockedUrl =
  "https://jolybell.com/storage/tjrqbqb2p8.jpg?preview=&width=101&height=142&quality=100";
const mockedSlides = [
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
];

export default function Recommendations() {
  const [offset, setOffset] = useState(0);

  return (
    <Container>
      <Title>
        РЕКОМЕНДУЕМ К <span>ПОКУПКЕ</span>
      </Title>
      <Slider>
        <Button onClick={() => setOffset((prev) => prev + 1)}>
          <LeftArrow />
        </Button>

        <Viewport>
          <Inner
            animate={{ x: offset * 200 }}
            transition={{ ease: "anticipate", duration: 1 }}
          >
            {/* {mockedSlides.map((item, i) => (
              <Slide key={item + i}>
                <Thumbnail src={item} />
                <Price>300 RUB</Price>
                <Subtitle>Стикеры Дауны</Subtitle>
              </Slide>
            ))} */}
          </Inner>
        </Viewport>

        <Button onClick={() => setOffset((prev) => prev - 1)}>
          <RightArrow />
        </Button>
      </Slider>
    </Container>
  );
}

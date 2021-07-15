import {
  Container,
  Title,
  Slider,
  Button,
  LeftArrow,
  Viewport,
  Slide,
  Thumbnail,
  Price,
  Subtitle,
  RightArrow,
} from "./styles/recommendations";

export default function Recommendations() {
  return (
    <Container>
      <Title></Title>
      <Slider>
        <Button>
          <LeftArrow />
        </Button>

        <Viewport>
          {[...Array(10)].map((item) => (
            <Slide key={item}>
              <Thumbnail />
              <Price></Price>
              <Subtitle></Subtitle>
            </Slide>
          ))}
        </Viewport>

        <Button>
          <RightArrow />
        </Button>
      </Slider>
    </Container>
  );
}

import {
  Container,
  LeftLine,
  RightLine,
  Wrapper,
  LeftPart,
  RightPart,
} from "./styles/header";

export default function Brand() {
  return (
    <Container>
      <LeftLine />
      <Wrapper>
        <LeftPart>JOLY.</LeftPart>
        <RightPart>BELL</RightPart>
      </Wrapper>
      <RightLine />
    </Container>
  );
}

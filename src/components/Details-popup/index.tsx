import {
  Inner,
  Overlay,
  Container,
  Column,
  Thumbnail,
  Title,
  Price,
  Description,
  Wrapper,
  ModulButton,
} from "./styles";

export default function DetailsPopup() {
  return (
    <Inner>
      <Overlay />
      <Container>
        <Column>
          <Thumbnail />
        </Column>
        <Column>
          <Title></Title>
          <Price></Price>
          <Description></Description>
          <Wrapper>
            <ModulButton></ModulButton>
            <ModulButton></ModulButton>
          </Wrapper>
        </Column>
      </Container>
    </Inner>
  );
}

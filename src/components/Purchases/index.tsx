import {
  List,
  Item,
  Thumbnail,
  Description,
  Title,
  Wrapper,
  Subtitle,
  Inner,
  Size,
  Amount,
  Plus,
  Minus,
  Price,
} from "./styles/purchases";

const Purchases = () => {
  return (
    <List>
      <Item>
        <Thumbnail />
        <Description>
          <Title></Title>
          <Wrapper>
            <Subtitle></Subtitle>
            <Inner>
              <Size></Size>
              <Size></Size>
              <Size></Size>
              <Size></Size>
              <Size></Size>
            </Inner>
          </Wrapper>
          <Wrapper>
            <Subtitle></Subtitle>
            <Inner>
              <Amount></Amount>
              <Plus />
              <Minus />
            </Inner>
          </Wrapper>
          <Price></Price>
        </Description>
      </Item>
    </List>
  );
};

export default Purchases;

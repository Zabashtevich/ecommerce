import { IProduct } from "../../interfaces/product";
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

interface IDetailsPopup {
  product: IProduct;
}

export default function DetailsPopup({ product }: IDetailsPopup) {
  return (
    <Inner>
      <Overlay />
      <Container>
        <Column>
          <Thumbnail src={product.images[0]} />
        </Column>
        <Column>
          <Title>{product.name}</Title>
          <Price>{Number(product.price).toLocaleString("ru")} RUB</Price>
          <Description>
            {product.description.map((item) => (
              <p key={item.slice(0, 5)}>{item}</p>
            ))}
          </Description>
          <Wrapper>
            <ModulButton>РАЗМЕРНАЯ СЕТКА</ModulButton>
            <ModulButton>УХОД ЗА ВЕЩЬЮ</ModulButton>
          </Wrapper>
        </Column>
      </Container>
    </Inner>
  );
}

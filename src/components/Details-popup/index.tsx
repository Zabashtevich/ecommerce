import { useSizeContext, useCareContext } from "@src/contexts";
import { IProduct } from "../../interfaces/product";
import { Container, Column, Thumbnail, Title, Price, Description, Wrapper, ModulButton } from "./styles";

interface IDetailsPopup {
  product: IProduct;
}

export default function DetailsPopup({ product }: IDetailsPopup) {
  const [, setSizeVisible] = useSizeContext();
  const [, setCareVisible] = useCareContext();

  console.log(product.price);

  return (
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
          <ModulButton onClick={() => setSizeVisible(true)}>РАЗМЕРНАЯ СЕТКА</ModulButton>
          <ModulButton onClick={() => setCareVisible(true)}>УХОД ЗА ВЕЩЬЮ</ModulButton>
        </Wrapper>
      </Column>
    </Container>
  );
}

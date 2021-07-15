import { ProductSlider, Info } from "@src/components";

import { Inner, Title, Container } from "./styles/product-details";

export default function ProductDetails() {
  return (
    <Inner>
      <Title>B.O.M.J Black</Title>
      <Container>
        <ProductSlider />
        <Info />
      </Container>
    </Inner>
  );
}

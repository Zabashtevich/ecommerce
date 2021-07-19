import { ProductSlider, Info, Recommendations } from "@src/components";

import { Inner, Title, Container } from "./styles/product-details";
import { IProduct } from "../../interfaces/product";

interface IProductDetails {
  product: IProduct;
}

export default function ProductDetails({ product }: IProductDetails) {
  return (
    <Inner>
      <Title>{product.name}</Title>
      <Container>
        <ProductSlider images={product.images} />
        <Info description={product.description} price={product.price} />
      </Container>
      <Recommendations />
    </Inner>
  );
}

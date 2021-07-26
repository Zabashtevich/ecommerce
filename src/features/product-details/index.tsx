import { useState } from "react";

import { ProductSlider, Info, Recommendations } from "@src/components";
import { Inner, Title, Container } from "./styles/product-details";
import { IProduct } from "../../interfaces/product";
import { useAppDispatch } from "../../hooks/redux";
import { add } from "@src/redux/sidebar-slice";

interface IProductDetails {
  product: IProduct;
}

export default function ProductDetails({ product }: IProductDetails) {
  const [price, setPrice] = useState(product.price);
  const [size, setSize] = useState("xs");
  const [amount, setAmount] = useState(1);

  const dispatch = useAppDispatch();

  function descreaseAmount() {
    if (amount === 1) return;
    setAmount((prev) => --prev);
  }

  function increaseAmount() {
    if (amount === 20) return;
    setAmount((prev) => ++prev);
  }

  function changeSize(availableSize: string, price: number) {
    setSize(availableSize);
    setPrice((Number(product.price) + price).toString());
  }

  function addPurchaseToSidebar() {
    dispatch(
      add({
        name: product.name,
        id: product.id,
        price,
        description: product.description,
        images: product.images,
        amount,
        size,
      }),
    );
  }

  return (
    <Inner>
      <Title>{product.name}</Title>
      <Container>
        <ProductSlider images={product.images} />
        <Info
          description={product.description}
          price={price}
          decreaseAmount={descreaseAmount}
          increaseAmount={increaseAmount}
          addPurchaseToSidebar={addPurchaseToSidebar}
          changeSize={changeSize}
          amount={amount}
          size={size}
        />
      </Container>
      <Recommendations />
    </Inner>
  );
}

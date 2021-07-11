import { Outer, Inner, List, Title } from "./styles/card-list";

interface ICardList<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

export default function CardList<T>({ items, renderItem }: ICardList<T>) {
  return (
    <Outer>
      <Title>Сувениры</Title>
      <Inner>
        <List>{items.map(renderItem)}</List>
      </Inner>
    </Outer>
  );
}

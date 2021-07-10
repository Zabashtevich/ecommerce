import { Inner, List, Title } from "./styles/card-list";

interface ICardList<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

export default function CardList<T>({ items, renderItem }: ICardList<T>) {
  return (
    <Inner>
      <Title>Сувениры</Title>
      <List>{items.map(renderItem)}</List>
    </Inner>
  );
}

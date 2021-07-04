import styled from "styled-components";

export const Container = styled.footer`
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  display: flex;
`;

export const Logo = styled.img`
  width: 100px;
  opacity: 0.7;
`;

export const Row = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  display: flex;
`;

export const Subtitle = styled.span`
  color: rgba(97, 96, 96);
  line-height: 19px;
  font-size: 13px;
`;

export const Subvalue = styled.span`
  color: rgb(191, 191, 191);
  line-height: 27px;
  font-size: 18px;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const ListItem = styled.img`
  object-fit: contain;
  margin: 0 0.3rem;
  max-width: 50px;
`;

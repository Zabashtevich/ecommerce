import styled from "styled-components";

export const Title = styled.span`
  text-align: center;
  font-weight: bold;
  line-height: 36px;
  font-size: 20px;
`;

export const Description = styled.span`
  text-align: left;
  font-size: 15px;

  p {
    margin: 20px 0 0;
  }
`;

export const Table = styled.table`
  color: rgba(0, 0, 0, 0.8);
  border-collapse: collapse;
  background: #f4f6f8;
  text-align: center;
  border-radius: 5px;
  margin-top: 2rem;
  overflow: hidden;
  font-size: 18px;
  display: table;
  border: none;
  width: 100%;
`;

export const Header = styled.thead`
  background: #fcfcfd;
  font-weight: bold;
`;

export const Row = styled.tr`
  :nth-child(2n) {
    background: #fcfcfd;
  }
`;

export const Ceil = styled.td`
  line-height: 40px;
  height: 40px;
  padding: 0;
`;

export const Footer = styled.footer`
  font-style: italic;
  margin-top: 1rem;
`;

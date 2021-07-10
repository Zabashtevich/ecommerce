import styled from "styled-components";

export const Container = styled.a`
  justify-self: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 430px;

  @media (max-width: 1450px) {
    width: calc((85vw - 70px) / 3);
  }

  @media (max-width: 1280px) {
    width: calc((100% - 70px) / 2);
  }
`;

export const Product = styled.div`
  filter: drop-shadow(0 0 20px rgba(0, 60, 120, 0.06));
  background-color: white;
  border-radius: 29px;
  position: relative;
  height: 450px;
  width: 100%;
`;

export const Thumbnail = styled.img`
  transform: translate(-50%, -50%);
  object-fit: contain;
  position: absolute;
  height: 80%;
  width: 90%;
  left: 50%;
  top: 50%;
`;

export const Inner = styled.div``;

export const Price = styled.span``;

export const Button = styled.button`
  filter: drop-shadow(0 0 20px rgba(0, 60, 120, 0.06));
  background-color: white;
  border-radius: 29px;
  margin-top: 20px;
  border: none;
  height: 50px;
  width: 100%;
`;

export const Name = styled.span``;

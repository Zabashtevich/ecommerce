import styled from "styled-components";

export const Product = styled.div`
  filter: drop-shadow(0 0 20px rgba(0, 60, 120, 0.06));
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 29px;
  position: relative;
  overflow: hidden;
  display: flex;
  height: 450px;
  width: 100%;

  ::after {
    background-color: #000;
    position: absolute;
    visibility: hidden;
    height: 100%;
    z-index: 100;
    content: "";
    width: 100%;
    opacity: 0;
  }

  @media (max-width: 1600px) {
    height: calc((85vw - 70px) / 3 * 450 / 430);
  }

  @media (max-width: 1280px) {
    height: 450px;
  }

  @media (max-width: 1030px) {
    height: calc((87.5vw - 35px) / 2 * 450 / 430);
  }

  @media (max-width: 770px) {
    height: 450px;
  }

  @media (max-width: 480px) {
    height: 94.18605vw;
  }
`;

export const Details = styled.button`
  background-color: white;
  border-radius: 100px;
  letter-spacing: 1px;
  visibility: hidden;
  cursor: pointer;
  font-size: 15px;
  border: none;
  width: 220px;
  height: 50px;
  z-index: 200;
  opacity: 0;
`;

export const Button = styled.button`
  filter: drop-shadow(0 0 20px rgba(0, 60, 120, 0.06));
  background-color: white;
  border-radius: 29px;
  letter-spacing: 1px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border: 2px solid rgb(241, 243, 245);
  height: 58px;
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

export const Inner = styled.div`
  font-size: calc((85vw - 70px) / 3 * 24 / 430);
  border-radius: 0 0 1em 0;
  background-color: #000;
  position: absolute;
  color: white;
  z-index: 300;
  left: 0;
  top: 0;

  @media (max-width: 1280px) {
    font-size: 24px;
  }

  @media (max-width: 1030px) {
    font-size: calc((87.5vw - 35px) / 2 * 24 / 430);
  }

  @media (max-width: 770px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 5.02326vw;
  }
`;

export const Price = styled.span`
  padding: 0.5rem 1rem;
  font-weight: 600;
  display: block;
`;

export const Name = styled.span`
  font-size: 18px;
`;

export const Container = styled.a`
  justify-self: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 35px 17.5px;
  display: flex;
  width: 430px;

  :hover {
    ${Button} {
      background-color: #000;
      color: #fff;
    }

    ${Details} {
      visibility: visible;
      transition: 500ms;
      opacity: 1;
    }

    ${Product} {
      ::after {
        visibility: visible;
        transition: 500ms;
        opacity: 0.5;
      }
    }

    ::after {
      visibility: visible;
      transition: 500ms;
      opacity: 0.5;
    }
  }

  @media (max-width: 1600px) {
    width: calc((85vw - 70px) / 3);
  }

  @media (max-width: 1280px) {
    width: 430px;
  }

  @media (max-width: 1023px) {
    width: calc((87.5vw - 35px) / 2);
  }

  @media (max-width: 767px) {
    width: 430px;
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

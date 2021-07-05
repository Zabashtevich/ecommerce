import styled, { css } from "styled-components";

export const Container = styled.div`
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  display: flex;
  z-index: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

interface IWindow {
  type?: string;
}

export const Window = styled.div<IWindow>`
  background-color: white;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 400px;
  z-index: 1000;
  padding: 30px;
  display: flex;
  color: black;

  ${({ type }) =>
    type &&
    css`
      position: absolute;
      right: 4vw;
      top: 190px;

      @media (max-width: 1600px) {
        right: 9vw;
        top: 100px;
      }

      @media (max-width: 400px) {
        right: auto;
        top: 100px;
      }

      ::after {
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        border-bottom: 20px solid white;
        position: absolute;
        bottom: 100%;
        content: "";
        right: 25%;
      }
    `};

  @media (max-width: 400px) {
    max-width: 320px;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Title = styled.span`
  margin-bottom: 10px;
  align-items: center;
  position: relative;
  font-size: 40px;
  display: flex;
  width: 100%;

  ::after {
    margin-top: 2px;
    background: #000;
    display: block;
    content: "";
    height: 1px;
    flex: 1;
  }

  ::before {
    margin-top: 2px;
    background: #000;
    display: block;
    content: "";
    height: 1px;
    flex: 1;
  }
`;

export const Form = styled.form`
  flex-direction: column;
  display: flex;
`;

export const Row = styled.div`
  margin-bottom: 15px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  line-height: 25px;
  font-size: 15px;
  color: #818d92;
`;

export const Input = styled.input`
  font-family: "Futura", sans-serif;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 1000px;
  background: #f4f6f8;
  padding: 0 15px;
  font-size: 18px;
  outline: none;
  height: 36px;
  width: 100%;

  :focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const Submit = styled.button`
  text-transform: uppercase;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  letter-spacing: 2px;
  position: relative;
  align-self: center;
  margin-top: 30px;
  background: #000;
  font-size: 15px;
  display: flex;
  border: none;
  width: 270px;
  height: 40px;
  color: #fff;
`;

export const Footer = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  display: flex;
`;

export const Subtitle = styled.span`
  font-size: 15px;
  color: #818d92;
`;

export const SocialList = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const Social = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
  width: 40px;
`;

export const Or = styled.span`
  position: relative;
  margin-top: 25px;
  font-size: 17px;
  color: #818d92;

  ::after {
    transform: translate(10%, -50%);
    background: #818d92;
    position: absolute;
    content: "";
    height: 1px;
    width: 12px;
    left: 100%;
    top: 50%;
  }

  ::before {
    transform: translate(-10%, -50%);
    background: #818d92;
    position: absolute;
    content: "";
    height: 1px;
    width: 12px;
    right: 100%;
    top: 50%;
  }
`;

export const Redirect = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  margin-top: 25px;
  font-size: 15px;
  cursor: pointer;
  padding: none;
  border: none;

  :hover {
    text-decoration: underline;
  }
`;

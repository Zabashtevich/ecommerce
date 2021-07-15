import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  margin-left: 5.5%;
  display: flex;
  width: 43.5%;
`;

export const Price = styled.span`
  background-color: white;
  padding: 0.4rem 1.1rem;
  align-self: flex-start;
  color: rgb(17, 17, 19);
  border-radius: 100px;
  letter-spacing: 1px;
  line-height: 36px;
  font-weight: 600;
  font-size: 24px;
`;

export const DeliveryInfo = styled.span`
  color: rgb(99, 101, 115);
  align-self: flex-start;
  letter-spacing: 1px;
  line-height: 27px;
  margin-top: 25px;
  font-size: 18px;

  ::after {
    background-color: rgb(71, 72, 82);
    margin-top: 25px;
    display: block;
    width: 100%;
    content: "";
    height: 2px;
  }
`;

export const Description = styled.div`
  margin-top: 20px;

  p {
    letter-spacing: 1px;
    line-height: 27px;
    margin: 0 0 20px;
    font-size: 16px;

    :last-of-type {
      margin: 0;
    }
  }
`;

export const Wrapper = styled.div`
  align-self: flex-start;
  margin-top: 30px;
  display: flex;
`;

export const SizesInner = styled.div`
  align-items: center;
  position: relative;
  margin: 30px 0;
  display: flex;

  ::after {
    transform: translateY(-60%);
    content: "Количество:";
    letter-spacing: 1px;
    position: absolute;
    font-size: 14px;
    color: #636573;
    bottom: 100%;
  }
`;

export const Size = styled.button`
  border: 1px solid rgb(71, 72, 82);
  background-color: rgb(71, 72, 82);
  color: rgb(121, 123, 140);
  margin-right: 0.5rem;
  border-radius: 50%;
  font-weight: 600;
  font-size: 18px;
  height: 38px;
  width: 38px;
`;

export const ModalButton = styled.button`
  border: 2px solid rgb(71, 72, 82);
  background-color: transparent;
  color: rgb(99, 101, 115);
  border-radius: 100px;
  letter-spacing: 2px;
  padding: 0 30px;
  font-size: 12px;
  height: 46px;

  :last-of-type {
    margin-left: 20px;
  }
`;

export const AmountInner = styled.div`
  align-items: center;
  position: relative;
  display: flex;

  ::after {
    transform: translateY(-60%);
    content: "Количество:";
    letter-spacing: 1px;
    position: absolute;
    font-size: 14px;
    color: #636573;
    bottom: 100%;
  }
`;

export const AmountMinus = styled.button`
  background-color: transparent;
  border-radius: 50% 0 0 50%;
  border: 2px solid #fff;
  border-right: none;
  cursor: pointer;
  font-size: 25px;
  height: 50px;
  width: 50px;
  color: white;
  padding: 0;
`;

export const AmountInput = styled.input`
  box-sizing: border-box;
  border: 2px solid #fff;
  text-align: center;
  background: #fff;
  border-radius: 0;
  font-size: 15px;
  height: 50px;
  width: 50px;
  color: #000;
  padding: 0;
`;

export const AmountPlus = styled.button`
  background-color: transparent;
  border-radius: 0 50% 50% 0;
  border: 2px solid #fff;
  border-left: none;
  cursor: pointer;
  font-size: 25px;
  height: 50px;
  width: 50px;
  color: white;
  padding: 0;
`;

export const AddButton = styled.button`
  background-color: white;
  box-sizing: border-box;
  border-radius: 100px;
  letter-spacing: 2px;
  margin-left: 30px;
  font-size: 14px;
  padding: 0 2rem;
  border: none;
  height: 50px;
  color: #000;
`;

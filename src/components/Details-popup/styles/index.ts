import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Thumbnail = styled.img`
  object-fit: contain;
  max-width: 75%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

export const Price = styled.span`
  background-color: #000;
  border-radius: 100px;
  display: inline-flex;
  margin-bottom: 20px;
  line-height: 48px;
  padding: 0 24px;
  font-size: 20px;
  height: 3rem;
  color: white;

  @media (max-width: 600px) {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    line-height: 30px;
    height: 30px;
  }
`;

export const Description = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 14px;

  p {
    letter-spacing: 1.5px;
    margin: 0 0 20px;
    color: #484450;
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0 20px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

export const ModulButton = styled.button`
  background-color: transparent;
  border: 2px solid #9c9eaf;
  letter-spacing: 1.5px;
  border-radius: 100px;
  transition: 200ms;
  cursor: pointer;
  padding: 0 30px;
  font-size: 14px;
  color: #808392;
  height: 46px;

  :hover {
    filter: brightness(120%);
  }

  @media (max-width: 600px) {
    font-size: calc(12px + 6 * ((100vw - 320px) / 680));
  }
`;

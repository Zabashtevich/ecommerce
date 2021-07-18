import styled from "styled-components";

import { motion } from "framer-motion";

export const Outer = styled.div`
  box-sizing: border-box;
  justify-content: center;
  background-color: white;
  padding: 120px 0;
  min-height: 85vh;
  display: flex;
  width: 100%;

  @media (max-width: 1550px) {
    padding: 120px 4rem;
  }

  @media (max-width: 800px) {
    padding: 60px 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  width: 100%;
  color: #000;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
`;

export const Header = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 100px;
  letter-spacing: 2px;
  line-height: 22px;
  padding: 0 30px;
  font-size: 15px;
  cursor: pointer;
  display: block;
  height: 50px;
  width: 330px;

  :active {
    transform: scale(0.95);
    transition: 200ms;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Inner = styled(motion.div)`
  flex-direction: column;
  overflow: hidden;
  margin-top: 50px;
  display: flex;
`;

export const Row = styled.div`
  flex-direction: column;
  max-width: 760px;
  display: flex;
`;

export const Question = styled.span`
  letter-spacing: 1.2px;
  font-weight: 600;
  font-size: 22px;
`;

export const Answer = styled.p`
  letter-spacing: 1.2px;
  line-height: 27px;
  font-size: 14px;
  margin: 2rem 0;
`;

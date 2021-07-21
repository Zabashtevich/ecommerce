import styled from "styled-components";
import { motion } from "framer-motion";
import { BsX } from "react-icons/bs";

export const Inner = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  user-select: none;
  position: fixed;
  display: flex;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  @media (max-width: 800px) {
    padding: 0 2rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 1100;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export const Container = styled(motion.div)`
  background-color: white;
  flex-direction: column;
  letter-spacing: 1.05px;
  border-radius: 20px;
  align-items: center;
  position: relative;
  line-height: 27px;
  padding: 50px;
  display: flex;
  z-index: 1200;
  width: 500px;
  color: #000;

  @media (max-width: 900px) {
    padding: 7vw;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  right: 20px;
  top: 20px;

  :active {
    transform: scale(0.9);
    transition: 200ms;
  }
`;

export const Close = styled(BsX)``;

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  background-color: #9ea1a9;
  justify-content: center;
  border-radius: 20px;
  padding: 30px 19px;
  user-select: none;
  overflow: hidden;
  position: fixed;
  display: flex;
  width: 350px;
  bottom: 39px;
  right: 19px;
`;

export const Message = styled.span`
  letter-spacing: 1.05px;
  line-height: 1.5;
  font-size: 14px;
  color: white;
`;

export const Timeline = styled(motion.div)`
  background-color: #c6c9ce;
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: 0;
  left: 0;
`;

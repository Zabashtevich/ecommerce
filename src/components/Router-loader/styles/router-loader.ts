import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  z-index: 2000;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 3000;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export const Spinner = styled(motion.img)`
  z-index: 5000;
`;

export const Timeline = styled(motion.div)`
  background-color: white;
  position: absolute;
  z-index: 5000;
  height: 5px;
  left: 0;
  top: 0;
`;

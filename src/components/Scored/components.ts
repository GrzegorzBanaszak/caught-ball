import styled from "styled-components";
import { motion } from "framer-motion";
import IScoreElementProps from "../../interfaces/IScoreElementProps";

export const ScoreContainer = styled(motion.div)<IScoreElementProps>`
  position: absolute;
  top: ${(props) => `${props.positionY}px`};
  left: ${(props) => `${props.positionX}px`};
  color: white;
  z-index: 3;
  user-select: none;
  display: block;
  font-size: 2rem;
  -webkit-tap-highlight-color: transparent;
  text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
    0 0 2rem ${(props) => props.color}, 0 0 4rem ${(props) => props.color},
    0 0 6rem ${(props) => props.color}, 0 0 8rem ${(props) => props.color},
    0 0 10rem ${(props) => props.color};
`;

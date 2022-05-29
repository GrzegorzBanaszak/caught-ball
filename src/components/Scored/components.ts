import styled from "styled-components";
import { motion } from "framer-motion";
import IScoreElementProps from "../../interfaces/IScoreElementProps";

export const ScoreContainer = styled(motion.div)<IScoreElementProps>`
  position: absolute;
  top: ${(props) => `${props.positionY}px`};
  left: ${(props) => `${props.positionX}px`};
  color: ${(props) => props.color};
  z-index: 3;
  font-size: 2rem;
  text-shadow: 0 0 4px ${(props) => props.color},
    0 0 11px ${(props) => props.color}, 0 0 19px #fff,
    0 0 40px ${(props) => props.color}, 0 0 80px ${(props) => props.color},
    0 0 90px ${(props) => props.color}, 0 0 100px ${(props) => props.color};
`;

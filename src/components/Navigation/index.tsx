import { INavigation } from "../../interfaces/INavigation";
import { Nav, NavContainer } from "./components";

const Navigation: React.FC<INavigation> = ({
  roundTime,
  score,
}): JSX.Element => {
  return (
    <Nav>
      <NavContainer>
        <div>
          Time{" "}
          {`${Math.floor(roundTime / 60)}:${
            roundTime % 60 < 10 ? "0" + (roundTime % 60) : roundTime % 60
          }`}
        </div>
        <div>Points {score}</div>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;

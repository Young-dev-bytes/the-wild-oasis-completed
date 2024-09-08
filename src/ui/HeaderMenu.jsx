import styled from "styled-components";
import Loginout from "../features/authentication/Loginout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function HeaderMenu() {
  const StyledHeaderMenu = styled.ul`
    display: flex;
    gap: 0.4rem;
  `;
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Loginout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

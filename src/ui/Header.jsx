import styled from "styled-components";
import Loginout from "../features/authentication/Loginout";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const DesignRule = styled.div`
  color: red;
`;

const StyledLink = styled.a`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
`;

function Header() {
  return (
    <StyledHeader>
      <DesignRule>
        <StyledLink href="/designrule" target="_blank">
          web design rules
        </StyledLink>
      </DesignRule>

      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;

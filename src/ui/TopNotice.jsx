import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTopNotice = styled.div`
  background-color: var(--color-yellow-100);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
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

function TopNotice() {
  return (
    <StyledTopNotice>
      <span>👏</span>
      <span>
        Young, You do the great job, completed all functions of the app. Keep
        going. Also, this is my github repo, you check.{" "}
        <StyledLink href="https://github.com/Young-dev-bytes/" target="_blank">
          Young's repo
        </StyledLink>
      </span>
    </StyledTopNotice>
  );
}

export default TopNotice;

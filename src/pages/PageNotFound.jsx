import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const PageNotFound = () => {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
};

// The function component has been converted to an arrow function for a more concise syntax.
// This change can also help with consistency if the codebase primarily uses arrow functions for components.
// The rest of the code remains the same as it is already optimized and functional.

export default PageNotFound;

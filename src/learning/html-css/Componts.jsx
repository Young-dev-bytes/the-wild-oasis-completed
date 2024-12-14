import styled from "styled-components";

const StyledAccordion = styled.div`
  color: #343a40;
  width: 700px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledAccordionItem = styled.div`
  display: grid;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.4);
  padding: 24px;
  grid-template-columns: auto 1fr auto;
  /* grid-template-rows: 50px 1fr; */
  align-items: center;
  column-gap: 24px;
  row-gap: 36px;
`;
const StyledNumber = styled.p`
  color: #ced4da;
  font-size: 24px;
  font-weight: 500;
`;
const StyledText = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const StyledIcon = styled.svg`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  fill: ${({ color }) => color}; // 设置填充颜色
`;

const StyledSVGIcon = ({ size = "24px", color = "currentColor", ...props }) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="icon"
    size={size}
    color={color}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
      clipRule="evenodd"
    />
  </StyledIcon>
);

function Componts() {
  return (
    <StyledAccordion>
      <StyledAccordionItem>
        <StyledNumber>01</StyledNumber>
        <StyledText>Where are these chairs assembled?</StyledText>
        <StyledSVGIcon></StyledSVGIcon>
      </StyledAccordionItem>
      <StyledAccordionItem>Components</StyledAccordionItem>
      <StyledAccordionItem>Components</StyledAccordionItem>
    </StyledAccordion>
  );
}

export default Componts;

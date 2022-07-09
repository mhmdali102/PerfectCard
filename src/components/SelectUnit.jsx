import styled from "styled-components";

const SelectUnit = ({onChange}) => {
  return (
    <Wrapper>
      <StyledSelect defaultValue="px" onChange={onChange} >
        <option value="px">px</option>
        <option value="rem">rem</option>
        <option value="%">%</option>
      </StyledSelect>
    </Wrapper>
  );
};

const StyledSelect = styled.select`
  width: 6ch;
  background-color: rgba(var(--accent), 50%);
  border-radius: 0.25rem;
  padding: 0.25rem;
  color: rgb(var(--fg-main));

  &:hover,
  &:active {
    background-color: rgba(var(--accent), 75%);
  }

  &:focus {
    outline: 1px solid rgb(var(--fg-main));
    outline-offset: 0.125rem;
  }
`;

const Wrapper = styled.span`
  position: relative;

  &::after {
    content: "";
    border-width: .4rem;
    border-color: rgb(var(--fg-main)) transparent transparent transparent;
    border-style: solid;
    position: absolute;
    inset: 50% .4rem auto auto;
    transform: translateY(calc(-50% + .2rem));
    pointer-events: none;
  }
`

export default SelectUnit;
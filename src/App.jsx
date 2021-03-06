import styled from "styled-components";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Github from "./components/Github";

function App() {
  return (
    <>
      <StyledApp>
        <Aside />
        <Main />
      </StyledApp>

      <a
        href="https://github.com/mhmdali102/perfect-card"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github />
      </a>
    </>
  );
}

const StyledApp = styled.div`
  display: flex;
  align-items: stretch;
`;

export default App;

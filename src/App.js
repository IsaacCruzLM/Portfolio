import styled from "styled-components";
import helper from './styles/helper'

const Header = styled.header`
  font-size: ${helper.big_font_size_LD};
`;

function App() {
  return (
    <div>
      <Header>
        Bora começar!!!
      </Header>
    </div>
  );
}

export default App;

import Moon from "@iconscout/react-unicons/icons/uil-moon";

import { HeaderComponent, NameContainer, NavContainer, IconContainer } from './styles';

function Header() {
  return (
    <HeaderComponent>
      <NameContainer>
        Isaac Cruz
      </NameContainer>
      <NavContainer>
        <div>
          <a href="#Principal">Principal</a>
          <a href="#Sobre">Sobre</a>
          <a href="#Habilidades">Habilidades</a>
          <a href="#Projetos">Projetos</a>
          <a href="#Contato">Contato</a>
        </div>
        <IconContainer>
          <Moon size="25" />
        </IconContainer>
      </NavContainer>
    </HeaderComponent>
  );
}
  
export default Header;
  
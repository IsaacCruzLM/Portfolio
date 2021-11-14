import Moon from "@iconscout/react-unicons/icons/uil-moon";

import { Container, HeaderComponent, NameContainer, NavContainer, IconContainer } from './styles';

function Header() {
  return (
    <Container>
      <HeaderComponent>
        <NameContainer>
          Isaac Cruz
        </NameContainer>
        <NavContainer>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Principal</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Habilidades">Habilidades</a>
            <a href="#Experiencias">Experiências</a>
            <a href="#Projetos">Projetos</a>
            <a href="#Contato">Contato</a>
          </div>
          <IconContainer>
            <Moon size="25" />
          </IconContainer>
        </NavContainer>
      </HeaderComponent>
    </Container>
  );
}
  
export default Header;
  
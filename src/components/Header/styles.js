import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
`;

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px;
  background-color: ${props => props.theme.background };  
`;

export const NameContainer = styled.div`
  font-size: ${ helper.h2_font_size_LD };
  font-weight: ${ helper.font_semi_bold };
  color: ${props => props.theme.title };
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold };
    font-size: ${helper.h4_font_size_LD};
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 10px;

    &:hover {
      background-color: ${props => props.theme.primary_lighter };
      filter: brightness(0.9);
    };
  };
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${props => props.theme.primary_lighter };
    filter: brightness(0.9);
    cursor: pointer;
  };
`;
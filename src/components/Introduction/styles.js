import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 30px;
  margin: 80px 0 0;
  background-color: ${props => props.theme.background };
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-right: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${props => props.theme.primary2 };
    padding: 5px;
    margin: 15px 0;
    border-radius: 3px;

    &:hover {
      background-color: ${props => props.theme.primary_lighter };
      filter: brightness(0.9);
    };
  };
`;

export const TextContainer = styled.div`
  width: 50%;

  h1 {
    color: ${props => props.theme.title };
    font-weight: 700;
    font-size: ${ helper.h1_font_size_LD };
  };

  h2 {
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold};
    font-size: ${helper.h3_font_size_LD};
    margin-bottom: 20px;
  };

  p {
    color: ${props => props.theme.text };
    font-size: ${helper.normal_font_size_LD};
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary2 };
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.primary_lighter };

  span {
    font-size: ${helper.normal_font_size_LD};
    font-weight: ${helper.font_semi_bold};
    margin-right: 10px;
  };

  &:hover {
    background-color: ${props => props.theme.primary1 };
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 14rem;
  margin-left: 40px;
  fill: ${props => props.theme.primary2 };
`;
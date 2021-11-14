import styled from "styled-components";
import helper from "../../styles/helper";

export const Container = styled.section`
  padding: 80px 80px 40px;
  background-color: ${props => props.theme.background };
`;

export const TitleContainer = styled.div`
  text-align: center;

  h1 {
    color: ${props => props.theme.title };
    font-weight: 700;
    font-size: ${ helper.h1_font_size_LD };
  };

  h2 {
    color: ${props => props.theme.title };
    font-weight: ${ helper.font_semi_bold};
    font-size: ${helper.normal_font_size_LD};
  };
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const InfoContainer = styled.div`
  width: 40%;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-left: 30px;

  svg {
    width: 30px;
    height: 30px;
    color: ${props => props.theme.primary2 };
  }

  div {
    margin-left: 10px;
    
    h3 {
      color: ${props => props.theme.title };
      font-weight: ${ helper.font_semi_bold};
      font-size: ${helper.h3_font_size_LD};
    }

    span {
      color: ${props => props.theme.text };
      font-weight: ${ helper.font_medium };
      font-size: ${helper.normal_font_size_LD};
    }
  }
`;

export const FormContainer = styled.div`
  width: 60%;
`;

export const Form = styled.form`
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: ${helper.normal_font_size_LD};
    color: ${props => props.theme.title };
    border-color: ${props => props.theme.primary_lighter };
    outline: 0;

    &:active, &:focus {
      border-color: ${props => props.theme.primary2 };
    }
  }

  input[type="email"] {
    margin-left: 15px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: ${helper.normal_font_size_LD};
    color: ${props => props.theme.title };
    border-color: ${props => props.theme.primary_lighter };
    outline: 0;
    border-width: 3px;

    &:active, &:focus {
      border-color: ${props => props.theme.primary2 };
      border-width: 2.5px;
    }
  }

  div {
    display: flex;
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
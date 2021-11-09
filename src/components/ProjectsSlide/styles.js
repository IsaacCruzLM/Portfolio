import styled from "styled-components";
import helper from "../../styles/helper";

export const SwiperContainer = styled.section`
  padding: 50px 100px;
  background-color: ${props => props.theme.background };

  .swiper-button-next, .swiper-button-prev {
    color: ${props => props.theme.primary2 };
  }
  
  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.primary2 };
  }
`;

export const Container = styled.section`
  padding: 30px;
  margin: 50px 0 0;
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

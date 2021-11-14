import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import ReceitaAppImage from '../../assets/ReceitaApp.jpeg';
import TriviaGameImage from '../../assets/TriviaGame.jpeg';
import TrybeWalletImage from '../../assets/TrybeWallet.jpeg';

import ProjectCard from "../ProjectCard";

import { Container, TitleContainer, SwiperContainer } from './styles';

import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const projectData = [
  {
    title: "ReceitaApp",
    description: "O projeto ReceitApp, consiste em uma aplicação Front-End, que simula um aplicativo mobile para realização de receitas, realizando requisições a duas APIS, TheMealDB e The CockTailDB. Possuindo página de receitas, para bebidas e comidas, exploração de novas receitas, acompanhamento do andamento das receitas e sistema de receitas favoritas.",
    image: ReceitaAppImage,
    repository: "https://github.com/IsaacCruzLM/ReceitApp"
  },
  {
    title: "Trybe Wallet",
    description: "O projeto Trybe Wallet, tem com objetivo a criação de um carteira de gastos virtuais, para moedas estrangeiras com conversões das moedas para BRL (R$), através de requisições a API de Conversões, awesomeapi e gerenciamento do estado global da aplicação utilizando-se Redux. Além de utilizar Highcharts para a apresentação dos gráficos.",
    image: TrybeWalletImage,
    repository: "https://github.com/IsaacCruzLM/Wallet"
  },
  {
    title: "Trivia Game",
    description: "O projeto Trivia Game, consiste em um jogo de perguntas e respostas, provenientes de requisições a API do Trivia, utilizando-se React e Redux para gerenciamento do estado global, além de utilizar a API do Gravatar, para demosntração do iconê dos participantes.",
    image: TriviaGameImage,
    repository: "https://github.com/IsaacCruzLM/TriviaGame"
  }
];

function ProjectsSlider () {
  return (
    <Container id="Projetos">
      <TitleContainer>
        <h1>Projetos</h1>
        <h2>Meus Principais Projetos Realizados</h2>
      </TitleContainer>
      <SwiperContainer >
        <Swiper
          spaceBetween={50}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <ProjectCard data={projectData[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard data={projectData[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard data={projectData[2]} />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default ProjectsSlider;
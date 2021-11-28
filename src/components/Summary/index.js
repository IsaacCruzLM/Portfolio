import DownloadIcon from "@iconscout/react-unicons/icons/uil-download-alt";
import curriculoPdf from "../../assets/curriculo.pdf";

import AboutImage from "../../assets/about.jpeg";

import {
  Container,
  TitleContainer,
  ContentContainer,
  ImageContainer,
  TextContainer,
  ExperienceContainer,
  ExperienceItem,
  Button
} from "./styles";

function Summary() {
  return (
    <Container id="Sobre">
      <TitleContainer>
        <h1>Sobre Mim</h1>
        <h2>Minha Introdução</h2>
      </TitleContainer>
      <ContentContainer>
        <ImageContainer>
          <img alt="Foto Summary" src={ AboutImage } />
        </ImageContainer>
        <TextContainer>
          <p>Estagiário em desenvolvimento FullStack, na Icalearning. Estudante de desenvolvimento Web FullStack na Trybe e procurando minha primeira oportunidade como Desenvolvedor Web Jr.</p>
          <ExperienceContainer>
            <ExperienceItem>
              <h3>
                06+
              </h3>
              <p>
                Meses de Experiência
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                15+
              </h3>
              <p>
                Repositórios Criados
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                01
              </h3>
              <p>
                Experiência Profissional
              </p>
            </ExperienceItem>
          </ExperienceContainer>
          <a download="Curriculo_Isaac_Cruz" href={curriculoPdf}>
            <Button>
              <span>
                Baixe Meu Currículo
              </span>
              <DownloadIcon size="25" />
            </Button>
          </a>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}
  
export default Summary;
  
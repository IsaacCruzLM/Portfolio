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
          <p>Desenvolvedor mobile em React Native, na Kartado. Visando iniciar minha graduação na área de TI e procurando me especializar na área de desenvolvimento Mobile, principalmente no desenvolvimento híbrido com React Native e Flutter.</p>
          <ExperienceContainer>
            <ExperienceItem>
              <h3>
                01+
              </h3>
              <p>
                Anos de Experiência
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                20+
              </h3>
              <p>
                Repositórios Criados
              </p>
            </ExperienceItem>
            <ExperienceItem>
              <h3>
                02
              </h3>
              <p>
                Experiências Profissionais
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
  
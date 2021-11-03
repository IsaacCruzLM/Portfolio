
import DownloadIcon from "@iconscout/react-unicons/icons/uil-download-alt";

import {
    Container,
    TitleContainer,
    ContentContainer,
    ImageContainer,
    TextContainer,
    ExperienceContainer,
    ExperienceItem,
    Button
} from './styles';

function Summary() {
  return (
    <Container>
        <TitleContainer>
            <h1>Sobre Mim</h1>
            <h2>Minha Introdução</h2>
        </TitleContainer>
        <ContentContainer>
            <ImageContainer>
                <img alt="Foto Summary" src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/f1ddc91d1a266b282911e4ca6ab6f30e26e96256d9e3ee9b776f59466feb7ceb1584526946899.jpg" />
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
                            Repositório Criados
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
                <Button>
                    <span>
                        Baixe Meu Currículo
                    </span>
                    <DownloadIcon size="25" />
                </Button>
            </TextContainer>
        </ContentContainer>
    </Container>
  );
}
  
export default Summary;
  
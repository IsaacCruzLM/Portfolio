import LinkedinIcon from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import GitHubIcon from "@iconscout/react-unicons/icons/uil-github-alt";
import EmailIcon from "@iconscout/react-unicons/icons/uil-fast-mail-alt";
import SendIcon from "@iconscout/react-unicons/icons/uil-envelope-send";
import { ReactComponent as Blob } from '../../assets/blob.svg';

import { Container, IconsContainer, TextContainer, Button, ImageContainer } from './styles';

function Introduction() {
  return (
    <Container>
        <IconsContainer>
            <a href="https://www.linkedin.com/in/isaaccruzz/" target="_blank" rel="noreferrer">
                <LinkedinIcon size="25"/>
            </a>
            <a href="https://github.com/IsaacCruzLM" target="_blank" rel="noreferrer">
                <GitHubIcon size="25" />
            </a>
            <a href="mail To: isaac.clm1@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon size="25" />
            </a>
        </IconsContainer>
        <TextContainer>
            <h1>Prazer, sou Isaac</h1>
            <h2>Desenvolvedor FullStack</h2>
            <p>Estudante de desenvolvimento web fullstack na Trybe, em busca da minha primeira oportunidade de trabalho na área. Caso queira saber mais, é só rolar para baixo!</p>
            <a href="#Contato">
                <Button>
                    <span>
                        Entre Em Contato Comigo!
                    </span>
                    <SendIcon size="25" />
                </Button>
            </a>
        </TextContainer>
        <ImageContainer>
            <Blob />
        </ImageContainer>
    </Container>
  );
}
  
export default Introduction;
  
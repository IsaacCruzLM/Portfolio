import ArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";

import { Container, ImageContainer, ContentContainer, ButtonContainer } from './styles';

function ProjectCard ({ data }) {
  const { title, description, image, repository } = data;
  return (
    <Container>
      <ImageContainer>
        <img src={ image } alt={`Project ${ title }`} />
      </ImageContainer>
      <ContentContainer>
        <h3>{ title }</h3>
        <p>{ description }</p>
        <ButtonContainer>
          <a href={ repository } target="_blank" rel="noreferrer" >
            <button>
              <span>Repositório</span>
              <ArrowRight/>
            </button>
          </a>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default ProjectCard;
import { useEffect, useState } from 'react';
import $ from "jquery";

import EducationIcon from "@iconscout/react-unicons/icons/uil-graduation-cap";
import WorkIcon from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import CalendarIcon from "@iconscout/react-unicons/icons/uil-calendar-alt";

import { 
  Container,
  TitleContainer,
  Rounder,
  Line,
  EndLine,
  SelectedLine,
  QualificationData,
  QualificationItem,
  DateItem,
  ButtonsContainer,
  Button
} from './styles';

function Journey() {
  const [workDataIsActive, setWorkDataIsActive] = useState(false);
  const [educationDataIsActive, setEducationDataIsActive] = useState(true);

  useEffect(() => {
    $('.educationButton').click(function(){
      $('.workData').hide(500);
      $('.educationData').show(1000);
      setWorkDataIsActive(false);
      setEducationDataIsActive(true);
    });

    $('.workButton').click(function(){
      $('.educationData').hide(500);
      $('.workData').show(1000);
      setWorkDataIsActive(true);
      setEducationDataIsActive(false);
    })
  }, []);

  return (
    <Container>
      <TitleContainer>
        <h1>Experiências</h1>
        <h2>Minha Jornada Pessoal</h2>
      </TitleContainer>
      <div>
        <ButtonsContainer>
          {/* Botões */}
          <Button active={educationDataIsActive} className="educationButton">
            <div>
              <EducationIcon size="25" />
              <span>Educação</span>
            </div>
            { educationDataIsActive && <SelectedLine/> }
          </Button>
          <Button active={workDataIsActive} className="workButton">
            <div>
              <WorkIcon size="25" />
              <span>Trabalho</span>
            </div>
            { workDataIsActive && <SelectedLine/> }
          </Button>
        </ButtonsContainer>
        <div>
          {/* Experiência1 */}
          <QualificationData className="educationData">
            <QualificationItem>
              <h3>Engenharia Ambiental</h3>
              <h4>Universidade Federal de Itajubá</h4>
              <DateItem>
                <CalendarIcon size="20" />
                <span>2017 - 2021</span>
              </DateItem>
            </QualificationItem>

            <div>
              <Rounder></Rounder>
              <Line></Line>
            </div>

            <div></div>

            <div></div>

            <div>
              <Rounder></Rounder>
              <EndLine></EndLine>
            </div>

            <QualificationItem>
              <h3>Desenvolvimento Web</h3>
              <h4>Trybe</h4>
              <DateItem>
                <CalendarIcon size="20" />
                <span>2021 - 2022</span>
              </DateItem>
            </QualificationItem>
          </QualificationData>
          <QualificationData className="workData" style={{display: 'none'}}>
            <QualificationItem>
              <h3>Estágio Em Desenvolvimento</h3>
              <h4>Icalearning</h4>
              <DateItem>
                <CalendarIcon size="20" />
                <span>2021 - atualmente</span>
              </DateItem>
            </QualificationItem>

            <div>
              <Rounder></Rounder>
              <EndLine></EndLine>
            </div>

            <div></div>

          </QualificationData>
        </div>
      </div>
    </Container>
  );
}
  
export default Journey;
  
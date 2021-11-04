import { useEffect } from 'react';
import $ from "jquery";

import BackendIcon from "@iconscout/react-unicons/icons/uil-server-network";
import FrontendIcon from "@iconscout/react-unicons/icons/uil-brackets-curly";
import ToolsIcon from "@iconscout/react-unicons/icons/uil-swatchbook";
import ArrowDown from "@iconscout/react-unicons/icons/uil-angle-down";
// import ArrowUp from "@iconscout/react-unicons/icons/uil-angle-up";

import {
  TitleContainer,
  SkillsSection,
  SkillSection,
  SkillTitle,
  SkillsContainer,
  SkillContainer
} from './styles';

function Skills() {

  useEffect(() => {
    $('.skillButton').click(function(){
      $(this).siblings('.skillContent').slideToggle();
    })
  }, []);

  return (
    <section>
      <TitleContainer>
        <h1>Habilidades</h1>
        <h2>Minhas Habilidades Tecnicas</h2>
      </TitleContainer>
      <SkillsSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <FrontendIcon size="25" />
              <h3>Desenvolvimento Frontend</h3>
            </div>
            <ArrowDown size="25" />
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML" />
              <h3>HTML</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS" />
              <h3>CSS</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <h3>JavaScript</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <h3>TypeScript</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="ReactJS" />
              <h3>ReactJS</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/5c92eeb467fd5d2b1ef1c560e3c3c2f758a8d4e03a8136bda7b41a2d3d4a1b59/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667" alt="React Native" />
              <h3>React Native</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" />
              <h3>Angular</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
              <h3>Redux</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" />
              <h3>Bootstrap</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/ce0a32825268b09cd5e0fc7c2a09c587a708491427cb794cade8f1866f7284c6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a6573746a73696f2f6a6573746a73696f2d69636f6e2e737667" alt="Jest" />
              <h3>Jest</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <BackendIcon size="25" />
              <h3>Desenvolvimento Backend</h3>
            </div>
            <ArrowDown size="25" />
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node"/>
              <h3>Node</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP"/>
              <h3>PHP</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL"/>
              <h3>MySQL</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" />
              <h3>MongoDB</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
        <SkillSection>
          <SkillTitle className="skillButton">
            <div>
              <ToolsIcon size="25" />
              <h3>Outras Ferramentas</h3>
            </div>
            <ArrowDown size="25" />
          </SkillTitle>
          <SkillsContainer className="skillContent" style={{display: 'none'}}>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="Git"/>
              <h3>Git</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667" alt="Figma"/>
              <h3>Figma</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux"/>
              <h3>Linux</h3>
            </SkillContainer>
            <SkillContainer>
              <img src="https://camo.githubusercontent.com/df12cb598044a3f38efc1f45e3580558c324cf8789b79487125044eeebcc4dee/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6865726f6b752f6865726f6b752d69636f6e2e737667" alt="Heroku" />
              <h3>Heroku</h3>
            </SkillContainer>
          </SkillsContainer>
        </SkillSection>
      </SkillsSection>
    </section>
  );
}
  
export default Skills;
  

import SkillIcon from "@iconscout/react-unicons/icons/uil-server-network";
import ArrowDown from "@iconscout/react-unicons/icons/uil-angle-down";
import ArrowUp from "@iconscout/react-unicons/icons/uil-angle-up";
import HTMLIcon from "@iconscout/react-unicons/icons/uil-html5";

import {
  TitleContainer
} from './styles';

function Skills() {
  return (
    <section>
      <TitleContainer>
        <h1>Sobre Mim</h1>
        <h2>Minha Introdução</h2>
      </TitleContainer>
      <div>
        <div>
          <div>
            <SkillIcon size="25" />
            <div>
              <h1>Desenvolvimento Frontend</h1>
            </div>
            <ArrowDown size="25" />
          </div>
          <div>
            <div>
              <HTMLIcon size="25" />
              <h3>HTML</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Skills;
  
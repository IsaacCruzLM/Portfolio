
import FacebookIcon from "@iconscout/react-unicons/icons/uil-facebook";
import InstagramIcon from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedinIcon from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import CopyrightIcon from "@iconscout/react-unicons/icons/uil-copyright";

import {
    Container,
    CopyrightContainer,
    IconsContainer
} from './styles';

function Footer() {
  return (
    <Container>
        <div>
            <h3>Isaac Cruz</h3>
            <h4>FullStack Developer</h4>
        </div>
        <CopyrightContainer>
            <CopyrightIcon />
            <span>- Copyright, 2021 - Isaac Cruz</span>
        </CopyrightContainer>
        <IconsContainer>
            <a href="https://www.facebook.com/isaac.cruz.9237/" target="_blank" rel="noreferrer">
                <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/isaacclmm/" target="_blank" rel="noreferrer">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/isaaccruzz/" target="_blank" rel="noreferrer">
                <LinkedinIcon />
            </a>
        </IconsContainer>
    </Container>
  );
}
  
export default Footer;
  
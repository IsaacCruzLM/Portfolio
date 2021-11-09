import CallIcon from "@iconscout/react-unicons/icons/uil-calling";
import LocationIcon from "@iconscout/react-unicons/icons/uil-location-point";
import MailBoxIcon from "@iconscout/react-unicons/icons/uil-fast-mail";
import ArrowIcon from "@iconscout/react-unicons/icons/uil-arrow-right";

import {
    Container,
    TitleContainer,
    ContentContainer,
    InfoContainer,
    FormContainer,
    InfoItem,
    Form,
    Button,
} from './styles';

function ContactMe() {
  return (
    <Container>
        <TitleContainer>
            <h1>Contato</h1>
            <h2>Entre em contato comigo!</h2>
        </TitleContainer>
        <ContentContainer>
            <InfoContainer>
                <InfoItem>
                    <CallIcon/>
                    <div>
                        <h3>Telefone</h3>
                        <span>(35) 99913-1909</span>
                    </div>
                </InfoItem>
                <InfoItem>
                    <MailBoxIcon/>
                    <div>
                        <h3>Email</h3>
                        <span>isaac.clm1@gmail.com</span>
                    </div>
                </InfoItem>
                <InfoItem>
                    <LocationIcon/>
                    <div>
                        <h3>Localização</h3>
                        <span>Cachoeira Paulista - SP</span>
                    </div>
                </InfoItem>
            </InfoContainer>
            <FormContainer>
                <Form>
                    <div>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <input type="text" placeholder="Assunto" />
                    <textarea rows="8" placeholder="Mensagem" />
                    <Button type="submit">
                        <span>Mandar Mensagem</span>
                        <ArrowIcon size="25" />
                    </Button>
                </Form>
            </FormContainer>
        </ContentContainer>
    </Container>
  );
}
  
export default ContactMe;
  
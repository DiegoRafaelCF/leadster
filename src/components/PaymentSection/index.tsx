'use client';

import {
  Button,
  ButtonContainer,
  ImageContainer,
  InfoImage,
  InfoText,
  InfosContainer,
  MainImage,
  PaymentContainer,
  PaymentContent,
  PaymentShape,
  SubTitle,
  TextContainer,
  Title,
} from './style';

export function PaymentSection(): JSX.Element {
  return (
    <PaymentContainer>
      <PaymentShape />
      <PaymentContent>
        <ImageContainer>
          <MainImage
            src="/images/comparativo_img_CTA.png"
            alt="comparative-chart"
          />
        </ImageContainer>
        <InfosContainer>
          <Title>
            Pronto para triplicar sua <strong>Geração de Leads?</strong>
          </Title>
          <SubTitle>
            Criação e aplicação em <strong>4 minutos.</strong>
          </SubTitle>
          <ButtonContainer>
            <Button>VER DEMONSTRAÇÃO</Button>
            <InfoImage width="150px" src="/images/selo_RD.png" alt="selo-RD" />
            <TextContainer>
              <TextContainer>
                <InfoImage
                  width="16px"
                  height="16px"
                  src="/images/no-card-dark.png"
                  alt="no-credit-card"
                />
                <InfoText>Não é necessário Cartão de Cŕedito</InfoText> |
              </TextContainer>
              <TextContainer>
                <InfoImage
                  width="92px"
                  height="16px"
                  src="/images/rating.png"
                  alt="rating"
                />
                <InfoText>4.9/5 média de satisfação</InfoText>
              </TextContainer>
            </TextContainer>
          </ButtonContainer>
        </InfosContainer>
      </PaymentContent>
    </PaymentContainer>
  );
}

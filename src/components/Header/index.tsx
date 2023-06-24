import {
  HeaderContainer,
  InformationTag,
  Logo,
  MainHeader,
  MoreConversionContainer,
  SecondaryHeader,
  SubTitle,
  Title,
} from './style';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo src="/images/logo.png" alt="leadster-logo" />
      </MainHeader>
      <SecondaryHeader>
        <InformationTag>WEBNARS EXCLUSIVOS</InformationTag>
        <MoreConversionContainer>
          <Title>
            Menos Conversinha,
            <br />
            <strong>Mais conversão</strong>
          </Title>
        </MoreConversionContainer>
        <SubTitle>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </SubTitle>
      </SecondaryHeader>
    </HeaderContainer>
  );
}

import Link from 'next/link';
import {
  CommonBlock,
  FooterBottom,
  FooterContainer,
  FooterNavigator,
  FooterTop,
  FooterTopContainer,
  Icon,
  IconContainer,
  Icons,
  Logo,
  LogoContainer,
  MenuTitle,
  Option,
  OtherInfosContainer,
  SocialMediaBlock,
  SubTitle,
  Text,
} from './style';

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <FooterTop>
          <LogoContainer>
            <Link href="/">
              <Logo
                src="https://leadster.com.br/_next/image/?url=%2Fimg%2Fleadster%2Fleadster_gif%2Fleadster_270.gif&w=640&q=75"
                alt="leadster-logo"
              />
            </Link>
            <SubTitle>Transformando visitantes em clientes.</SubTitle>
          </LogoContainer>
          <FooterNavigator>
            <CommonBlock>
              <MenuTitle>Links Principais</MenuTitle>
              <ul>
                <Link href="/">
                  <Option>Home</Option>
                </Link>

                <Link href="https://leadster.com.br/preco/" target="_blank">
                  <Option>Ferramenta</Option>
                </Link>
                <Link href="https://leadster.com.br/preco/" target="_blank">
                  <Option>Preços</Option>
                </Link>
                <Link href="https://leadster.com.br/contato/" target="_blank">
                  <Option>Contato</Option>
                </Link>
              </ul>
            </CommonBlock>
            <CommonBlock>
              <MenuTitle>Cases</MenuTitle>
              <ul>
                <Link
                  href="https://leadster.com.br/geracao-de-leads/b2b/"
                  target="_blank"
                >
                  <Option>Geração de Leads B2B</Option>
                </Link>

                <Link
                  href="https://leadster.com.br/geracao-de-leads/software/"
                  target="_blank"
                >
                  <Option>Geração de Leads em Software</Option>
                </Link>
                <Link
                  href="https://leadster.com.br/geracao-de-leads/imobiliaria/"
                  target="_blank"
                >
                  <Option>Geração de Leads em Imobiliária</Option>
                </Link>
                <Link
                  href="https://leadster.com.br/estudo-de-caso/"
                  target="_blank"
                >
                  <Option>Cases de Sucesso</Option>
                </Link>
              </ul>
            </CommonBlock>
            <CommonBlock>
              <MenuTitle>Materiais</MenuTitle>
              <ul>
                <Link href="https://leadster.com.br/blog/" target="_blank">
                  <Option>Blog</Option>
                </Link>

                <Link
                  href="https://leadster.com.br/agencias-parceiras/programa/"
                  target="_blank"
                >
                  <Option>Parceria com Agências</Option>
                </Link>
                <Link
                  href="https://leadster.com.br/marketing-conversacional/"
                  target="_blank"
                >
                  <Option>Guia Definitivo do Marketing</Option>
                </Link>
                <Link href="https://leadster.com.br/materiais/" target="_blank">
                  <Option>Materiais Gratuitos</Option>
                </Link>
              </ul>
            </CommonBlock>
            <SocialMediaBlock>
              <MenuTitle>Siga a Leadster</MenuTitle>
              <Icons>
                <Link
                  href="https://www.linkedin.com/company/leadster-platform"
                  target="_blank"
                >
                  <IconContainer>
                    <Icon src="/icons/linkedin-icon.svg" />
                  </IconContainer>
                </Link>
                <Link
                  href="https://www.facebook.com/leadsterplatform"
                  target="_blank"
                >
                  <IconContainer>
                    <Icon src="/icons/facebook-icon.svg" />
                  </IconContainer>
                </Link>
                <Link
                  href="https://www.instagram.com/leadster.com.br/"
                  target="_blank"
                >
                  <IconContainer>
                    <Icon src="/icons/instagram-icon.svg" />
                  </IconContainer>
                </Link>
              </Icons>
              <Text>
                <strong>E-mail:</strong> contato@leadster.com.br
              </Text>
              <Text>
                <strong>Telefone:</strong> (42) 98828-9851
              </Text>
            </SocialMediaBlock>
          </FooterNavigator>
        </FooterTop>
      </FooterTopContainer>
      <FooterBottom>
        <OtherInfosContainer>
          <Text>
            Copyright © 2015 - 2022 Todos os direitos reservados |{' '}
            <Link href="/">Leadster</Link>
          </Text>
          <Text>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
            <Link href="https://leadster.com.br/termos_de_uso/" target="_blank">
              Termos de uso
            </Link>
          </Text>
        </OtherInfosContainer>
      </FooterBottom>
    </FooterContainer>
  );
}

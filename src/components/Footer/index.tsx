'use client';

import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TfiInstagram } from 'react-icons/tfi';
import {
  CommonBlock,
  FooterBottom,
  FooterContainer,
  FooterNavigator,
  FooterTop,
  FooterTopContainer,
  IconContainer,
  Icons,
  Logo,
  LogoContainer,
  MenuTitle,
  Option,
  OptionsList,
  OtherInfosContainer,
  SocialMediaBlock,
  SubTitle,
  Text,
} from './style';

type BlockTitle = 'main-links' | 'cases' | 'materials';

interface OptionsInterface {
  name: string;
  link: string;
}

const commonBlocks: {
  key: BlockTitle;
  label: string;
  options: OptionsInterface[];
}[] = [
  {
    key: 'main-links',
    label: 'Links Principais',
    options: [
      { name: 'Home', link: 'https://leadster.com.br/' },
      { name: 'Ferramenta', link: 'https://leadster.com.br/preco/' },
      { name: 'Preços', link: 'https://leadster.com.br/preco/' },
      { name: 'Contato', link: 'https://leadster.com.br/contato/' },
    ],
  },
  {
    key: 'cases',
    label: 'Cases',
    options: [
      {
        name: 'Geração de Leads B2B',
        link: 'https://leadster.com.br/geracao-de-leads/b2b/',
      },
      {
        name: 'Geração de Leads em Software',
        link: 'https://leadster.com.br/geracao-de-leads/software/',
      },
      {
        name: 'Geração de Leads em Imobiliária',
        link: 'https://leadster.com.br/geracao-de-leads/imobiliaria/',
      },
      {
        name: 'Cases de Sucesso',
        link: 'https://leadster.com.br/estudo-de-caso/',
      },
    ],
  },
  {
    key: 'materials',
    label: 'Materiais',
    options: [
      { name: 'Blog', link: 'https://leadster.com.br/blog/' },
      {
        name: 'Parceria com Agências',
        link: 'https://leadster.com.br/agencias-parceiras/programa/',
      },
      {
        name: 'Guia Definitivo do Marketing',
        link: 'https://leadster.com.br/marketing-conversacional/',
      },
      {
        name: 'Materiais Gratuitos',
        link: 'https://leadster.com.br/materiais/',
      },
    ],
  },
];

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
            {commonBlocks.map(({ key, label, options }) => {
              return (
                <CommonBlock key={key}>
                  <MenuTitle>{label}</MenuTitle>
                  <OptionsList>
                    {options.map(({ name, link }) => {
                      return (
                        <li key={name}>
                          <Link href={link} target="_blank">
                            <Option>{name}</Option>
                          </Link>
                        </li>
                      );
                    })}
                  </OptionsList>
                </CommonBlock>
              );
            })}
            <SocialMediaBlock>
              <MenuTitle>Siga a Leadster</MenuTitle>
              <Icons>
                <Link
                  href="https://www.linkedin.com/company/leadster-platform"
                  target="_blank"
                >
                  <IconContainer>
                    <FaLinkedinIn className="text-gray-option-gray" size={15} />
                  </IconContainer>
                </Link>
                <Link
                  href="https://www.facebook.com/leadsterplatform"
                  target="_blank"
                >
                  <IconContainer>
                    <FaFacebookF className="text-gray-option-gray" size={15} />
                  </IconContainer>
                </Link>
                <Link
                  href="https://www.instagram.com/leadster.com.br/"
                  target="_blank"
                >
                  <IconContainer>
                    <TfiInstagram className="text-gray-option-gray" size={15} />
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

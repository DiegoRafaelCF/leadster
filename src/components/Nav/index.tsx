'use client';

import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { usePathname, useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import {
  Button,
  ButtonMenuMB,
  FilterContainer,
  FilterScreenMB,
  HeaderMenuMB,
  LogoMB,
  MenuContainerMB,
  NavContainer,
  NavContent,
  NavOptions,
  NavOptionsMB,
  Text,
} from './style';
import { InputSelect } from '../common/InputSelect';

export type Pages =
  | 'agencies'
  | 'chatbot'
  | 'digital-marketing'
  | 'lead-generation'
  | 'paid-midia';

const links: {
  key: Pages;
  label: string;
}[] = [
  { key: 'agencies', label: 'Agências' },
  { key: 'chatbot', label: 'Chatbot' },
  { key: 'digital-marketing', label: 'Marketing Digital' },
  { key: 'lead-generation', label: 'Geração de Leads' },
  { key: 'paid-midia', label: 'Mídia Paga' },
];

export function Nav(): JSX.Element {
  const path = usePathname().replace('/', '');
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const router = useRouter();

  const filterOptionsMock: { optionId: string; name: string }[] = [
    { optionId: '1', name: 'Data de Publicação' },
    { optionId: '2', name: 'View' },
  ];

  return (
    <>
      {isMenuMobileOpen && (
        <>
          <MenuContainerMB>
            <HeaderMenuMB>
              <LogoMB src="images/logo.png" alt="leadster-logo" />
              <ButtonMenuMB onClick={() => setIsMenuMobileOpen(false)}>
                <IoMdClose className="text-gray-primary-gray" size={30} />
              </ButtonMenuMB>
            </HeaderMenuMB>
            <NavOptionsMB>
              {links.map(({ key, label }) => {
                return (
                  <li key={key}>
                    <Button
                      isSelected={path === key}
                      onClick={() => {
                        setIsMenuMobileOpen(false);
                        router.push(key);
                      }}
                    >
                      {label}
                    </Button>
                  </li>
                );
              })}
            </NavOptionsMB>
          </MenuContainerMB>
          <FilterScreenMB />
        </>
      )}
      <NavContainer>
        <NavContent>
          <NavOptions>
            {links.map(({ key, label }) => {
              return (
                <li key={key}>
                  <Button
                    isSelected={path === key}
                    onClick={() => {
                      router.push(key);
                    }}
                  >
                    {label}
                  </Button>
                </li>
              );
            })}
          </NavOptions>
          <ButtonMenuMB onClick={() => setIsMenuMobileOpen(true)}>
            <RxHamburgerMenu className="text-gray-primary-gray" size={30} />
          </ButtonMenuMB>
          <FilterContainer>
            <Text>Ordenar por</Text>
            <InputSelect id="orber-by" options={filterOptionsMock} />
          </FilterContainer>
        </NavContent>
      </NavContainer>
    </>
  );
}

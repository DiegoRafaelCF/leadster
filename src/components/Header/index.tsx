import { HeaderContainer, Logo } from './style';

export function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo src="/images/logo.png" alt="leadster-logo" />
    </HeaderContainer>
  );
}

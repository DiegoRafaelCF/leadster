import styled from 'styled-components';

/* 
  To the header component I preferred to use 1 breakpoints.
  It's:
  -> max-width: 1024px;
*/

// This container bellow wraps all the footer

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// This container bellow wraps the top of the footer content and applies a broken line

export const FooterTopContainer = styled.div`
  width: 100%;
  padding: 48px 0px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--secondary-gray);
`;

// This container bellow wraps the top of the footer content and sets a max-width

export const FooterTop = styled.section`
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 40px;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 270px;
`;

export const SubTitle = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 28px;
  color: var(--primary-gray);
`;

export const FooterNavigator = styled.div`
  width: 70%;
  background-color: var(--primary-bg-color);
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CommonBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const MenuTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: var(--primary-gray);
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Option = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--option-gray);

  :hover {
    color: var(--secondary-blue);
  }
`;

export const SocialMediaBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Icons = styled.div`
  margin: 5px 0px;
  display: flex;
  gap: 10px;
`;

export const IconContainer = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--secondary-gray);
  transition-duration: 0.5s;

  :hover {
    background-color: var(--primary-blue);

    svg {
      filter: brightness(100);
    }
  }
`;

export const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--option-gray);

  a {
    color: var(--primary-blue);
  }

  strong {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--primary-gray);
  }
`;

// This container bellow wraps the bottom of the footer content and sets a max-width

export const FooterBottom = styled.section`
  width: 100%;
  max-width: 1320px;
  padding: 27px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OtherInfosContainer = styled.div`
  width: 70%;
  background-color: var(--primary-bg-color);
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

import styled from 'styled-components';

/* 
  To the header component I preferred to use 3 breakpoints.
  They are:
  -> max-width: 768px;
  -> min-width: 768px and max-width: 1024px;
  -> min-width: 1024px;
*/

// This container bellow wraps all header content

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--primary-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 170px;

  @media (max-width: 768px) {
    width: 132px;
  }
`;

// This container bellow wraps the bottom of the header content

export const SecondaryHeader = styled.div`
  width: 100%;
  padding: 150px 0px 150px 0px;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 60px 20px 60px 20px;
  }
`;

export const InformationTag = styled.span`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 10px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: var(--secondary-blue);
  border: 2px solid var(--secondary-blue);
  border-radius: 45px 45px 45px 0px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

// This container bellow wraps the header title to control the application of the image near the last letter "o"

export const MoreConversionContainer = styled.div`
  position: relative;

  ::after {
    background-image: url('/images/asset-header.png');
    background-size: cover;
    width: 40px;
    height: 26px;
    position: absolute;
    right: -12px;
    bottom: 52px;
    content: '';
  }

  @media (max-width: 768px) {
    padding: 0px 10px 10px 10px;

    ::after {
      width: 24px;
      height: 15px;
      right: 0px;
      bottom: 38px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    ::after {
      width: 32px;
      height: 20px;
      bottom: 40px;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.2;
  font-weight: 500px;
  font-size: 40px;
  color: var(--primary-gray);

  strong {
    line-height: 1.2;
    font-weight: 700px;
    font-size: 76px;
    color: var(--secondary-blue);
  }

  @media (max-width: 768px) {
    font-size: 22px;

    strong {
      font-size: 40px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;

    strong {
      font-size: 58px;
    }
  }
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  padding: 10px 20px 0px 20px;
  border-top: 1px solid var(--secondary-gray);
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: var(--primary-gray);

  @media (max-width: 768px) {
    max-width: 360px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 500px;
  }
`;

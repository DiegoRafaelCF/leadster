import styled, { css } from 'styled-components';

/* 
  To the header component I preferred to use 3 breakpoints.
  They are:
  -> max-width: 768px;
  -> min-width: 768px and max-width: 1024px;
  -> max-width: 1089px
  -> max-width: 1499px;
*/

interface ButtonProps {
  isSelected: boolean;
}

// This container bellow wraps all nav content

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NavContent = styled.div`
  width: 60%;
  padding: 60px 0px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--secondary-gray);

  @media (max-width: 1499px) {
    width: 80%;
  }

  @media (max-width: 1089px) {
    gap: 15px;
    width: 90%;
  }
`;

export const NavOptions = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 719px) {
    display: none;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 7px 15px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--primary-gray);
  background-color: var(--primary-bg-color);
  border: 1px solid var(--primary-gray);
  border-radius: 30px;
  transition-duration: 0.5s;

  ${(props) =>
    props.isSelected &&
    css`
      color: var(--primary-bg-color);
      background-color: var(--secondary-blue);
      border: 1px solid var(--secondary-blue);
    `}

  :hover {
    color: var(--secondary-blue);
    border: 1px solid var(--secondary-blue);

    ${(props) =>
      props.isSelected &&
      css`
        background-color: var(--primary-bg-color);
      `}
  }
`;

export const FilterContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--primary-gray);
`;

// These styles bellow are mobile menu styles

export const MenuContainerMB = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 60%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
  background-color: var(--primary-bg-color);
  z-index: 30;
  animation-name: opening-animation;
  animation-duration: 0.5s;

  @keyframes opening-animation {
    0% {
      left: -75%;
    }
    100% {
      left: 0px;
    }
  }
`;

export const HeaderMenuMB = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoMB = styled.img`
  width: 170px;

  @media (max-width: 600px) {
    width: 132px;
  }
`;

export const ButtonMenuMB = styled.button`
  @media (min-width: 720px) {
    display: none;
  }
`;

export const ImageMenuMB = styled.img`
  width: 20px;
`;

export const NavOptionsMB = styled.ul`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

export const FilterScreenMB = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(118, 118, 118, 0.5);
  backdrop-filter: blur(3px);
  z-index: 29;
`;

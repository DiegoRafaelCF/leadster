import styled, { css } from 'styled-components';

/* 
  To the header component I preferred to use 3 breakpoints.
  They are:
  -> max-width: 576px;
  -> max-width: 768px;
  -> max-width: 992px;
  -> min-width: 1024px;
  -> min-width: 1199px and max-width: 1399px;
  -> min-width: 993px and max-width: 1199px;
*/

interface ImageProps {
  width: string;
  height?: string;
}

export const PaymentContainer = styled.section`
  width: 100%;
  position: relative;
  background-color: var(--secondary-bg-color);
  overflow: hidden;
  padding: 48px 0px;
`;

export const PaymentShape = styled.div`
  height: 1022px;
  width: 870px;
  position: absolute;
  top: 220px;
  left: -120px;
  background-color: var(--shape-bg-color);
  border-radius: 80px;
  transform: rotate(-43deg);
  z-index: 10px;
`;

export const PaymentContent = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0px 12px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 20;

  @media (max-width: 992px) {
    flex-direction: column;
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 576px) {
    max-width: 375px;
  }
`;

export const ImageContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 618px;
  z-index: 20;

  @media (min-width: 1199px) and (max-width: 1399px) {
    width: 558px;
  }

  @media (min-width: 993px) and (max-width: 1199px) {
    width: 468px;
  }
`;

export const InfosContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 24px;
  justify-content: center;
  z-index: 20;

  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  max-width: 450px;
  text-align: left;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1.2;
  font-weight: 500px;
  font-size: 38px;
  color: var(--primary-gray);

  @media (max-width: 576px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  text-align: left;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: var(--primary-gray);

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  border-top: 3px solid var(--secondary-gray);

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 14px 30px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: var(--primary-bg-color);
  background-color: var(--secondary-blue);
  border: 1px solid var(--secondary-blue);
  border-radius: 45px;
  transition-duration: 0.5s;

  :hover {
    color: var(--secondary-blue);
    background-color: var(--primary-bg-color);
    border: 1px solid var(--secondary-blue);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

// This tag bellow was made to compose a simple image component, where the width is the only information that changes.

export const InfoImage = styled.img<ImageProps>`
  width: ${({ width }) => width};
  z-index: 20;

  ${({ height }) =>
    css`
      height: ${height};
    `}
`;

export const InfoText = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: var(--primary-gray);
`;

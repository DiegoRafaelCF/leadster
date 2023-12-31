import { Nav } from '@/components/Nav';
import './globals.css';

import { Header } from '@/components/Header';
import { PaymentSection } from '@/components/PaymentSection';
import { Footer } from '@/components/Footer';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata = {
  title: 'Leadster',
  description: 'Desafio Front-end Leadster',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* StyledComponentsRegistry is used to configure styled-component styles */}
        <StyledComponentsRegistry>
          <Header />
          <Nav />
          {children}
          <PaymentSection />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

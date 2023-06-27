'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PaymentSection } from '@/components/PaymentSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <PaymentSection />
      <Footer />
    </main>
  );
}

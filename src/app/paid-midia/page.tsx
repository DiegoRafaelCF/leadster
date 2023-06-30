'use client';

import Link from 'next/link';

export default function PaidMidia() {
  return (
    <main className="w-full flex items-center justify-center p-16">
      <div className="font-PJ my-32">
        <h1 className="text-blue-secondary-blue font-bold text-5xl">
          Desculpe pela bagunça!
        </h1>
        <h2 className="text-gray-primary-gray font-semibold text-lg mt-4 mb-8 ">
          Estamos construindo uma página incrível para você :)
        </h2>
        <span className="flex gap-1 text-gray-primary-gray font-medium text-md">
          Em breve! Fique ligado para mais informações em
          <Link
            className="text-blue-primary-blue"
            rel="stylesheet"
            href="https://leadster.com.br/"
            target="_blank"
          >
            leadser.com.br
          </Link>
        </span>
      </div>
    </main>
  );
}

'use client';

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center">
      <div className="font-PJ my-32 max-[600px]:my-16 px-4">
        <h1 className="text-blue-secondary-blue font-bold text-5xl max-[600px]:text-2xl">
          Desculpe pela bagunça!
        </h1>
        <h2 className="text-gray-primary-gray font-semibold text-lg max-[600px]:text-sm mt-4 mb-8 ">
          Estamos construindo uma página incrível para você :)
        </h2>
        <span className="flex gap-1 text-gray-primary-gray font-medium text-md max-[600px]:text-sm">
          Em breve! Fique ligado para mais informações.
        </span>
      </div>
    </main>
  );
}

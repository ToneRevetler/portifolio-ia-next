'use client';
import Link from 'next/link';
import FuzzyText from '../assets/gps-lib/FuzyText';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-[100dvh] w-full bg-gray-100 ">
      <div className="text-center flex justify-center flex-col items-center gap-4 text-animation">
        <FuzzyText
          baseIntensity={0.18}
          fontSize={'clamp(10rem, 8vw, 12rem)'}
        >
          404
        </FuzzyText>
        <p className='text-xl'>
          <FuzzyText
            baseIntensity={0.18}
          >
            Not Found
          </FuzzyText>
        </p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline border-blue-600 p-4 border-1 rounded-4xl">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
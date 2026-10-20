import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Initial from '../../../../components/Hero';

export const metadata: Metadata = {
  title: 'Desenvolvimento local do assistente',
  robots: { index: false, follow: false },
};

export default function ChatPreview() {
  if (process.env.NODE_ENV !== 'development') notFound();

  return <>
    <div className="border-b border-slate-200 bg-white px-5 py-3 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <p>Assistente em desenvolvimento · disponível somente no servidor local</p>
        <Link href="/" className="inline-flex min-h-11 items-center text-blue-700 underline underline-offset-4">Ver portfólio sem chat</Link>
      </div>
    </div>
    <Initial previewChat />
  </>;
}

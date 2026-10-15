'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  text: string;
  onComplete: () => void;
  onProgress: () => void;
};

export default function TypingMessage({ text, onComplete, onProgress }: Props) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const characters = Array.from(text);
    const duration = Math.min(characters.length * 12, 6000);
    let frame = 0;
    let started: number | undefined;

    function finish() {
      cancelAnimationFrame(frame);
      onComplete();
    }

    function tick(now: number) {
      started ??= now;
      const count = Math.min(characters.length, Math.ceil(((now - started) / Math.max(duration, 1)) * characters.length));
      if (count >= characters.length) {
        finish();
        return;
      }
      setVisibleText(characters.slice(0, count).join(''));
      frame = requestAnimationFrame(tick);
    }

    function onPreferenceChange() {
      if (preference.matches) finish();
    }

    if (preference.matches || !text) finish();
    else frame = requestAnimationFrame(tick);
    preference.addEventListener('change', onPreferenceChange);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [text, onComplete]);

  useEffect(() => { onProgress(); }, [visibleText, onProgress]);

  return <>
    {/* Announce the answer once, not every character of the animation. */}
    <span className="sr-only">{text}</span>
    <div aria-hidden="true" className="min-h-6 break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: ({ children }) => <span>{children}</span> }}>{visibleText}</ReactMarkdown>
    </div>
  </>;
}

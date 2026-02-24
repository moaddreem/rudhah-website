import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rudhah Cafe | ردهه',
  description: 'A calm coffee experience in the heart of Abha - قهوة رايقة في قلب أبها',
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="ltr" lang="en">
      {children}
    </div>
  );
}

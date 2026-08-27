import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CNC Purwodadi | Layanan Jasa CNC Presisi',
  description: 'Jasa pemotongan, ukiran, dan grafir presisi CNC Fiber Laser & Router.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900`}>{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fredoka } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'STEAMtastic - Learn STEAM while having fun',
  description: 'Interactive EdTech platform for teaching STEAM subjects to children, youth, and teachers in Francophone Africa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
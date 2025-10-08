import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Personal Statement Reviews',
  description: 'Professional personal statement editing and feedback.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

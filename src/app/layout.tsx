import './globals.css';
import React from 'react';

export const metadata = {
  title: 'XySync',
  description: 'Syncing all healthcare needs',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Explicit favicon links for all browsers */}
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
<link rel="mask-icon" href="/favicon.ico" color="#000000" />
</head>
<body>{children}</body>
</html>

  );
}

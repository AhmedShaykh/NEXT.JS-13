import Navbar from '@/Components/Navbar';
import Head from './head';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
};
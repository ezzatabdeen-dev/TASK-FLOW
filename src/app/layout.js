import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container, NavBar } from './components/index'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `Task Flow`,
  description: `TaskFlow is a simple and powerful project management system that helps teams organize their tasks and easily track work progress. Create your projects, add tasks, and stay on top of updates in one place.`,
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: '16x16', type: 'image/svg' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg' }
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.svg',
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Container>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}

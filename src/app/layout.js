import "./globals.css";
import { Container } from "@/Components/index";
import { AppWrapper } from "@/Context/index";
import { NavBar } from "@/Components/index";

export const metadata = {
  title: `Task Flow`,
  description: `TaskFlow is a simple and powerful project management system that helps teams organize their tasks and easily track work progress. Create your projects, add tasks, and stay on top of updates in one place.`,
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg" },
      { url: "/favicon.svg", sizes: "32x32", type: "image/svg" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Container>
            <NavBar />
            {children}
          </Container>
        </AppWrapper>
      </body>
    </html>
  );
}

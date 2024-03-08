import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// const config = getDefaultConfig({
//   appName: 'Fintech Agent',
//   projectId: 'b362c8f59be260a22a9ecd304d11a640',
//   chains: [polygon, base, sepolia, polygonMumbai],
//   ssr: true,
// });

export const metadata = {
  title: "Fintech Agent",
  description: "A Platform for End to End Fintech Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

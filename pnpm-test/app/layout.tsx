import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const Noto_Sans = Noto_Sans_KR({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "PNPM NextJS Tutorial",
  description: "PNPM NextJS Tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Noto_Sans.className}>{children}</body>
    </html>
  );
}

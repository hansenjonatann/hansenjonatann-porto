import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Hansen Jonatan",
  description: "Portofolio Pribadi Hansen Jonatan ",
  icons: [{ rel: "icon", url: "/profile.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="md:m-8">{children}</body>
    </html>
  );
}

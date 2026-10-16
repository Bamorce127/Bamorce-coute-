import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bamorce Écoute — Parlez. Nous vous écoutons.",
    template: "%s | Bamorce Écoute"
  },
  description: "Un espace d'écoute, de soutien communautaire et d'orientation, fondé sur la bienveillance et la confidentialité.",
  applicationName: "Bamorce Écoute",
  robots: { index: false, follow: false }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123b35"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

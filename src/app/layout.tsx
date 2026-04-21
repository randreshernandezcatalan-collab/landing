import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NuevaNet · Innovación Computacional",
  description:
    "Proveedor de internet de alta velocidad. Planes residenciales y empresariales con fibra óptica, soporte 24/7 y cobertura regional.",
  keywords: ["internet", "fibra óptica", "NuevaNet", "proveedor de internet", "ISP"],
  openGraph: {
    title: "NuevaNet · Innovación Computacional",
    description: "Internet de alta velocidad para hogares y empresas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}

import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anderson Floor Covering | Premium Flooring Services in Ottawa County",
  description: "Expert flooring installation and services in Ottawa County & West Michigan. Led by Justin Anderson, specializing in hardwood, luxury vinyl, carpet, and tile installation with 15+ years of experience.",
  keywords: "flooring installation, hardwood flooring, luxury vinyl, carpet installation, tile installation, Ottawa County flooring, West Michigan flooring, Anderson Floor Covering, Justin Anderson",
  openGraph: {
    title: "Anderson Floor Covering | Premium Flooring Services in Ottawa County",
    description: "Expert flooring installation and services in Ottawa County & West Michigan. Led by Justin Anderson, specializing in hardwood, luxury vinyl, carpet, and tile installation.",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anderson Floor Covering | Premium Flooring Services in Ottawa County",
    description: "Expert flooring installation and services in Ottawa County & West Michigan. Led by Justin Anderson, specializing in hardwood, luxury vinyl, carpet, and tile installation.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>)
  );
}


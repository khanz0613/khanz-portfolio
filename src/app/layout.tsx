import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khanz-portfolio.vercel.app'),
  title: {
    default: "하경한 - 풀스택 개발자 & ML 엔지니어 포트폴리오",
    template: "%s | 하경한 포트폴리오"
  },
  description: "풀스택 개발부터 머신러닝까지 다양한 기술 스택을 활용한 실무 프로젝트 경험을 보유한 개발자 하경한의 포트폴리오입니다. 현재 2개의 프로덕션 서비스를 운영하며 10만+ 사용자에게 서비스를 제공하고 있습니다.",
  keywords: [
    "하경한", "Kyunghan Ha", "풀스택 개발자", "머신러닝 엔지니어",
    "Spring Boot", "React", "Vue.js", "Python", "DevOps", "AWS",
    "포트폴리오", "개발자", "풀스택", "머신러닝", "AI"
  ],
  authors: [{ name: "하경한 (Kyeonghan Ha)", url: "https://github.com/khanz0613" }],
  creator: "하경한",
  publisher: "하경한",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://khanz-portfolio.vercel.app",
    title: "하경한 - 풀스택 개발자 포트폴리오",
    description: "사용자에게 서비스를 제공하는 프로덕션 서비스를 운영하는 풀스택 개발자 및 ML 엔지니어",
    siteName: "하경한 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "하경한 - 풀스택 개발자 및 ML 엔지니어",
    description: "풀스택 개발, 머신러닝, DevOps 전문성을 보여주는 전문 포트폴리오",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container-width section-padding py-12">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold gradient-text">하경한 (Kyeonghan Ha)</h3>
              <p className="text-gray-600 dark:text-gray-400">
                풀스택 개발자 & ML 엔지니어
              </p>
              <div className="flex justify-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
                <a href="mailto:gkrudgks0613@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  gkrudgks0613@gmail.com
                </a>
                <span className="text-gray-400">•</span>
                <a href="tel:010-2431-0733" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  010-2431-0733
                </a>
                <span className="text-gray-400">•</span>
                <a href="https://github.com/khanz0613" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                © 2025 하경한. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
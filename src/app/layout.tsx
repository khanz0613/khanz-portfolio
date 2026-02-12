import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khanz-portfolio.vercel.app"),
  title: {
    default: "하경한 | 백엔드 중심 풀스택 개발자 & ML 엔지니어",
    template: "%s | 하경한 포트폴리오",
  },
  description:
    "백엔드 아키텍처, 데이터 파이프라인, ML 모델링을 실제 프로젝트로 증명해온 하경한의 개발자 포트폴리오입니다.",
  keywords: [
    "하경한",
    "Kyeonghan Ha",
    "풀스택 개발자",
    "백엔드 개발자",
    "ML 엔지니어",
    "Spring Boot",
    "Java",
    "Python",
    "Redis",
    "AWS",
    "포트폴리오",
  ],
  authors: [{ name: `${profile.name} (${profile.englishName})`, url: profile.github }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://khanz-portfolio.vercel.app",
    title: "하경한 | 백엔드 중심 풀스택 개발자 & ML 엔지니어",
    description:
      "서비스 안정성과 데이터 정확도를 함께 설계하는 개발자. 프로젝트 성과와 기술 역량을 한눈에 확인할 수 있습니다.",
    siteName: "하경한 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "하경한 포트폴리오",
    description: "백엔드, 데이터, ML을 연결해 문제를 해결하는 개발자 소개 페이지",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="ko" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navigation />
        <main className="relative">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="container-width section-padding py-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-lg font-extrabold tracking-tight text-slate-900">
                {profile.name}
                <span className="ml-2 text-sm font-semibold text-slate-500">{profile.englishName}</span>
              </p>
              <p className="max-w-2xl text-sm text-slate-600">{profile.headline}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-blue-600">
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="transition-colors hover:text-blue-600">
                  {profile.phone}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600"
                >
                  GitHub
                </a>
              </div>
              <p className="text-xs text-slate-500">
                © {currentYear} {profile.name}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

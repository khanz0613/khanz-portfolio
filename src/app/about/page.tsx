import type { Metadata } from 'next';
import { Music2, Trophy, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { awards, experienceItems, profile } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '소개',
  description: '하경한의 개발 배경, 경험, 협업 스타일을 소개합니다.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="gradient-bg border-b border-slate-200">
        <div className="container-width section-padding section-shell">
          <span className="section-label">About</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">소개</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            {profile.name}({profile.englishName})입니다. 데이터와 서비스 운영을 함께 보는 개발자로 성장해왔고, 팀 프로젝트에서는 구조와 기준을
            세우는 역할을 주로 맡아왔습니다.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <UserRound size={18} className="text-blue-600" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">개발자로서의 방식</h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              기능만 구현하는 개발보다, 운영 가능한 시스템을 만드는 개발을 지향합니다. 그래서 요구사항을 받으면 먼저 실패 케이스를 정의하고
              로그/모니터링 기준부터 잡습니다. 모델 성능이든 API 응답 속도든 결과를 숫자로 확인하고 개선합니다.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>문제 정의 → 측정 지표 → 구현 → 회고까지 끊기지 않게 설계</li>
              <li>팀 협업에서는 설계 문서와 기준 합의를 먼저 진행</li>
              <li>불확실한 기술 선택은 빠른 실험으로 검증 후 확정</li>
            </ul>
          </article>

          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black tracking-tight text-slate-900">기본 정보</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                이름: <span className="font-semibold">{profile.name}</span>
              </li>
              <li>
                위치: <span className="font-semibold">{profile.location}</span>
              </li>
              <li>
                이메일: <span className="font-semibold">{profile.email}</span>
              </li>
              <li>
                연락처: <span className="font-semibold">{profile.phone}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/contact" className="w-full">
                연락하기
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white">
        <div className="container-width section-padding">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">경험</h2>
          <div className="mt-6 space-y-4">
            {experienceItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.period}</p>
                <h3 className="mt-1 text-lg font-black tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-sm font-semibold text-blue-600">{item.organization}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-emerald-600" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">수상</h2>
            </div>
            {awards.map((award) => (
              <div key={award.title} className="rounded-xl bg-emerald-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{award.period}</p>
                <p className="mt-1 text-sm font-extrabold text-slate-900">{award.title}</p>
                <p className="text-xs font-semibold text-emerald-700">{award.organization}</p>
                <p className="mt-2 text-sm text-slate-700">{award.description}</p>
              </div>
            ))}
          </article>

          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Music2 size={18} className="text-amber-600" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">대외 활동</h2>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">2018.03 - 2024.02</p>
              <p className="mt-1 text-sm font-extrabold text-slate-900">목멱성(밴드동아리)</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                장기간 동아리 활동을 하며 협업 리듬과 책임감 있는 역할 수행을 몸에 익혔습니다. 2019년에는 회장으로 팀 운영을 맡아 일정 조율,
                역할 분배, 갈등 조정 경험을 쌓았습니다.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

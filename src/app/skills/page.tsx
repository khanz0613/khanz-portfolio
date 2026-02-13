import type { Metadata } from 'next';
import { BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { certifications, featuredKeywordSkills, skillGroups } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '기술 스택',
  description: '하경한이 실제 프로젝트에서 활용한 기술 스택과 숙련도를 정리한 페이지입니다.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="gradient-bg border-b border-slate-200">
        <div className="container-width section-padding section-shell">
          <span className="section-label">Skills</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">기술 스택</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            프로젝트 맥락에서 검증된 기술만 남겼습니다. 도구 자체보다 문제 해결과 운영 관점에서 어떻게 썼는지를 더 중요하게 봅니다.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-black tracking-tight text-slate-900">{group.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.description}</p>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => (
                  <li key={`${group.title}-${skill.name}`} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white">
        <div className="container-width section-padding">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">핵심 기술 키워드</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredKeywordSkills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
              >
                {skill.name}
                <span className="ml-1 text-xs text-slate-500">({skill.level})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-emerald-600" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">자격 및 공인 시험</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {certifications.map((item) => (
                <li key={item.title} className="rounded-lg bg-slate-50 px-3 py-2">
                  <span className="font-semibold text-slate-900">{item.title}</span>
                  <span className="ml-2 text-xs text-slate-500">{item.type}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black tracking-tight text-slate-900">기술 적용 방식</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <li>백엔드: 도메인 모델링과 트랜잭션 안정성을 먼저 설계합니다.</li>
              <li>데이터: 전처리 기준을 문서화하고 재현 가능한 파이프라인으로 관리합니다.</li>
              <li>ML: 지표 선정 근거와 오차 해석을 함께 남깁니다.</li>
              <li>인프라: 배포 자동화와 관측성 확보를 기본 조건으로 둡니다.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects">프로젝트 보기</Button>
              <Button href="/contact" variant="outline">
                기술 문의
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

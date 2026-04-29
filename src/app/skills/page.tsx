import type { Metadata } from 'next';
import { BadgeCheck, Boxes, BrainCircuit, CloudCog, Code2, Database, Gauge, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { certifications, featuredKeywordSkills, skillGroups } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '기술 스택',
  description: '하경한이 실제 프로젝트에서 활용한 기술 스택과 숙련도를 정리한 페이지입니다.',
};

const levelMeta = {
  전문가: { width: 'w-[96%]', tone: 'bg-zinc-950 text-white' },
  고급: { width: 'w-[78%]', tone: 'bg-sky-100 text-sky-800' },
  중급: { width: 'w-[58%]', tone: 'bg-emerald-100 text-emerald-800' },
  초급: { width: 'w-[36%]', tone: 'bg-amber-100 text-amber-800' },
};

const groupIcons = [Code2, Boxes, BrainCircuit, CloudCog];
const operatingPrinciples = [
  {
    icon: ShieldCheck,
    title: '안정성',
    text: '동시성, 인증, 트랜잭션 경계를 먼저 검토합니다.',
  },
  {
    icon: Database,
    title: '데이터 정확도',
    text: '전처리 기준과 결측 처리 방식을 재현 가능하게 남깁니다.',
  },
  {
    icon: Gauge,
    title: '측정 가능한 개선',
    text: '성능, 정확도, 배포 시간을 숫자로 확인합니다.',
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#f4f0e7] pt-16 text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-950/10 bg-white">
        <div className="container-width section-padding section-shell">
          <span className="section-label">Skills</span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black md:text-6xl">기술 스택</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg">
                프로젝트 맥락에서 검증된 기술만 남겼습니다. 도구 자체보다 문제 해결과 운영 관점에서 어떻게 썼는지를 더 중요하게 봅니다.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-zinc-950/10 sm:grid-cols-3">
              {operatingPrinciples.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="bg-[#111816] p-4 text-white">
                    <Icon className="h-5 w-5 text-[#f6d365]" />
                    <h2 className="mt-4 text-base font-black">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index] ?? Code2;

            return (
              <article key={group.title} className="rounded-lg border border-zinc-950/10 bg-white p-5 shadow-[0_18px_55px_rgba(30,24,14,0.07)]">
                <div className="flex items-start justify-between gap-4 border-b border-zinc-950/10 pb-5">
                  <div>
                    <h2 className="text-2xl font-black text-zinc-950">{group.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700">{group.description}</p>
                  </div>
                  <div className="rounded-lg bg-zinc-950 p-2 text-[#f6d365]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <ul className="mt-5 space-y-4">
                  {group.skills.map((skill) => {
                    const meta = levelMeta[skill.level];

                    return (
                      <li key={`${group.title}-${skill.name}`}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-sm font-black text-zinc-900">{skill.name}</span>
                          <span className={`rounded px-2 py-1 text-xs font-black ${meta.tone}`}>{skill.level}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded bg-zinc-950/10">
                          <div className={`h-full rounded bg-gradient-to-r from-zinc-950 via-sky-600 to-emerald-500 ${meta.width}`} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell border-y border-zinc-950/10 bg-[#111816] text-white">
        <div className="container-width section-padding">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <span className="section-label section-label-dark">Core Keywords</span>
              <h2 className="mt-4 text-3xl font-black">핵심 기술 키워드</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                프로젝트에서 실제로 사용한 기술을 숙련도와 함께 빠르게 훑을 수 있도록 정리했습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredKeywordSkills.map((skill) => {
                const meta = levelMeta[skill.level];

                return (
                  <span
                    key={skill.name}
                    className="rounded border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-zinc-200"
                  >
                    {skill.name}
                    <span className={`ml-2 rounded px-1.5 py-0.5 text-[11px] font-black ${meta.tone}`}>{skill.level}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-lg border border-zinc-950/10 bg-[#f8f5ee] p-6">
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-emerald-700" />
              <h2 className="text-xl font-black text-zinc-950">자격 및 공인 시험</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-zinc-700">
              {certifications.map((item) => (
                <li key={item.title} className="flex items-center justify-between gap-4 border-t border-zinc-950/10 pt-3">
                  <span className="font-black text-zinc-950">{item.title}</span>
                  <span className="text-xs font-bold uppercase text-zinc-500">{item.type}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-zinc-950/10 bg-zinc-950 p-6 text-white">
            <h2 className="text-2xl font-black">기술 적용 방식</h2>
            <div className="mt-5 grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                '백엔드: 도메인 모델링과 트랜잭션 안정성을 먼저 설계',
                '데이터: 재현 가능한 전처리 기준과 파이프라인 관리',
                'ML: 지표 선정 근거와 오차 해석을 함께 기록',
                '인프라: 배포 자동화와 관측성을 기본 조건으로 구성',
              ].map((item) => (
                <div key={item} className="bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/projects" className="bg-[#f6d365] !text-zinc-950 hover:bg-[#ffd87c]">
                프로젝트 보기
              </Button>
              <Button href="/contact" variant="outline" className="border-white/20 bg-white/[0.06] !text-white hover:bg-white/[0.12]">
                기술 문의
              </Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

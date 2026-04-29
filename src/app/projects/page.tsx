import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, GitBranch, Layers3, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '프로젝트',
  description: '하경한의 프로젝트 목록입니다. 백엔드, 데이터, ML, 모바일 개발 경험을 확인할 수 있습니다.',
};

const projectAccents = [
  'border-sky-500/30 bg-sky-500/10 text-sky-700',
  'border-emerald-500/30 bg-emerald-500/10 text-emerald-700',
  'border-amber-500/30 bg-amber-500/10 text-amber-700',
  'border-rose-500/30 bg-rose-500/10 text-rose-700',
];

export default function ProjectsPage() {
  const teamProjects = projects.filter((project) => project.projectType.includes('팀'));
  const personalProjects = projects.filter((project) => project.projectType.includes('개인'));
  const totalTechCount = new Set(projects.flatMap((project) => project.tech.map((skill) => skill.name))).size;

  return (
    <div className="min-h-screen bg-[#f4f0e7] pt-16 text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-950/10 bg-[#111816] text-white">
        <div className="circuit-grid absolute inset-0 opacity-40" />
        <div className="container-width section-padding relative z-10 section-shell">
          <span className="section-label section-label-dark">Projects</span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">프로젝트 전체 목록</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
                개인 프로젝트에서는 문제 정의와 실험 과정을, 팀 프로젝트에서는 아키텍처 리딩과 운영 안정성을 중심으로 정리했습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
              <StatCard icon={<Layers3 className="h-4 w-4" />} label="총 프로젝트" value={`${projects.length}건`} />
              <StatCard icon={<Users className="h-4 w-4" />} label="팀" value={`${teamProjects.length}건`} />
              <StatCard icon={<GitBranch className="h-4 w-4" />} label="개인" value={`${personalProjects.length}건`} />
              <StatCard icon={<Database className="h-4 w-4" />} label="기술" value={`${totalTechCount}+`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => {
              const accent = projectAccents[index % projectAccents.length];

              return (
                <article
                  key={project.id}
                  className="group grid gap-6 rounded-lg border border-zinc-950/10 bg-white p-5 shadow-[0_18px_55px_rgba(30,24,14,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[0.78fr_1.22fr]"
                >
                  <div className="flex flex-col justify-between gap-6 border-b border-zinc-950/10 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded border px-2.5 py-1 text-xs font-black ${accent}`}>
                          {project.projectType}
                        </span>
                        {project.contribution && (
                          <span className="rounded border border-zinc-950/10 bg-zinc-950 px-2.5 py-1 text-xs font-black text-white">
                            {project.contribution}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-5 text-3xl font-black text-zinc-950">{project.name}</h2>
                      <p className="mt-2 text-base font-bold text-zinc-600">{project.subtitle}</p>
                      <p className="mt-2 text-sm font-black uppercase text-zinc-400">{project.period}</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-zinc-500">{project.organization}</p>
                      <Link
                        href={`/projects/${project.id}`}
                        className="mt-4 inline-flex items-center text-sm font-black text-zinc-950 transition-colors group-hover:text-sky-700"
                      >
                        상세 내용 보기
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
                    <div>
                      <p className="text-sm leading-relaxed text-zinc-700">{project.summary}</p>
                      <ul className="mt-5 space-y-3">
                        {project.highlights.slice(0, 4).map((item) => (
                          <li key={`${project.id}-${item}`} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-zinc-950/10 bg-[#f8f5ee] p-4">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-amber-600" />
                          <p className="text-xs font-black uppercase text-zinc-500">Impact Stack</p>
                        </div>
                        <GitBranch className="h-4 w-4 text-zinc-400" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 10).map((skill) => (
                          <span
                            key={`${project.id}-${skill.name}`}
                            className="rounded border border-zinc-950/10 bg-white px-2.5 py-1 text-xs font-bold text-zinc-700"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-zinc-950/10 bg-white">
        <div className="container-width section-padding grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-zinc-950">프로젝트 맥락까지 바로 설명할 수 있습니다.</h2>
            <p className="mt-4 max-w-2xl text-zinc-700">
              아키텍처 의사결정, 성능 최적화 과정, 실패와 개선 기록까지 실무 관점으로 공유할 수 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/contact">연락하기</Button>
            <Button href="/" variant="outline">
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <article className="bg-[#111816]/95 p-4">
      <div className="mb-3 text-[#f6d365]">{icon}</div>
      <p className="text-[11px] font-bold uppercase text-zinc-500">{label}</p>
      <p className="mt-2 text-3xl font-black text-white">{value}</p>
    </article>
  );
}

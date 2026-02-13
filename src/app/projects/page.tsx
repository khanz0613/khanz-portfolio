import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '프로젝트',
  description: '하경한의 프로젝트 목록입니다. 백엔드, 데이터, ML, 모바일 개발 경험을 확인할 수 있습니다.',
};

export default function ProjectsPage() {
  const teamProjects = projects.filter((project) => project.projectType.includes('팀'));
  const personalProjects = projects.filter((project) => project.projectType.includes('개인'));

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="gradient-bg border-b border-slate-200">
        <div className="container-width section-padding section-shell">
          <span className="section-label">Projects</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">프로젝트 전체 목록</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            개인 프로젝트에서는 문제 해결 방식과 실험 과정을, 팀 프로젝트에서는 협업과 아키텍처 리딩 경험을 중심으로 정리했습니다.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="총 프로젝트" value={`${projects.length}건`} />
            <StatCard label="팀 프로젝트" value={`${teamProjects.length}건`} />
            <StatCard label="개인 프로젝트" value={`${personalProjects.length}건`} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="interactive-card flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {project.projectType}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {project.period}
                  </span>
                  {project.contribution && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {project.contribution}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900">{project.name}</h2>
                <p className="mt-1 text-sm font-medium text-slate-500">{project.subtitle}</p>
                <p className="mt-1 text-sm font-semibold text-blue-600">{project.organization}</p>
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li key={`${project.id}-${item}`} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 7).map((skill) => (
                      <span
                        key={`${project.id}-${skill.name}`}
                        className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-auto inline-flex items-center pt-6 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                >
                  상세 내용 보기
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-white">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">프로젝트 맥락까지 궁금하시면 바로 연락 주세요.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            아키텍처 의사결정, 성능 최적화 과정, 실패/개선 기록까지 실무 관점으로 설명드릴 수 있습니다.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tight text-slate-900">{value}</p>
    </article>
  );
}

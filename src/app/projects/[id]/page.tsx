import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Building2, CalendarDays, CircleCheckBig, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/lib/portfolio-data';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return { title: '프로젝트를 찾을 수 없습니다' };
  }

  return {
    title: `${project.name} - ${project.subtitle}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="gradient-bg border-b border-slate-200">
        <div className="container-width section-padding section-shell">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {project.projectType}
            </span>
            {project.contribution && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {project.contribution}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{project.name}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-600">{project.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              프로젝트 목록
            </Button>
            <Button href="/contact">관련 질문하기</Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-1">
            <h2 className="text-lg font-black tracking-tight text-slate-900">기본 정보</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CalendarDays size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <span>{project.period}</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <span>{project.projectType}</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                <span>{project.organization}</span>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-lg font-black tracking-tight text-slate-900">핵심 구현 및 성과</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white">
        <div className="container-width section-padding">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">활용 기술</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((skill) => (
              <span
                key={`${project.id}-${skill.name}`}
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
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">다음 프로젝트도 확인해보세요.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            기술 선택 근거와 성능 개선 과정이 궁금하면 언제든 문의해 주세요.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/projects">프로젝트 전체 보기</Button>
            <Button href="/contact" variant="outline">
              연락하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
